import React, { useState, useEffect } from 'react';
import { getActivePublishedPhones } from '../services/phoneService';
import { X, ChevronLeft, ChevronRight, Check, ArrowRight, Smartphone } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#fff5f5', color: '#c53030', fontFamily: "'Inter', sans-serif" }}>
          <h2>Ein Fehler ist aufgetreten (React Crash).</h2>
          <p><strong>Details:</strong> {this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function UsedPhonesContent() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Modal state
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [contactStatus, setContactStatus] = useState('idle');
  const [contactError, setContactError] = useState('');

  useEffect(() => {
    loadPhones();
  }, []);

  // Preload images silently in background
  useEffect(() => {
    if (phones.length > 0) {
      phones.forEach(p => {
        if (p.imageUrls) {
          p.imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
          });
        }
      });
    }
  }, [phones]);

  const loadPhones = async () => {
    try {
      const data = await getActivePublishedPhones();
      setPhones(data);
    } catch (err) {
      console.error(err);
      setError('Fehler beim Laden der Geräte. ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (phone) => {
    setSelectedPhone(phone);
    setCurrentImageIndex(0);
    setIsZoomed(false);
    setIsContactFormVisible(false);
    setContactStatus('idle');
    setContactForm({ name: '', email: '', phone: '', message: '' });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhone(null);
    setIsZoomed(false);
    setIsContactFormVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.phone) {
      setContactError('Bitte fülle alle markierten Pflichtfelder aus.');
      return;
    }
    setContactStatus('loading');
    setContactError('');

    const shortId = selectedPhone.id.substring(0, 6).toUpperCase();
    const payload = {
      source: 'Gebrauchtes Handy Anfrage',
      deviceId: `ID-${shortId}`,
      brand: selectedPhone.brand,
      model: selectedPhone.model,
      price: selectedPhone.price,
      condition: selectedPhone.condition,
      storage: selectedPhone.storage,
      name: contactForm.name,
      email: contactForm.email,
      phone: contactForm.phone,
      message: contactForm.message,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('https://n8n.srv1155101.hstgr.cloud/webhook/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Network error');
      setContactStatus('success');
    } catch (err) {
      console.error(err);
      setContactStatus('error');
      setContactError('Es gab ein Problem beim Senden. Bitte versuche es später noch einmal.');
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedPhone?.imageUrls) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedPhone.imageUrls.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedPhone?.imageUrls) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedPhone.imageUrls.length) % selectedPhone.imageUrls.length);
    }
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) setIsZoomed(false);
        else closeModal();
      }
      if (e.key === 'ArrowRight' && selectedPhone) nextImage(e);
      if (e.key === 'ArrowLeft' && selectedPhone) prevImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhone, isZoomed]);

  return (
    <div style={{ backgroundColor: '#fdfdfd', minHeight: '100vh', fontFamily: "'Inter', sans-serif", paddingBottom: '80px' }}>
      
      {/* GLOBAL STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes modalFadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* HERO SECTION - RESTRAINED LOCAL BUSINESS VIBE */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eaeaea', padding: '60px 20px', textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.2rem', margin: '0 0 12px 0', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em' }}>
            Unsere aktuellen Gebrauchtgeräte
          </h1>
          <p style={{ fontSize: '1.05rem', margin: 0, color: '#4b5563', lineHeight: 1.5, maxWidth: '500px', marginInline: 'auto' }}>
            Geprüfte Smartphones inklusive Garantie. Direkt vor Ort im iRepair Store Ingolstadt ansehen und mitnehmen.
          </p>
        </div>
      </div>
      
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 0' }}>
            <div style={{ width: '40px', height: '40px', border: '3px solid #f3f4f6', borderTop: '3px solid #111827', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <p style={{ marginTop: '20px', color: '#4b5563', fontSize: '0.95rem' }}>Angebote werden geladen...</p>
          </div>
        )}

        {error && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '20px', borderRadius: '4px', textAlign: 'center', color: '#b91c1c' }}>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Fehler beim Laden</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem' }}>{error}</p>
          </div>
        )}
        
        {!loading && !error && phones.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '4px' }}>
            <Smartphone size={32} color="#9ca3af" style={{ marginBottom: '16px' }} />
            <h3 style={{ margin: '0 0 8px 0', color: '#111827', fontSize: '1.2rem', fontWeight: 600 }}>Aktuell ausverkauft</h3>
            <p style={{ margin: 0, color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.5 }}>Derzeit haben wir leider keine gebrauchten Geräte auf Lager.<br/>Schau gerne in ein paar Tagen wieder vorbei!</p>
          </div>
        )}

        {/* PRODUCT GRID - CLEAN & GROUNDED */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '24px',
          justifyContent: phones.length <= 2 ? 'start' : 'start' 
        }}>
          {phones.map(phone => (
            <div key={phone.id} 
              onClick={() => openModal(phone)}
              style={{ 
                background: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '4px', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
                position: 'relative'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#9ca3af'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; }}
            >
              
              {/* DEVICE ID - TOP LEFT */}
              <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10 }}>
                 <span style={{ background: '#f3f4f6', color: '#6b7280', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, border: '1px solid #e5e7eb' }}>
                   ID-{phone.id.substring(0, 6).toUpperCase()}
                 </span>
              </div>

              {/* STATUS BADGE - RESTRAINED, NO GLOW */}
              <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}>
                {phone.status === 'active' && (
                  <span style={{ 
                    background: '#fff', color: '#15803d', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, 
                    display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid #16a34a', boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                  }}>
                    <span style={{ width: '6px', height: '6px', background: '#16a34a', borderRadius: '50%' }}></span>
                    Verfügbar
                  </span>
                )}
                {phone.status === 'reserved' && (
                  <span style={{ 
                    background: '#fff', color: '#b45309', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, 
                    display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid #d97706', boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                  }}>
                    <span style={{ width: '6px', height: '6px', background: '#d97706', borderRadius: '50%' }}></span>
                    Reserviert
                  </span>
                )}
              </div>

              {/* IMAGE AREA */}
              <div style={{ height: '280px', background: '#f9fafb', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #f3f4f6' }}>
                {phone.imageUrls && Array.isArray(phone.imageUrls) && phone.imageUrls.length > 0 ? (
                  <img src={phone.imageUrls[0]} alt={`${phone.brand} ${phone.model}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: phone.status === 'reserved' ? 'grayscale(20%)' : 'none' }} />
                ) : (
                  <div style={{ color: '#9ca3af', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Smartphone size={32} strokeWidth={1.5} />
                    <span style={{ fontSize: '0.85rem' }}>Kein Bild</span>
                  </div>
                )}
              </div>
              
              {/* CONTENT AREA */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ color: '#6b7280', fontSize: '0.85rem', display: 'block', marginBottom: '2px' }}>{phone.brand}</span>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#111827', fontWeight: 600, lineHeight: 1.3 }}>
                    {phone.model}
                  </h3>
                </div>
                
                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#f3f4f6', color: '#374151', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                    {phone.storage}
                  </span>
                  <span style={{ background: '#f3f4f6', color: '#374151', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Check size={12} /> {phone.condition}
                  </span>
                </div>
                
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827' }}>
                    {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(phone.price)}
                  </div>
                  <div style={{ color: '#1d3a8f', fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Details <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL - GROUNDED, PROFESSIONAL */}
      {selectedPhone && (
        <div 
          onClick={closeModal}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
            background: 'rgba(0, 0, 0, 0.6)', zIndex: 999999, display: 'flex', 
            alignItems: 'center', justifyContent: 'center', padding: '20px', boxSizing: 'border-box'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ 
              background: '#fff', width: '100%', maxWidth: '960px', maxHeight: '90vh', 
              borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', position: 'relative',
              animation: 'modalFadeIn 0.2s ease-out forwards'
            }}
          >
            {/* Close Button */}
            <button onClick={closeModal} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f3f4f6', border: 'none', borderRadius: '4px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, color: '#4b5563' }} title="Schließen">
              <X size={24} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: '100%', overflowY: 'auto' }}>
              
              {/* Left: Image Gallery */}
              <div 
                onTouchStart={(e) => {
                  window.modalTouchStartX = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  if (!window.modalTouchStartX) return;
                  const distance = window.modalTouchStartX - e.changedTouches[0].clientX;
                  if (distance > 50) nextImage(e);
                  if (distance < -50) prevImage(e);
                  window.modalTouchStartX = null;
                }}
                style={{ flex: '1 1 50%', minWidth: '300px', background: '#f9fafb', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', minHeight: '350px' }}
              >
                
                {selectedPhone.imageUrls && Array.isArray(selectedPhone.imageUrls) && selectedPhone.imageUrls.length > 0 ? (
                  <>
                    <img 
                      key={currentImageIndex} 
                      src={selectedPhone.imageUrls[currentImageIndex]} 
                      alt="Gerät" 
                      onClick={() => setIsZoomed(true)}
                      style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain', animation: 'modalFadeIn 0.2s ease-out', cursor: 'zoom-in' }} 
                    />
                    
                    {selectedPhone.imageUrls.length > 1 && (
                      <>
                        <button onClick={prevImage} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '4px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', color: '#111827' }}>
                          <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextImage} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '4px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', color: '#111827' }}>
                          <ChevronRight size={24} />
                        </button>
                        
                        <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '6px' }}>
                          {selectedPhone.imageUrls.map((_, idx) => (
                            <div key={idx} style={{ width: '8px', height: '8px', borderRadius: '50%', background: idx === currentImageIndex ? '#111827' : '#d1d5db', transition: 'background 0.3s' }} />
                          ))}
                        </div>
                      </>
                    )}

                    {/* FULLSCREEN ZOOM OVERLAY */}
                    {isZoomed && (
                      <div 
                        onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                        style={{
                          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                          background: 'rgba(0,0,0,0.95)', zIndex: 9999999, display: 'flex',
                          alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out'
                        }}
                      >
                        <button style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '10px' }}>
                           <X size={32} />
                        </button>
                        <img 
                          src={selectedPhone.imageUrls[currentImageIndex]} 
                          style={{ maxWidth: '95vw', maxHeight: '95vh', objectFit: 'contain' }}
                          onClick={(e) => e.stopPropagation()} 
                          alt="Zoomed"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div style={{ color: '#9ca3af', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Smartphone size={48} strokeWidth={1.5} />
                    <span style={{ fontSize: '0.95rem' }}>Kein Bild verfügbar</span>
                  </div>
                )}
              </div>

              {/* Right: Details / Form */}
              <div style={{ flex: '1 1 50%', minWidth: '300px', padding: '40px', display: 'flex', flexDirection: 'column', background: '#fff' }}>
                {!isContactFormVisible ? (
                  <>
                    <div style={{ marginBottom: '24px' }}>
                      {selectedPhone.status === 'active' && (
                        <span style={{ background: '#fff', color: '#15803d', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '16px', border: '1px solid #16a34a' }}>
                          <span style={{ width: '6px', height: '6px', background: '#16a34a', borderRadius: '50%' }}></span>
                          Verfügbar
                        </span>
                      )}
                      {selectedPhone.status === 'reserved' && (
                        <span style={{ background: '#fff', color: '#b45309', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '16px', border: '1px solid #d97706' }}>
                          <span style={{ width: '6px', height: '6px', background: '#d97706', borderRadius: '50%' }}></span>
                          Reserviert
                        </span>
                      )}
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '0.95rem' }}>{selectedPhone.brand}</p>
                          <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#111827', fontWeight: 700, lineHeight: 1.2 }}>{selectedPhone.model}</h2>
                        </div>
                        <span style={{ background: '#f3f4f6', color: '#6b7280', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>
                          ID-{selectedPhone.id.substring(0, 6).toUpperCase()}
                        </span>
                      </div>
                      
                      <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', margin: '20px 0 0 0' }}>
                        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(selectedPhone.price)}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                      <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '4px', border: '1px solid #f3f4f6' }}>
                        <span style={{ color: '#6b7280', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Speicher</span>
                        <p style={{ margin: '4px 0 0 0', fontWeight: 600, color: '#111827', fontSize: '1.05rem' }}>{selectedPhone.storage}</p>
                      </div>
                      <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '4px', border: '1px solid #f3f4f6' }}>
                        <span style={{ color: '#6b7280', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Zustand</span>
                        <p style={{ margin: '4px 0 0 0', fontWeight: 600, color: '#111827', fontSize: '1.05rem' }}>{selectedPhone.condition}</p>
                      </div>
                    </div>

                    <div style={{ flex: 1, marginBottom: '32px' }}>
                      <span style={{ color: '#111827', fontSize: '0.95rem', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Gerätedetails</span>
                      <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.6, whiteSpace: 'pre-line', fontSize: '0.95rem' }}>
                        {selectedPhone.description || 'Keine weitere Beschreibung angegeben.'}
                      </p>
                    </div>

                    <div style={{ marginTop: 'auto' }}>
                      <button 
                        onClick={() => setIsContactFormVisible(true)}
                        style={{ 
                          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', width: '100%', background: '#1d3a8f', color: '#fff', 
                          border: 'none', padding: '14px', borderRadius: '4px', fontWeight: 600, 
                          fontSize: '1.05rem', textAlign: 'center', transition: 'background 0.2s', cursor: 'pointer'
                        }}
                        onMouseOver={e => e.currentTarget.style.background = '#152b6b'}
                        onMouseOut={e => e.currentTarget.style.background = '#1d3a8f'}
                      >
                        Gerät anfragen
                      </button>
                      <p style={{ textAlign: 'center', margin: '16px 0 0 0', fontSize: '0.85rem', color: '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <Check size={14} color="#16a34a" /> Direkt vor Ort im Store ansehen
                      </p>
                    </div>
                  </>
                ) : (
                  // CONTACT FORM VIEW
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button 
                        onClick={() => setIsContactFormVisible(false)}
                        style={{ background: 'transparent', border: 'none', color: '#4b5563', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}
                      >
                        <ChevronLeft size={20} /> Zurück
                      </button>
                    </div>
                    
                    <h3 style={{ fontSize: '1.4rem', margin: '0 0 8px 0', color: '#111827' }}>Anfrage senden</h3>
                    <p style={{ margin: '0 0 24px 0', color: '#4b5563', fontSize: '0.9rem' }}>
                      Für: <strong>{selectedPhone.brand} {selectedPhone.model}</strong> (ID-{selectedPhone.id.substring(0, 6).toUpperCase()})
                    </p>

                    {contactStatus === 'success' ? (
                      <div style={{ background: '#ecfdf5', border: '1px solid #10b981', padding: '24px', borderRadius: '6px', textAlign: 'center', color: '#047857', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Check size={48} color="#10b981" style={{ margin: '0 auto 16px auto' }} />
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>Anfrage erfolgreich gesendet!</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem' }}>Wir melden uns schnellstmöglich bei dir zurück.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div style={{ marginBottom: '16px' }}>
                          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', fontWeight: 600, color: '#374151' }}>Name *</label>
                          <input 
                            type="text" 
                            value={contactForm.name}
                            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                            required
                            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '0.95rem', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', fontWeight: 600, color: '#374151' }}>E-Mail *</label>
                          <input 
                            type="email" 
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                            required
                            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '0.95rem', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', fontWeight: 600, color: '#374151' }}>Telefonnummer *</label>
                          <input 
                            type="tel" 
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                            required
                            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '0.95rem', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', fontWeight: 600, color: '#374151' }}>Nachricht (optional)</label>
                          <textarea 
                            value={contactForm.message}
                            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                            rows={3}
                            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '0.95rem', boxSizing: 'border-box', resize: 'vertical' }}
                          />
                        </div>

                        {contactError && (
                          <div style={{ color: '#dc2626', fontSize: '0.9rem', marginBottom: '16px', padding: '8px', background: '#fef2f2', borderRadius: '4px', border: '1px solid #fecaca' }}>
                            {contactError}
                          </div>
                        )}

                        <div style={{ marginTop: 'auto' }}>
                          <button 
                            type="submit"
                            disabled={contactStatus === 'loading'}
                            style={{ 
                              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', width: '100%', background: '#1d3a8f', color: '#fff', 
                              border: 'none', padding: '14px', borderRadius: '4px', fontWeight: 600, 
                              fontSize: '1.05rem', textAlign: 'center', transition: 'background 0.2s', cursor: contactStatus === 'loading' ? 'wait' : 'pointer',
                              opacity: contactStatus === 'loading' ? 0.7 : 1
                            }}
                          >
                            {contactStatus === 'loading' ? 'Wird gesendet...' : 'Kostenlos anfragen'}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function UsedPhones() {
  return (
    <ErrorBoundary>
      <UsedPhonesContent />
    </ErrorBoundary>
  );
}
