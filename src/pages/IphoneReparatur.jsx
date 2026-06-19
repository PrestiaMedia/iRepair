import React, { useEffect } from 'react';
import GoogleReviews from '../components/GoogleReviews';
import AboutUs from '../components/AboutUs';
import FAQs from '../components/FAQs';
import Locations from '../components/Locations';

const IphoneReparatur = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const models = [
    "iPhone 5", "iPhone 5S", "iPhone SE (1. Gen)", "iPhone 6", "iPhone 6S", "iPhone 6 Plus", "iPhone 6S Plus", 
    "iPhone 7", "iPhone 7 Plus", "iPhone 8", "iPhone 8 Plus", "iPhone X", "iPhone XS", "iPhone XS Max", 
    "iPhone XR", "iPhone SE (2020)", "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max", "iPhone 12", 
    "iPhone 12 mini", "iPhone 12 Pro", "iPhone 12 Pro Max", "iPhone 13", "iPhone 13 mini", "iPhone 13 Pro", 
    "iPhone 13 Pro Max", "iPhone SE (3. Gen)", "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max", 
    "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max", "iPhone 16", "iPhone 16 Plus", 
    "iPhone 16 Pro", "iPhone 16 Pro Max", "iPhone 16e"
  ];

  const services = [
    { title: "Intensive Fehlerdiagnose", icon: "fas fa-search" },
    { title: "Display Reparatur", icon: "fas fa-mobile-alt" },
    { title: "Akku Austausch", icon: "fas fa-battery-half" },
    { title: "Wasserschaden Reparatur", icon: "fas fa-tint" },
    { title: "USB-Ladebuchse Austausch", icon: "fas fa-plug" },
    { title: "Lautsprecher Austausch", icon: "fas fa-volume-up" },
    { title: "Mikrofon Austausch", icon: "fas fa-microphone" },
    { title: "Software Update", icon: "fas fa-sync-alt" }
  ];

  const defects = [
    "Gebrochenes oder gesplittertes Display",
    "Beschädigte Ladebuchse",
    "Mikrofon funktioniert nicht mehr",
    "Homebutton ist defekt",
    "Lautsprecher funktioniert nicht",
    "Innen-/Außenkamera ist defekt",
    "Power-Button geht nicht",
    "Akku-Leistung ist zu niedrig"
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <div style={{ backgroundColor: '#fdfdfd', paddingTop: '60px', paddingBottom: '60px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h1 style={{ fontSize: '36px', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.2', fontWeight: 'bold' }}>
              iPhone Reparatur Ingolstadt - wir reparieren Ihr iPhone schnell und zuverlässig
            </h1>
            <p style={{ fontSize: '18px', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '30px' }}>
              Bei Ihrem iPhone ist etwas defekt, es ist Ihnen runtergefallen oder hat einen Wasserschaden erlitten? Kein Problem, wir kennen uns mit Apple-Geräten (nicht nur Apple-Smartphones, auch Apple-Tablets) aus. Wir schauen uns ihr iPhone an und reparieren es direkt in unserer Werkstatt vor Ort.
            </p>
            
            <h3 style={{ fontSize: '20px', color: '#0056b3', marginBottom: '15px' }}>Häufige Defekte:</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 30px 0' }}>
              {defects.map((defect, idx) => (
                <li key={idx} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', color: '#4a4a4a' }}>
                  <i className="fas fa-check-circle" style={{ color: '#0056b3', marginRight: '10px' }}></i>
                  {defect}
                </li>
              ))}
            </ul>

            <a href="/#preisanfrage" style={{ display: 'inline-block', backgroundColor: '#0056b3', color: '#fff', padding: '15px 30px', borderRadius: '6px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', transition: 'background-color 0.2s' }}>
              Jetzt Kontakt aufnehmen
            </a>
          </div>
          <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
            <img src="https://handy-reparatur-ingolstadt.de/wp-content/uploads/iphone-reparatur.png" alt="iPhone Reparatur" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </div>

      {/* 2. Leistungen Cards Section */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '60px 20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', fontWeight: 'bold' }}>Unsere Leistungen</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {services.map((service, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '25px 20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #eaeaea', borderLeft: '4px solid #0056b3', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <i className={service.icon} style={{ color: '#0056b3', fontSize: '24px', width: '30px', textAlign: 'center' }}></i>
                <h4 style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: 'bold', margin: 0 }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Unsere Geräte Section */}
      <div style={{ backgroundColor: '#ffffff', padding: '60px 20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', fontWeight: 'bold' }}>Unsere Geräte</h2>
            <p style={{ fontSize: '16px', color: '#4a4a4a' }}>Wir reparieren alle Generationen des Apple iPhone.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
            {models.map((model, idx) => (
              <span key={idx} style={{ 
                backgroundColor: '#f1f3f5', 
                color: '#495057', 
                padding: '8px 16px', 
                borderRadius: '20px', 
                fontSize: '14px', 
                fontWeight: '600',
                border: '1px solid #e9ecef',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <i className="fab fa-apple" style={{ fontSize: '14px' }}></i>
                {model}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Google Reviews Section */}
      <GoogleReviews />

      {/* 5. Über Uns / Stats Section */}
      <AboutUs />

      {/* 6. FAQ Section */}
      <FAQs />
    </>
  );
};

export default IphoneReparatur;
