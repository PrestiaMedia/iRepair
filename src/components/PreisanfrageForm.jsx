import React, { useState, useMemo } from 'react';
import { deviceCatalog } from '../data/deviceCatalog';

const PreisanfrageForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    category: '',
    brand: '',
    customBrand: '',
    model: '',
    customModel: '',
    issue: '',
    customIssue: '',
    repairMethod: '',
    contactMethod: '',
    email: '',
    phone: '',
    name: '',
    message: '',
    privacyAccepted: false
  });

  const [modelSearch, setModelSearch] = useState('');
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  // Derived data based on selections
  const selectedCategoryData = deviceCatalog.find(c => c.category === formData.category);
  const brands = selectedCategoryData ? selectedCategoryData.brands : [];
  const selectedBrandData = brands.find(b => b.name === formData.brand);
  const models = selectedBrandData ? selectedBrandData.models : [];
  const issues = selectedCategoryData ? selectedCategoryData.issues : [];

  const filteredModels = models.filter(m => m.toLowerCase().includes(modelSearch.toLowerCase()));

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Reset dependents
    if (name === 'category') {
      setFormData(prev => ({ ...prev, brand: '', customBrand: '', model: '', customModel: '', issue: '', customIssue: '' }));
      setModelSearch('');
    }
    if (name === 'brand') {
      setFormData(prev => ({ ...prev, customBrand: '', model: '', customModel: '' }));
      setModelSearch('');
    }
    if (name === 'issue' && value !== 'Sonstiges Problem') {
      setFormData(prev => ({ ...prev, customIssue: '' }));
    }
  };

  const validateStep1 = () => {
    if (!formData.category || !formData.repairMethod) return false;
    
    if (formData.category === 'Sonstiges Gerät') {
      if (!formData.customBrand || !formData.customModel || !formData.customIssue) return false;
    } else {
      if (!formData.brand) return false;
      if (formData.brand === 'Andere / nicht gelistet') {
        if (!formData.customBrand || !formData.customModel) return false;
      } else {
        if (!formData.model && formData.model !== 'Mein Modell ist nicht dabei' && !formData.customModel) return false;
        if (formData.model === 'Mein Modell ist nicht dabei' && !formData.customModel) return false;
      }
      
      if (!formData.issue) return false;
      if (formData.issue === 'Sonstiges Problem' && !formData.customIssue) return false;
    }
    
    return true;
  };

  const validateStep2 = () => {
    if (!formData.contactMethod || !formData.name || !formData.privacyAccepted) return false;
    if (formData.contactMethod === 'Email' && !formData.email) return false;
    if (formData.contactMethod === 'Telefon' && !formData.phone) return false;
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
      setError('');
    } else {
      setError('Bitte fülle alle markierten Pflichtfelder aus.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) {
      setError('Bitte fülle alle markierten Pflichtfelder aus und akzeptiere den Datenschutz.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Prepare payload dynamically requested by user
    const payload = {
      category: formData.category,
      brand: formData.brand,
      customBrand: formData.customBrand,
      model: formData.model,
      manualModel: formData.customModel,
      issue: formData.issue,
      customIssue: formData.customIssue,
      serviceMethod: formData.repairMethod,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferredContact: formData.contactMethod,
      message: formData.message,
      privacyAccepted: formData.privacyAccepted,
      timestamp: new Date().toISOString(),
      source: 'Website Preisanfrage'
    };

    try {
      // TODO: Replace with actual n8n webhook URL later
      // const webhookUrl = 'https://hook.eu1.make.com/placeholder';
      
      console.log('Sending payload to n8n:', payload);
      
      /*
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Network error');
      */
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Es gab ein Problem beim Senden. Bitte versuche es später noch einmal.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    fontFamily: 'sans-serif',
    boxSizing: 'border-box',
    marginBottom: '15px',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#333'
  };

  const buttonStyle = {
    backgroundColor: '#0056b3',
    color: '#fff',
    border: 'none',
    padding: '15px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
    transition: 'background-color 0.2s'
  };

  const backButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
    marginRight: '15px',
    width: 'auto'
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 20px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <i className="fas fa-check-circle" style={{ color: '#28a745', fontSize: '60px', marginBottom: '20px' }}></i>
        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#1a1a1a' }}>Vielen Dank für Deine Anfrage!</h3>
        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
          Wir haben Deine Daten erfolgreich erhalten und werden uns in Kürze bei Dir melden, um die Reparatur zu besprechen.
        </p>
      </div>
    );
  }

  return (
    <>
    <style>
    {`
      #preisanfrage {
        padding: 40px;
      }
      @media (max-width: 600px) {
        #preisanfrage {
          padding: 20px !important;
        }
      }
    `}
    </style>
    <div id="preisanfrage" style={{ maxWidth: '750px', margin: '40px auto', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', fontFamily: 'sans-serif' }}>
      <h3 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', fontWeight: 'bold' }}>Reparatur anfragen</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: step === 1 ? '#0056b3' : '#28a745', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px' }}>1</div>
          <div style={{ height: '4px', width: '60px', backgroundColor: step === 2 ? '#28a745' : '#eaeaea', margin: '0 10px', borderRadius: '2px' }}></div>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: step === 2 ? '#0056b3' : '#eaeaea', color: step === 2 ? '#fff' : '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px' }}>2</div>
        </div>
      </div>

      {error && (
        <div style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '15px', borderRadius: '8px', marginBottom: '25px', border: '1px solid #f5c6cb', fontWeight: '500' }}>
          {error}
        </div>
      )}

      {step === 1 && (
        <div>
          <h4 style={{ fontSize: '22px', marginBottom: '25px', borderBottom: '2px solid #f0f0f0', paddingBottom: '15px', color: '#1a1a1a' }}>Gerätedetails</h4>
          
          <label style={labelStyle}>Was möchtest Du reparieren lassen? *</label>
          <select name="category" value={formData.category} onChange={handleInputChange} style={inputStyle}>
            <option value="">Bitte wählen...</option>
            {deviceCatalog.map(c => <option key={c.category} value={c.category}>{c.category}</option>)}
          </select>

          {formData.category === 'Sonstiges Gerät' && (
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '15px', border: '1px dashed #ccc' }}>
              <label style={labelStyle}>Hersteller manuell eingeben *</label>
              <input type="text" name="customBrand" value={formData.customBrand} onChange={handleInputChange} style={inputStyle} placeholder="Z.B. Dyson, Vorwerk, DJI..." />
              
              <label style={labelStyle}>Modell manuell eingeben *</label>
              <input type="text" name="customModel" value={formData.customModel} onChange={handleInputChange} style={inputStyle} placeholder="Genaue Modellbezeichnung" />
              
              <label style={labelStyle}>Problem kurz beschreiben *</label>
              <input type="text" name="customIssue" value={formData.customIssue} onChange={handleInputChange} style={{...inputStyle, marginBottom: 0}} placeholder="Was genau ist defekt?" />
            </div>
          )}

          {formData.category && formData.category !== 'Sonstiges Gerät' && (
            <>
              <label style={labelStyle}>Hersteller *</label>
              <select name="brand" value={formData.brand} onChange={handleInputChange} style={inputStyle}>
                <option value="">Bitte wählen...</option>
                {brands.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                <option value="Andere / nicht gelistet">Andere / nicht gelistet</option>
              </select>

              {formData.brand === 'Andere / nicht gelistet' && (
                <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '15px', border: '1px dashed #ccc' }}>
                  <label style={labelStyle}>Hersteller manuell eingeben *</label>
                  <input type="text" name="customBrand" value={formData.customBrand} onChange={handleInputChange} style={inputStyle} placeholder="Wie heißt der Hersteller?" />
                  
                  <label style={labelStyle}>Modell manuell eingeben *</label>
                  <input type="text" name="customModel" value={formData.customModel} onChange={handleInputChange} style={{...inputStyle, marginBottom: 0}} placeholder="Genaue Modellbezeichnung" />
                </div>
              )}

              {formData.brand && formData.brand !== 'Andere / nicht gelistet' && (
                <>
                  <label style={labelStyle}>Modell *</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      placeholder="Modell suchen oder auswählen..." 
                      value={formData.model === 'Mein Modell ist nicht dabei' ? 'Mein Modell ist nicht dabei' : modelSearch}
                      onChange={(e) => {
                        setModelSearch(e.target.value);
                        if (formData.model === 'Mein Modell ist nicht dabei') setFormData(prev => ({...prev, model: ''}));
                        setShowModelDropdown(true);
                      }}
                      onFocus={() => setShowModelDropdown(true)}
                      style={inputStyle}
                    />
                    {showModelDropdown && (
                      <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '0 0 6px 6px', maxHeight: '250px', overflowY: 'auto', zIndex: 10, marginTop: '-15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        {filteredModels.map(m => (
                          <div 
                            key={m} 
                            style={{ padding: '12px 15px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
                            onMouseDown={() => {
                              setFormData(prev => ({ ...prev, model: m, customModel: '' }));
                              setModelSearch(m);
                              setShowModelDropdown(false);
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
                          >
                            {m}
                          </div>
                        ))}
                        <div 
                          style={{ padding: '12px 15px', cursor: 'pointer', fontWeight: 'bold', color: '#0056b3', backgroundColor: '#f8f9fa' }}
                          onMouseDown={() => {
                            setFormData(prev => ({ ...prev, model: 'Mein Modell ist nicht dabei' }));
                            setModelSearch('');
                            setShowModelDropdown(false);
                          }}
                        >
                          + Mein Modell ist nicht dabei (Manuell eingeben)
                        </div>
                      </div>
                    )}
                  </div>

                  {formData.model === 'Mein Modell ist nicht dabei' && (
                    <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '15px', border: '1px dashed #ccc' }}>
                      <label style={labelStyle}>Bitte Modell manuell eintragen *</label>
                      <input type="text" name="customModel" value={formData.customModel} onChange={handleInputChange} style={{...inputStyle, marginBottom: 0}} placeholder="Z.B. iPhone 8 Plus" />
                    </div>
                  )}
                </>
              )}

              <label style={labelStyle}>Welches Problem liegt vor? *</label>
              <select name="issue" value={formData.issue} onChange={handleInputChange} style={inputStyle}>
                <option value="">Bitte wählen...</option>
                {issues.map(i => <option key={i} value={i}>{i}</option>)}
              </select>

              {formData.issue === 'Sonstiges Problem' && (
                <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '15px', border: '1px dashed #ccc' }}>
                  <label style={labelStyle}>Problem kurz beschreiben *</label>
                  <input type="text" name="customIssue" value={formData.customIssue} onChange={handleInputChange} style={{...inputStyle, marginBottom: 0}} placeholder="Was genau ist defekt?" />
                </div>
              )}
            </>
          )}

          <label style={{...labelStyle, marginTop: '20px'}}>Wo möchtest Du die Reparatur durchführen lassen? *</label>
          <select name="repairMethod" value={formData.repairMethod} onChange={handleInputChange} style={inputStyle}>
            <option value="">Bitte wählen...</option>
            <option value="iRepairStore - Stadtmitte">iRepairStore - Stadtmitte (Vor Ort)</option>
            <option value="iRepairStore - Westpark">iRepairStore - Westpark (Vor Ort)</option>
            <option value="Versand-Reparatur">Versand-Reparatur (Gerät einsenden)</option>
          </select>
          {formData.repairMethod === 'Versand-Reparatur' && (
            <div style={{ backgroundColor: '#eef2f7', padding: '15px', borderRadius: '8px', fontSize: '14px', marginBottom: '15px', color: '#0056b3', borderLeft: '4px solid #0056b3' }}>
              <i className="fas fa-info-circle" style={{ marginRight: '8px' }}></i>
              <strong>Versand-Reparatur:</strong> Nach dem Absenden der Anfrage erhältst Du von uns alle Informationen zum sicheren Versand Deines Geräts.
            </div>
          )}

          <button 
            type="button" 
            onClick={handleNext} 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#004494'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0056b3'}
          >
            Weiter zu Schritt 2
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h4 style={{ fontSize: '22px', marginBottom: '25px', borderBottom: '2px solid #f0f0f0', paddingBottom: '15px', color: '#1a1a1a' }}>Kontaktdaten</h4>
          
          <label style={labelStyle}>Wie sollen wir uns bei Dir melden? *</label>
          <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '10px 20px', border: formData.contactMethod === 'Email' ? '2px solid #0056b3' : '1px solid #ccc', borderRadius: '6px', backgroundColor: formData.contactMethod === 'Email' ? '#f0f7ff' : '#fff', flex: 1, justifyContent: 'center' }}>
              <input type="radio" name="contactMethod" value="Email" checked={formData.contactMethod === 'Email'} onChange={handleInputChange} style={{ display: 'none' }} />
              <i className="fas fa-envelope" style={{ marginRight: '10px', color: formData.contactMethod === 'Email' ? '#0056b3' : '#666' }}></i>
              <span style={{ fontWeight: formData.contactMethod === 'Email' ? 'bold' : 'normal', color: formData.contactMethod === 'Email' ? '#0056b3' : '#333' }}>Per E-Mail</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '10px 20px', border: formData.contactMethod === 'Telefon' ? '2px solid #0056b3' : '1px solid #ccc', borderRadius: '6px', backgroundColor: formData.contactMethod === 'Telefon' ? '#f0f7ff' : '#fff', flex: 1, justifyContent: 'center' }}>
              <input type="radio" name="contactMethod" value="Telefon" checked={formData.contactMethod === 'Telefon'} onChange={handleInputChange} style={{ display: 'none' }} />
              <i className="fas fa-phone" style={{ marginRight: '10px', color: formData.contactMethod === 'Telefon' ? '#0056b3' : '#666' }}></i>
              <span style={{ fontWeight: formData.contactMethod === 'Telefon' ? 'bold' : 'normal', color: formData.contactMethod === 'Telefon' ? '#0056b3' : '#333' }}>Per Telefon</span>
            </label>
          </div>

          <label style={labelStyle}>Dein Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={inputStyle} placeholder="Vor- und Nachname" />

          {formData.contactMethod === 'Email' && (
            <>
              <label style={labelStyle}>E-Mail-Adresse *</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} placeholder="mail@example.com" />
            </>
          )}

          {formData.contactMethod === 'Telefon' && (
            <>
              <label style={labelStyle}>Telefonnummer *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={inputStyle} placeholder="0170 1234567" />
            </>
          )}

          <label style={labelStyle}>Nachricht (Optional)</label>
          <textarea name="message" value={formData.message} onChange={handleInputChange} style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} placeholder="Gibt es noch etwas, das wir wissen sollten?"></textarea>

          <div style={{ margin: '25px 0', display: 'flex', alignItems: 'flex-start', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <input type="checkbox" id="privacy" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleInputChange} style={{ marginTop: '5px', marginRight: '15px', cursor: 'pointer', transform: 'scale(1.2)' }} />
            <label htmlFor="privacy" style={{ fontSize: '14px', color: '#555', cursor: 'pointer', lineHeight: '1.5' }}>
              Ich akzeptiere die <a href="/datenschutz" target="_blank" style={{ color: '#0056b3', textDecoration: 'underline' }}>Datenschutzerklärung</a> und stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert werden. *
            </label>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button 
              type="button" 
              onClick={() => setStep(1)} 
              style={backButtonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
            >
              <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Zurück
            </button>
            <button 
              type="button" 
              onClick={handleSubmit} 
              style={{ ...buttonStyle, marginTop: 0, opacity: isSubmitting ? 0.7 : 1, flex: 1 }} 
              disabled={isSubmitting}
              onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = '#004494')}
              onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = '#0056b3')}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Anfrage jetzt absenden'}
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default PreisanfrageForm;
