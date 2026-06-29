import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GoogleReviews from '../components/GoogleReviews';
import AboutUs from '../components/AboutUs';
import DividerImage from '../components/DividerImage';
import FAQs from '../components/FAQs';
import { repairCategories, repairBrands, repairServices, repairDefects } from '../data/repairData';

const DeviceRepairTemplate = () => {
  const { categorySlug, brandSlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug, brandSlug]);

  const category = repairCategories.find(c => c.slug === categorySlug);
  if (!category) return <Navigate to="/" />;

  const brand = repairBrands[category.id]?.find(b => b.slug === brandSlug);
  if (!brand) return <Navigate to="/" />;

  const services = repairServices[category.id] || [];
  const defects = repairDefects[category.id] || [];
  
  // Dynamic Theming
  const themeColor = brand.brandColor || '#0056b3';
  
  // Hex to RGB for subtle backgrounds
  const hexToRgba = (hex, alpha) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const subtleBg = hexToRgba(themeColor, 0.05);

  return (
    <>
      <style>
        {`
          .dynamic-btn {
            background-color: ${themeColor};
            color: #ffffff;
          }
          .dynamic-btn:hover {
            box-shadow: 0 4px 15px ${hexToRgba(themeColor, 0.4)};
            filter: brightness(1.1);
          }
          .service-card {
            border-left: 4px solid ${themeColor} !important;
            transition: transform 0.2s;
          }
          .service-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.08) !important;
          }
          .model-tag {
            background-color: #f8f9fa;
            color: #495057;
            transition: all 0.2s;
          }
          .model-tag:hover {
            background-color: ${themeColor};
            color: #ffffff;
            border-color: ${themeColor} !important;
          }
        `}
      </style>

      {/* 1. Hero Section */}
      <div style={{ backgroundColor: subtleBg, paddingTop: '70px', paddingBottom: '70px', fontFamily: 'sans-serif', borderBottom: '1px solid #eaeaea' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px', flexDirection: brand.name.length % 2 === 0 ? 'row' : 'row-reverse' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              {brand.brandIcon ? (
                <i className={brand.brandIcon} style={{ fontSize: '28px', color: themeColor }}></i>
              ) : brand.brandIconSlug ? (
                <img src={`https://cdn.simpleicons.org/${brand.brandIconSlug}/${themeColor.replace('#','')}`} alt="" style={{ width: '28px', height: '28px' }} />
              ) : (
                <i className={category.icon} style={{ fontSize: '28px', color: themeColor }}></i>
              )}
              <span style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', color: themeColor }}>
                Premium Reparatur
              </span>
            </div>
            
            <h1 style={{ fontSize: '42px', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.15', fontWeight: 'bold' }}>
              {brand.name} Reparatur in Ingolstadt
            </h1>
            
            <p style={{ fontSize: '18px', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '35px' }}>
              {brand.description}
            </p>
            
            <h3 style={{ fontSize: '18px', color: '#1a1a1a', marginBottom: '15px', fontWeight: 'bold' }}>Die häufigsten Reparatur-Gründe:</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 35px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {defects.slice(0, 6).map((defect, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: '#4a4a4a', fontSize: '15px' }}>
                  <i className="fas fa-check-circle" style={{ color: themeColor, marginRight: '10px', marginTop: '3px' }}></i>
                  <span style={{ lineHeight: '1.4' }}>{defect}</span>
                </li>
              ))}
            </ul>

            <a href="/#preisanfrage" className="dynamic-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 32px', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', transition: 'all 0.2s' }}>
              <i className="fas fa-envelope"></i> Kostenfrei anfragen
            </a>
          </div>
          <div style={{ flex: '1 1 400px', textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', backgroundColor: themeColor, opacity: '0.1', borderRadius: '50%', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '150px', height: '150px', backgroundColor: themeColor, opacity: '0.1', borderRadius: '50%', zIndex: 0 }}></div>
            <img src={brand.heroImage} alt={`${brand.name} Reparatur`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.1))' }} />
          </div>
        </div>
      </div>

      {/* 2. Reparaturablauf Section */}
      <div style={{ backgroundColor: '#ffffff', padding: '80px 20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', fontWeight: 'bold', marginBottom: '15px' }}>So funktioniert's</h2>
            <p style={{ fontSize: '16px', color: '#666' }}>Ihr Weg zum funktionierenden {brand.name}</p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
            {[
              { icon: 'fas fa-store', title: '1. Vorbeibringen', text: 'Kommen Sie einfach mit Ihrem defekten Gerät in Ingolstadt vorbei.' },
              { icon: 'fas fa-search-plus', title: '2. Diagnose', text: 'Wir prüfen das Gerät sofort und besprechen mit Ihnen die Kosten.' },
              { icon: 'fas fa-tools', title: '3. Reparatur', text: 'Unser Team repariert das Gerät meist innerhalb weniger Stunden.' },
              { icon: 'fas fa-smile-beam', title: '4. Abholung', text: 'Sie erhalten Ihr funktionierendes Gerät zurück!' }
            ].map((step, idx) => (
              <div key={idx} style={{ flex: '1 1 200px', maxWidth: '250px', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: subtleBg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', border: `2px solid ${themeColor}` }}>
                  <i className={step.icon} style={{ fontSize: '32px', color: themeColor }}></i>
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '10px' }}>{step.title}</h4>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Leistungen Cards Section */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '80px 20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', fontWeight: 'bold', marginBottom: '15px' }}>Unsere Werkstatt-Leistungen</h2>
            <p style={{ fontSize: '16px', color: '#666' }}>Was wir an Ihrem {brand.name} reparieren können</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {services.map((service, idx) => (
              <div key={idx} className="service-card" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '30px 25px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', border: '1px solid #eaeaea', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '10px', backgroundColor: subtleBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={service.icon} style={{ color: themeColor, fontSize: '24px' }}></i>
                  </div>
                  <h4 style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: 'bold', margin: 0 }}>{service.title}</h4>
                </div>
                <p style={{ margin: 0, fontSize: '15px', color: '#666', lineHeight: '1.5' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Unsere Geräte Section */}
      {brand.models && brand.models.length > 0 && (
        <div style={{ backgroundColor: '#ffffff', padding: '80px 20px', fontFamily: 'sans-serif' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '32px', color: '#1a1a1a', fontWeight: 'bold', marginBottom: '15px' }}>Reparierte Modelle</h2>
              <p style={{ fontSize: '16px', color: '#666' }}>Eine Auswahl der {brand.name} Geräte, die wir regelmäßig reparieren.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {brand.models.map((model, idx) => (
                <span key={idx} className="model-tag" style={{ 
                  padding: '10px 20px', 
                  borderRadius: '30px', 
                  fontSize: '15px', 
                  fontWeight: '600',
                  border: '1px solid #e9ecef',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'default'
                }}>
                  {brand.brandIcon ? (
                    <i className={brand.brandIcon} style={{ fontSize: '16px' }}></i>
                  ) : brand.brandIconSlug ? (
                    <img src={`https://cdn.simpleicons.org/${brand.brandIconSlug}/${themeColor.replace('#','')}`} alt="" style={{ width: '16px', height: '16px' }} />
                  ) : (
                    <i className={category.icon} style={{ fontSize: '16px' }}></i>
                  )}
                  {model}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. Google Reviews Section */}
      <GoogleReviews />

      {/* 6. Über Uns / Stats Section */}
      <AboutUs />
      <DividerImage />

      {/* 7. FAQ Section */}
      <FAQs />
    </>
  );
};

export default DeviceRepairTemplate;
