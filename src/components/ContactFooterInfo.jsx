import { Link } from 'react-router-dom';

const ContactFooterInfo = () => {
  return (
    <>
      <style>{`
        body, html, #page, #content, .site-content, .site {
          background-color: #ffffff !important;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        .footer-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
        }
        .footer-card img {
          border-radius: 15px;
          width: 200px;
          height: 200px;
          object-fit: cover;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .footer-card {
            flex-direction: column;
            text-align: center;
          }
          .footer-card img {
            width: 100%;
            height: auto;
            max-width: 300px;
          }
          .footer-card .text-content {
            text-align: center !important;
          }
          .mobile-contact-line {
            justify-content: center !important;
          }
          .mobile-contact-text {
            font-size: 14px !important;
          }
        }
      `}</style>
      <div style={{ backgroundColor: '#ffffff', width: '100%', padding: '60px 20px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="footer-grid">
            
            {/* Group 1: Stadtmitte */}
            <div className="footer-card">
              <div className="text-content" style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                <h4 style={{ color: '#1a1a1a', fontSize: '20px', fontWeight: 'bold', margin: '0 0 15px 0', fontFamily: 'sans-serif' }}>
                  iRepairStore - Stadtmitte
                </h4>
                <div style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', fontFamily: 'sans-serif' }}>
                  <p style={{ margin: '0 0 15px 0', color: '#4a4a4a' }}>
                    <strong style={{ color: '#1a1a1a' }}>iRepairStore24-Kiosk049 UG</strong><br />
                    <strong style={{ color: '#1a1a1a' }}>Handy Reparatur Ingolstadt</strong><br />
                    Theresienstraße 2<br />
                    85049 Ingolstadt
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div className="mobile-contact-line" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fas fa-phone" style={{ color: '#0056b3', width: '16px', textAlign: 'center' }}></i>
                      <a href="tel:004984199351750" className="mobile-contact-text" style={{ color: '#0056b3', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 'bold' }}>0841 993517-50</a>
                    </div>
                    <div className="mobile-contact-line" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fas fa-envelope" style={{ color: '#0056b3', width: '16px', textAlign: 'center' }}></i>
                      <a href="mailto:info@irepairstore24.de" className="mobile-contact-text" style={{ color: '#0056b3', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 'bold' }}>info@irepairstore24.de</a>
                    </div>
                  </div>
                </div>
              </div>
              <img decoding="async" src="/images/handy-reparatur-stadtmitte.png" alt="Handy Reparatur Stadtmitte" />
            </div>

            {/* Group 2: Westpark */}
            <div className="footer-card">
              <div className="text-content" style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                <h4 style={{ color: '#1a1a1a', fontSize: '20px', fontWeight: 'bold', margin: '0 0 15px 0', fontFamily: 'sans-serif' }}>
                  iRepairStore - Westpark
                </h4>
                <div style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', fontFamily: 'sans-serif' }}>
                  <p style={{ margin: '0 0 15px 0', color: '#4a4a4a' }}>
                    <strong style={{ color: '#1a1a1a' }}>iRepairStore GmbH</strong><br />
                    <strong style={{ color: '#1a1a1a' }}>Handy Reparatur Am Westpark</strong><br />
                    Am Westpark 6<br />
                    85057 Ingolstadt
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div className="mobile-contact-line" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fas fa-phone" style={{ color: '#0056b3', width: '16px', textAlign: 'center' }}></i>
                      <a href="tel:004984190042129" className="mobile-contact-text" style={{ color: '#0056b3', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 'bold' }}>0841 900421-29</a>
                    </div>
                    <div className="mobile-contact-line" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fas fa-envelope" style={{ color: '#0056b3', width: '16px', textAlign: 'center' }}></i>
                      <a href="mailto:westpark@irepairstore24.de" className="mobile-contact-text" style={{ color: '#0056b3', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 'bold' }}>westpark@irepairstore24.de</a>
                    </div>
                  </div>
                </div>
              </div>
              <img decoding="async" src="/images/westpark-ingolstadt-eingang-d.png" alt="Westpark Ingolstadt Eingang D" />
            </div>

          </div>

          {/* Footer Links */}
          <div style={{ textAlign: 'center', marginTop: '60px', paddingTop: '20px', borderTop: '1px solid #eaeaea', color: '#4a4a4a', fontSize: '14px', fontFamily: 'sans-serif' }}>
            <p style={{ margin: '0 0 10px 0' }}>
              <Link to="/impressum" style={{ color: '#4a4a4a', textDecoration: 'none' }}>IMPRESSUM</Link>
              {' | '}
              <Link to="/datenschutz" style={{ color: '#4a4a4a', textDecoration: 'none' }}>DATENSCHUTZ</Link>
            </p>
            <p style={{ margin: '0 0 10px 0', fontSize: '12px', opacity: 0.7 }}>
              <Link to="/admin/login" style={{ color: '#4a4a4a', textDecoration: 'none' }}>Admin Login</Link>
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
