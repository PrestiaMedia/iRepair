import React, { useEffect } from 'react';
import GoogleReviews from '../components/GoogleReviews';
import AboutUs from '../components/AboutUs';
import FAQs from '../components/FAQs';
import Locations from '../components/Locations';

const Handyvertrag = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "Flexibilität", icon: "fas fa-sync-alt" },
    { title: "Günstige Tarife", icon: "fas fa-euro-sign" },
    { title: "Allnet-Flatrates", icon: "fas fa-globe" },
    { title: "Top-Smartphones", icon: "fas fa-mobile-alt" }
  ];

  const providers = [
    { name: "1&1", logo: "1&1" },
    { name: "Lycamobile", logo: "Lyca" }
  ];

  const brands = [
    "Samsung", "OnePlus", "Apple", "Oppo", "Huawei", "Xiaomi", "Pixel", "Honor"
  ];

  const customFaqs = [
    {
      question: "Welche Kriterien sind entscheidend bei der Wahl meines neuen Handyvertrags?",
      answer: "Entscheidend sind vor allem Datenvolumen, Netzgeschwindigkeit, Laufzeit, eine Allnet-Flat und Konditionen für EU-Roaming."
    },
    {
      question: "Kann ich zwischen einem Vertrag mit Smartphone und einem reinen Datentarif wählen?",
      answer: "Ja, wir bieten Ihnen beide Möglichkeiten an. Sie können entweder einen Vertrag inklusive neuem Smartphone abschließen oder sich für einen reinen Tarif (SIM-Only) entscheiden."
    },
    {
      question: "Bietet ihr auch Prepaid-Tarife an?",
      answer: "Ja, wir haben auch flexibel aufladbare Prepaid-Tarife im Angebot, bei denen Sie die volle Kostenkontrolle behalten."
    },
    {
      question: "Wie lassen sich Laufzeit, Datenvolumen und EU-Roaming abstimmen?",
      answer: "Wir beraten Sie hierzu gerne individuell in unserem Store und finden gemeinsam den Tarif, der perfekt zu Ihren Nutzungsgewohnheiten passt."
    }
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <div style={{ backgroundColor: '#fdfdfd', paddingTop: '60px', paddingBottom: '60px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h1 style={{ fontSize: '36px', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.2', fontWeight: 'bold' }}>
              Ihr neuer Handyvertrag: Wir vergleichen, Sie sparen
            </h1>
            <p style={{ fontSize: '18px', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '30px' }}>
              Sie brauchen ein neues Handy und möchten die beste Netzqualität, um jederzeit online im Internet zu sein und telefonieren zu können? Wir reparieren nicht nur Mobiltelefone, sondern beraten Sie gerne bei der Suche nach dem für Sie günstigsten Handytarif.
            </p>
            <a href="/kontakt" style={{ display: 'inline-block', backgroundColor: '#0056b3', color: '#fff', padding: '15px 30px', borderRadius: '6px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', transition: 'background-color 0.2s' }}>
              Jetzt Kontakt aufnehmen
            </a>
          </div>
          <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
            <img src="https://handy-reparatur-ingolstadt.de/wp-content/uploads/handyvertrag-scaled.jpg" alt="Handyvertrag" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>

      {/* 2. Features Cards */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '60px 20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '25px 20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #eaeaea', borderLeft: '4px solid #0056b3', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <i className={feature.icon} style={{ color: '#0056b3', fontSize: '24px', width: '30px', textAlign: 'center' }}></i>
                <h4 style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: 'bold', margin: 0 }}>{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Anbieter Section */}
      <div style={{ backgroundColor: '#ffffff', padding: '60px 20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', fontWeight: 'bold' }}>Handyvertrag abschließen bei unseren Anbietern!</h2>
            <p style={{ fontSize: '16px', color: '#4a4a4a' }}>Lassen Sie sich heute noch unverbindlich von uns beraten.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {providers.map((provider, idx) => (
              <div key={idx} style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '30px 40px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #eaeaea', textAlign: 'center', width: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h3 style={{ margin: 0, color: '#0056b3', fontSize: '28px', fontWeight: '900' }}>{provider.logo}</h3>
                {provider.name === "Lycamobile" && <span style={{ fontSize: '14px', color: '#0056b3', fontWeight: 'bold' }}>Mobile</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Geräte Section */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '60px 20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', fontWeight: 'bold' }}>Diese Handy-Hersteller bieten wir Ihnen an!</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
            {brands.map((brand, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '6px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #eaeaea', textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: '600' }}>{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Google Reviews Section */}
      <GoogleReviews />

      {/* 6. Über Uns / Stats Section */}
      <AboutUs />

      {/* 7. FAQ Section */}
      <FAQs customFaqs={customFaqs} />

      {/* 8. Footer / Standorte */}
      <Locations />
    </>
  );
};

export default Handyvertrag;
