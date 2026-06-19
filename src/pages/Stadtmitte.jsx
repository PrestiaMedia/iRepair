import React, { useEffect } from 'react';

const Stadtmitte = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '60px 20px', fontFamily: 'sans-serif', minHeight: '80vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <img src="https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-stadtmitte.png" alt="iRepairStore Stadtmitte" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        <div style={{ padding: '40px' }}>
          <h1 style={{ fontSize: '32px', color: '#0056b3', marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '15px', marginTop: '0' }}>
            iRepairStore - Stadtmitte
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '30px' }}>
            <div style={{ flex: '1 1 300px' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a4a4a', margin: 0 }}>
                <strong>iRepairStore24-Kiosk049 UG</strong><br />
                Theresienstraße 2<br />
                85049 Ingolstadt
              </p>
            </div>
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <i className="fas fa-phone" style={{ color: '#0056b3', fontSize: '20px', width: '20px', textAlign: 'center' }}></i>
                <a href="tel:004984199351750" style={{ color: '#0056b3', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>0841 993517-50</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <i className="fas fa-envelope" style={{ color: '#0056b3', fontSize: '20px', width: '20px', textAlign: 'center' }}></i>
                <a href="mailto:info@irepairstore24.de" style={{ color: '#0056b3', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>info@irepairstore24.de</a>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', height: '450px', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10517.230493972334!2d11.3710168871582!3d48.77601709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479efe511a945a75%3A0x5396adddae453d17!2siRepairStore%20-%20Handy%20Reparatur%20Ingolstadt!5e0!3m2!1sde!2s!4v1779984863154!5m2!1sde!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stadtmitte;
