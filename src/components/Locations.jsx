
const Locations = () => {
  return (
    <div id="stores" style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '15px', fontWeight: 'bold' }}>
            Unsere Standorte in Ingolstadt
          </h2>
          <p style={{ fontSize: '18px', color: '#4a4a4a' }}>
            Lassen Sie sich heute noch unverbindlich von uns beraten.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {/* Location 1: Stadtmitte */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <img src="/images/inner_1.jpg" alt="iRepairStore Stadtmitte" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '24px', color: '#0056b3', marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px', marginTop: '0' }}>
                iRepairStore - Stadtmitte
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a', marginBottom: '20px' }}>
                <strong>iRepairStore24-Kiosk049 UG</strong><br />
                <strong>Handy Reparatur Ingolstadt</strong><br />
                Theresienstraße 2<br />
                85049 Ingolstadt
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-phone" style={{ color: '#0056b3', width: '16px', textAlign: 'center' }}></i>
                  <a href="tel:004984199351750" style={{ color: '#0056b3', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 'bold', fontSize: '16px' }}>0841 993517-50</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-envelope" style={{ color: '#0056b3', width: '16px', textAlign: 'center' }}></i>
                  <a href="mailto:info@irepairstore24.de" style={{ color: '#0056b3', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 'bold', fontSize: '16px' }}>info@irepairstore24.de</a>
                </div>
              </div>
              <div style={{ width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10517.230493972334!2d11.3710168871582!3d48.77601709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479efe511a945a75%3A0x5396adddae453d17!2siRepairStore%20-%20Handy%20Reparatur%20Ingolstadt!5e0!3m2!1sde!2s!4v1779984863154!5m2!1sde!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          {/* Location 2: Westpark */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <img src="/images/irepairstore24-im-westpark.png" alt="iRepairStore Westpark" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '24px', color: '#0056b3', marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px', marginTop: '0' }}>
                iRepairStore - Westpark
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a', marginBottom: '20px' }}>
                <strong>iRepairStore GmbH</strong><br />
                <strong>Handy Reparatur Am Westpark</strong><br />
                Am Westpark 6<br />
                85057 Ingolstadt
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-phone" style={{ color: '#0056b3', width: '16px', textAlign: 'center' }}></i>
                  <a href="tel:004984190042129" style={{ color: '#0056b3', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 'bold', fontSize: '16px' }}>0841 900421-29</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-envelope" style={{ color: '#0056b3', width: '16px', textAlign: 'center' }}></i>
                  <a href="mailto:westpark@irepairstore24.de" style={{ color: '#0056b3', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 'bold', fontSize: '16px' }}>westpark@irepairstore24.de</a>
                </div>
              </div>
              <div style={{ width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10517.230493972334!2d11.3710168871582!3d48.77601709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479effd6fccc9621%3A0xe66cb64043c23d36!2siRepairStore%20-Handy%20Reparatur%20Am%20Westpark!5e0!3m2!1sde!2s!4v1779984840116!5m2!1sde!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Locations;
