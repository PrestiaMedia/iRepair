import React, { useState } from 'react';
import { createPhone, updatePhone } from '../services/phoneService';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../lib/firebase';
import imageCompression from 'browser-image-compression';
import { UploadCloud, X, Check, Eye, EyeOff } from 'lucide-react';

const STANDARD_BRANDS = ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Google', 'OnePlus'];
const STANDARD_STORAGES = ['64GB', '128GB', '256GB', '512GB', '1TB'];

export default function AdminPhoneForm({ phone, onSuccess, onCancel }) {
  const initialBrand = phone?.brand || 'Apple';
  const isCustomBrand = phone && !STANDARD_BRANDS.includes(initialBrand);
  
  const initialStorage = phone?.storage || '128GB';
  const isCustomStorage = phone && !STANDARD_STORAGES.includes(initialStorage);

  const [formData, setFormData] = useState({
    brand: isCustomBrand ? 'Andere' : initialBrand,
    customBrand: isCustomBrand ? initialBrand : '',
    model: phone?.model || '',
    storage: isCustomStorage ? 'Andere' : initialStorage,
    customStorage: isCustomStorage ? initialStorage : '',
    condition: phone?.condition || 'Sehr gut',
    price: phone?.price || '',
    description: phone?.description || '',
    status: phone?.status || 'active',
    published: phone?.published ?? true,
    imageUrls: phone?.imageUrls || [],
    imageMeta: phone?.imageMeta || []
  });
  
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleStatusChange = (newStatus) => {
    setFormData(prev => ({ ...prev, status: newStatus }));
  };

  const handlePublishedToggle = () => {
    setFormData(prev => ({ ...prev, published: !prev.published }));
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setError('');
    
    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        setError('Nur Bilddateien sind erlaubt.');
        continue;
      }
      
      try {
        const options = {
          maxSizeMB: 5,
          maxWidthOrHeight: 1600,
          useWebWorker: true,
          fileType: file.type === 'image/png' ? 'image/png' : 'image/jpeg'
        };
        
        const compressedFile = await imageCompression(file, options);
        
        setImageFiles(prev => [...prev, {
          file: compressedFile,
          previewUrl: URL.createObjectURL(compressedFile),
          originalSize: (file.size / 1024 / 1024).toFixed(2),
          compressedSize: (compressedFile.size / 1024 / 1024).toFixed(2)
        }]);
      } catch (err) {
        console.error(err);
        setError('Fehler bei der Bildkompression.');
      }
    }
  };

  const removePendingImage = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = async (index) => {
    if (!window.confirm('Bild wirklich löschen? (Wird sofort aus dem Speicher entfernt)')) return;
    
    setLoading(true);
    try {
      const metaToRemove = formData.imageMeta[index];
      const newUrls = [...formData.imageUrls];
      const newMeta = [...formData.imageMeta];
      
      newUrls.splice(index, 1);
      newMeta.splice(index, 1);

      if (metaToRemove?.path) {
        const imageRef = ref(storage, metaToRemove.path);
        await deleteObject(imageRef);
      }

      if (phone?.id) {
        await updatePhone(phone.id, { imageUrls: newUrls, imageMeta: newMeta });
      }

      setFormData(prev => ({ ...prev, imageUrls: newUrls, imageMeta: newMeta }));
    } catch (err) {
      console.error(err);
      setError('Fehler beim Löschen des Bildes.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const numericPrice = parseFloat(formData.price);
      if (isNaN(numericPrice)) {
        throw new Error('Preis muss eine gültige Zahl sein.');
      }

      const finalBrand = formData.brand === 'Andere' ? formData.customBrand.trim() : formData.brand;
      const finalStorage = formData.storage === 'Andere' ? formData.customStorage.trim() : formData.storage;

      if (!finalBrand) throw new Error('Bitte Marke eingeben.');
      if (!finalStorage) throw new Error('Bitte Speicher eingeben.');

      const phonePayload = { 
        ...formData, 
        brand: finalBrand,
        storage: finalStorage,
        price: numericPrice 
      };
      
      // Remove temporary custom fields before sending to Firestore
      delete phonePayload.customBrand;
      delete phonePayload.customStorage;

      let phoneId = phone?.id;

      if (phoneId) {
        await updatePhone(phoneId, phonePayload);
      } else {
        phoneId = await createPhone(phonePayload);
      }

      if (imageFiles.length > 0) {
        const updatedImageUrls = [...formData.imageUrls];
        const updatedImageMeta = [...formData.imageMeta];

        for (const imgObj of imageFiles) {
          const fileName = `${Date.now()}_${imgObj.file.name}`;
          const filePath = `phones/${phoneId}/${fileName}`;
          const imageRef = ref(storage, filePath);
          
          await uploadBytes(imageRef, imgObj.file);
          const downloadUrl = await getDownloadURL(imageRef);
          
          const img = new Image();
          img.src = imgObj.previewUrl;
          await new Promise(resolve => img.onload = resolve);
          
          updatedImageUrls.push(downloadUrl);
          updatedImageMeta.push({
            url: downloadUrl,
            path: filePath,
            name: fileName,
            sizeBytes: imgObj.file.size,
            contentType: imgObj.file.type,
            width: img.width,
            height: img.height
          });
        }
        
        await updatePhone(phoneId, { 
          imageUrls: updatedImageUrls,
          imageMeta: updatedImageMeta
        });
      }

      onSuccess();
    } catch (err) {
      console.error(err);
      setError(err.message || 'Fehler beim Speichern.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden', border: '1px solid #e2e8f0', marginTop: '20px', paddingBottom: '80px', fontFamily: "'Inter', sans-serif" }}>
      
      {/* HEADER */}
      <div style={{ background: '#1d3a8f', padding: '20px 30px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 600 }}>{phone ? 'Gerät bearbeiten' : 'Neues Gerät anlegen'}</h2>
          {phone && <p style={{ margin: '4px 0 0 0', opacity: 0.8, fontSize: '0.9rem' }}>ID: {phone.id}</p>}
        </div>
        <button onClick={onCancel} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '4px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s' }}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          title="Schließen">
          <X size={24} />
        </button>
      </div>
      
      <div style={{ padding: '30px' }}>
        {error && <div style={{ background: '#fff5f5', borderLeft: '4px solid #f56565', color: '#c53030', padding: '16px', borderRadius: '8px', marginBottom: '24px', fontWeight: 500 }}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} id="phone-form">
          
          {/* SECTION: Sichtbarkeit (Pushed to top for UX) */}
          <section>
            <h4 style={sectionTitleStyle}>Sichtbarkeit & Status</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              
              {/* Modern Segmented Control for Status */}
              <div>
                <label style={labelStyle}>Verkaufsstatus</label>
                <div style={{ display: 'flex', background: '#edf2f7', padding: '4px', borderRadius: '10px', gap: '4px' }}>
                  <button type="button" onClick={() => handleStatusChange('active')} style={segmentedBtnStyle(formData.status === 'active', '#f0fff4', '#276749')}>
                    Verfügbar
                  </button>
                  <button type="button" onClick={() => handleStatusChange('reserved')} style={segmentedBtnStyle(formData.status === 'reserved', '#fffff0', '#975a16')}>
                    Reserviert
                  </button>
                  <button type="button" onClick={() => handleStatusChange('sold')} style={segmentedBtnStyle(formData.status === 'sold', '#fff5f5', '#c53030')}>
                    Verkauft
                  </button>
                </div>
              </div>

              {/* Modern Toggle for Published */}
              <div>
                <label style={labelStyle}>Sichtbarkeit im Shop</label>
                <div 
                  onClick={handlePublishedToggle}
                  style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', background: formData.published ? '#f0fff4' : '#edf2f7', padding: '12px 15px', borderRadius: '10px', border: `1px solid ${formData.published ? '#c6f6d5' : '#e2e8f0'}`, transition: 'all 0.2s' }}
                >
                  <div style={{ width: '46px', height: '24px', background: formData.published ? '#48bb78' : '#cbd5e0', borderRadius: '24px', position: 'relative', transition: 'background 0.3s' }}>
                    <div style={{ position: 'absolute', top: '2px', left: formData.published ? '24px' : '2px', width: '20px', height: '20px', background: '#fff', borderRadius: '50%', transition: 'left 0.3s', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 600, color: formData.published ? '#276749' : '#45505f', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {formData.published ? <><Eye size={18}/> Online sichtbar</> : <><EyeOff size={18}/> Entwurf (Versteckt)</>}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION: Gerätedaten */}
          <section>
            <h4 style={sectionTitleStyle}>Gerätedaten</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div>
                <label style={labelStyle}>Marke</label>
                <select name="brand" value={formData.brand} onChange={handleChange} required style={inputStyle}>
                  {STANDARD_BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                  <option value="Andere">Andere</option>
                </select>
                {formData.brand === 'Andere' && (
                  <div style={customInputAnimation}>
                    <input 
                      name="customBrand" 
                      placeholder="Marke eingeben" 
                      value={formData.customBrand} 
                      onChange={handleChange} 
                      required 
                      style={{...inputStyle, marginTop: '8px'}} 
                      autoFocus
                    />
                  </div>
                )}
              </div>
              
              <div>
                <label style={labelStyle}>Modell</label>
                <input name="model" placeholder="z.B. iPhone 13 Pro" value={formData.model} onChange={handleChange} required style={inputStyle} />
              </div>
              
              <div>
                <label style={labelStyle}>Speicher</label>
                <select name="storage" value={formData.storage} onChange={handleChange} style={inputStyle}>
                  {STANDARD_STORAGES.map(s => <option key={s} value={s}>{s}</option>)}
                  <option value="Andere">Andere</option>
                </select>
                {formData.storage === 'Andere' && (
                  <div style={customInputAnimation}>
                    <input 
                      name="customStorage" 
                      placeholder="Speicher eingeben (z.B. 2TB)" 
                      value={formData.customStorage} 
                      onChange={handleChange} 
                      required 
                      style={{...inputStyle, marginTop: '8px'}} 
                      autoFocus
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* SECTION: Preis & Zustand */}
          <section>
            <h4 style={sectionTitleStyle}>Preis & Zustand</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div>
                <label style={labelStyle}>Zustand</label>
                <select name="condition" value={formData.condition} onChange={handleChange} style={inputStyle}>
                  <option value="Neu">Neu</option>
                  <option value="Wie neu">Wie neu</option>
                  <option value="Sehr gut">Sehr gut</option>
                  <option value="Gut">Gut</option>
                  <option value="Akzeptabel">Akzeptabel</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Preis (€)</label>
                <input name="price" type="number" step="0.01" placeholder="399.00" value={formData.price} onChange={handleChange} required style={inputStyle} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Ausführliche Beschreibung</label>
                <textarea 
                  name="description" 
                  placeholder="z. B. Akkuzustand (z.B. 88%), Lieferumfang, Kratzer, Garantie, Besonderheiten..." 
                  value={formData.description} 
                  onChange={handleChange} 
                  rows="4" 
                  style={{...inputStyle, resize: 'vertical', lineHeight: 1.6}} 
                />
              </div>
            </div>
          </section>

          {/* SECTION: Bilder */}
          <section>
            <h4 style={sectionTitleStyle}>Bilder (Max 5MB)</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Dropzone Area */}
              <div style={{ border: '2px dashed #cbd5e0', borderRadius: '16px', padding: '50px 20px', textAlign: 'center', background: '#f8fafc', transition: 'background 0.2s', cursor: 'pointer' }}>
                <input type="file" accept="image/*" multiple onChange={handleImageChange} id="file-upload" style={{ display: 'none' }} />
                <label htmlFor="file-upload" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', margin: 0 }}>
                  <div style={{ background: '#e1e7f5', padding: '16px', borderRadius: '50%', color: '#1d3a8f' }}>
                    <UploadCloud size={36} />
                  </div>
                  <div>
                    <span style={{ fontWeight: 600, color: '#1d3a8f', fontSize: '1.1rem' }}>Bilder auswählen</span>
                    <span style={{ color: '#45505f' }}> oder hier ablegen</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#718096' }}>JPEG, PNG (werden automatisch auf max 5MB komprimiert)</p>
                </label>
              </div>

              {/* Uploaded / Preview Grid */}
              {(formData.imageUrls.length > 0 || imageFiles.length > 0) && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px' }}>
                  
                  {/* Existing Images */}
                  {formData.imageUrls.map((url, i) => (
                    <div key={`existing-${i}`} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', aspectRatio: '1/1', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                      <img src={url} alt="Gespeichert" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '0.75rem', padding: '6px', textAlign: 'center', backdropFilter: 'blur(4px)' }}>Gespeichert</div>
                      <button type="button" onClick={() => removeExistingImage(i)} style={removeBtnStyle} title="Löschen">
                        <X size={16} />
                      </button>
                    </div>
                  ))}

                  {/* Pending Upload Images */}
                  {imageFiles.map((imgObj, i) => (
                    <div key={`pending-${i}`} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '2px solid #1d3a8f', aspectRatio: '1/1', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                      <img src={imgObj.previewUrl} alt="Neu" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#1d3a8f', color: 'white', fontSize: '0.75rem', padding: '6px', textAlign: 'center' }}>
                        Neu ({imgObj.compressedSize}MB)
                      </div>
                      <button type="button" onClick={() => removePendingImage(i)} style={removeBtnStyle} title="Verwerfen">
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  
                </div>
              )}
            </div>
          </section>

        </form>
      </div>

      {/* STICKY BOTTOM ACTION BAR */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid #edf2f7', 
        padding: '16px 30px', display: 'flex', justifyContent: 'flex-end', gap: '16px', borderRadius: '0 0 20px 20px',
        boxShadow: '0 -4px 15px rgba(0,0,0,0.03)'
      }}>
        <button type="button" onClick={onCancel} style={{
          background: '#edf2f7', color: '#45505f', padding: '14px 28px', borderRadius: '10px', border: 'none', 
          fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'background 0.2s', fontFamily: "'Inter', sans-serif"
        }}
        onMouseOver={e => e.currentTarget.style.background = '#e2e8f0'}
        onMouseOut={e => e.currentTarget.style.background = '#edf2f7'}>
          Abbrechen
        </button>
        <button type="submit" form="phone-form" disabled={loading} style={{
          background: '#1d3a8f', color: '#fff', padding: '14px 32px', borderRadius: '10px', border: 'none', 
          fontWeight: 600, fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s',
          display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Inter', sans-serif"
        }}
        onMouseOver={e => !loading && (e.currentTarget.style.background = '#152b6b')}
        onMouseOut={e => !loading && (e.currentTarget.style.background = '#1d3a8f')}>
          {loading ? 'Speichere...' : <><Check size={20} /> Gerät speichern</>}
        </button>
      </div>

    </div>
  );
}

// ----- STYLES -----
const sectionTitleStyle = {
  margin: '0 0 24px 0', 
  color: '#1f2c33', 
  fontSize: '1.2rem', 
  borderBottom: '2px solid #edf2f7', 
  paddingBottom: '12px',
  fontWeight: 600
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem', 
  fontWeight: 600, 
  color: '#45505f', 
  marginBottom: '8px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const inputStyle = {
  padding: '12px 14px',
  borderRadius: '6px',
  border: '1px solid #cbd5e1',
  fontSize: '0.95rem',
  color: '#0f172a',
  background: '#fff',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border 0.2s, box-shadow 0.2s',
  outline: 'none',
  fontFamily: "'Inter', sans-serif"
};

const customInputAnimation = {
  animation: 'slideDown 0.2s ease-out forwards',
  overflow: 'hidden'
};

const segmentedBtnStyle = (isActive, activeBg, activeColor) => ({
  flex: 1,
  padding: '10px',
  border: '1px solid',
  borderColor: isActive ? activeBg : '#e2e8f0',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'all 0.15s',
  background: isActive ? activeBg : '#f8fafc',
  color: isActive ? activeColor : '#64748b',
  boxShadow: isActive ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
  fontFamily: "'Inter', sans-serif"
});

const removeBtnStyle = {
  position: 'absolute', 
  top: '8px', 
  right: '8px', 
  background: '#ef4444', 
  color: 'white', 
  border: 'none', 
  borderRadius: '4px', 
  width: '40px', 
  height: '40px', 
  cursor: 'pointer', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  transition: 'background 0.2s',
  zIndex: 10
};

// Add slideDown keyframe globally
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    input:focus, select:focus, textarea:focus {
      border-color: #1d3a8f !important;
      box-shadow: 0 0 0 2px rgba(29, 58, 143, 0.15) !important;
    }
    select {
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 12px center;
      background-size: 16px;
      padding-right: 40px !important;
    }
  `;
  document.head.appendChild(style);
}
