import React from 'react';

const ContactFooterInfo = () => {
  return (
    <>
      <style>{`
        body, html, #page, #content, .site-content, .site {
          background-color: #ffffff !important;
        }
      `}</style>
      <div style={{ backgroundColor: '#ffffff', width: '100%', padding: '60px 20px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px' }}>
            
            {/* Group 1: Stadtmitte */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', flex: 1, minWidth: 0 }}>
              <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                <h4 style={{ color: '#1a1a1a', fontSize: '18px', fontWeight: 'bold', margin: '0 0 15px 0', fontFamily: 'sans-serif' }}>
                  iRepairStore - Stadtmitte
                </h4>
                <div style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.6', fontFamily: 'sans-serif' }}>
                  <p style={{ margin: '0 0 15px 0', color: '#4a4a4a' }}>
                    <strong style={{ color: '#1a1a1a' }}>iRepairStore24-Kiosk049 UG</strong><br />
                    <strong style={{ color: '#1a1a1a' }}>Handy Reparatur Ingolstadt</strong><br />
                    Theresienstraße 2<br />
                    85049 Ingolstadt
                  </p>
                  <p style={{ margin: 0, color: '#4a4a4a' }}>
                    Tel: 0841 993517-50<br />
                    E-Mail: info@irepairstore24.de
                  </p>
                </div>
              </div>
              <img decoding="async" src="/images/handy-reparatur-stadtmitte.png" alt="Handy Reparatur Stadtmitte" style={{ borderRadius: '15px', width: '200px', height: '200px', objectFit: 'cover', flexShrink: 0 }} />
            </div>

            {/* Group 2: Westpark */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', flex: 1, minWidth: 0 }}>
              <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                <h4 style={{ color: '#1a1a1a', fontSize: '18px', fontWeight: 'bold', margin: '0 0 15px 0', fontFamily: 'sans-serif' }}>
                  iRepairStore - Westpark
                </h4>
                <div style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.6', fontFamily: 'sans-serif' }}>
                  <p style={{ margin: '0 0 15px 0', color: '#4a4a4a' }}>
                    <strong style={{ color: '#1a1a1a' }}>iRepairStore GmbH</strong><br />
                    <strong style={{ color: '#1a1a1a' }}>Handy Reparatur Am Westpark</strong><br />
                    Am Westpark 6<br />
                    85057 Ingolstadt
                  </p>
                  <p style={{ margin: 0, color: '#4a4a4a' }}>
                    Tel: 0841 900421-29<br />
                    E-Mail: westpark@irepairstore24.de
                  </p>
                </div>
              </div>
              <img decoding="async" src="/images/westpark-ingolstadt-eingang-d.png" alt="Westpark Ingolstadt Eingang D" style={{ borderRadius: '15px', width: '200px', height: '200px', objectFit: 'cover', flexShrink: 0 }} />
            </div>

          </div>

          {/* Footer Links */}
          <div style={{ textAlign: 'center', marginTop: '60px', paddingTop: '20px', borderTop: '1px solid #eaeaea', color: '#4a4a4a', fontSize: '14px', fontFamily: 'sans-serif' }}>
            <p style={{ margin: '0 0 10px 0' }}>
              <a href="/impressum" style={{ color: '#4a4a4a', textDecoration: 'none' }}>IMPRESSUM</a>
              {' | '}
              <a href="/datenschutz" style={{ color: '#4a4a4a', textDecoration: 'none' }}>DATENSCHUTZ</a>
            </p>
            <p style={{ margin: '0' }}>
              Copyright © 2026 iRepairStore GmbH
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactFooterInfo;
