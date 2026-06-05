import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Timeout so it doesn't jarringly appear before paint
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowBanner(true);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      boxShadow: '0 -10px 30px rgba(0,0,0,0.1)',
      padding: '25px 20px',
      zIndex: 99999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      color: '#1a1a1a',
      textAlign: 'center',
      borderTop: '1px solid #eaeaea'
    }}>
      <div style={{ maxWidth: '1000px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6' }}>
          <strong>Wir verwenden Cookies.</strong> Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu. Weitere Informationen zu Cookies erhalten Sie in unserer <Link to="/datenschutz" style={{ color: '#0056b3', textDecoration: 'underline', fontWeight: 'bold' }}>Datenschutzerklärung</Link>.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={handleAccept}
            style={{
              backgroundColor: '#0056b3',
              color: '#ffffff',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 6px rgba(0,86,179,0.2)'
            }}
            onMouseOver={(e) => { e.target.style.backgroundColor = '#004494'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseOut={(e) => { e.target.style.backgroundColor = '#0056b3'; e.target.style.transform = 'translateY(0)' }}
          >
            Alle akzeptieren
          </button>
          <button 
            onClick={handleDecline}
            style={{
              backgroundColor: '#f1f1f1',
              color: '#4a4a4a',
              border: '1px solid #d1d1d1',
              padding: '12px 30px',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => { e.target.style.backgroundColor = '#e1e1e1'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseOut={(e) => { e.target.style.backgroundColor = '#f1f1f1'; e.target.style.transform = 'translateY(0)' }}
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
