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

  return (
    <>
      {/* 1. Hero Section */}
      <div style={{ backgroundColor: '#fdfdfd', paddingTop: '60px', paddingBottom: '60px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h1 style={{ fontSize: '36px', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.2', fontWeight: 'bold' }}>
              {brand.name} Reparatur Ingolstadt - wir reparieren {category.id === 'spielekonsolen' || category.id === 'smartwatches' ? 'Ihre' : 'Ihr'} {brand.name} schnell und zuverlässig
            </h1>
            <p style={{ fontSize: '18px', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '30px' }}>
              Bei Ihrem {brand.name} ist etwas defekt, es ist Ihnen runtergefallen oder hat einen Wasserschaden erlitten? Kein Problem, wir kennen uns mit {category.name} aus. Wir schauen uns das Gerät an und reparieren es direkt in unserer Werkstatt vor Ort.
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
            <img src={brand.heroImage} alt={`${brand.name} Reparatur`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
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
              <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '25px 20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #eaeaea', borderLeft: '4px solid #0056b3', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <i className={service.icon} style={{ color: '#0056b3', fontSize: '24px', width: '30px', textAlign: 'center' }}></i>
                  <h4 style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: 'bold', margin: 0 }}>{service.title}</h4>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: '1.4' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Unsere Geräte Section */}
      {brand.models && brand.models.length > 0 && (
        <div style={{ backgroundColor: '#ffffff', padding: '60px 20px', fontFamily: 'sans-serif' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '32px', color: '#1a1a1a', fontWeight: 'bold' }}>Unsere Geräte</h2>
              <p style={{ fontSize: '16px', color: '#4a4a4a' }}>Wir reparieren alle Generationen von {brand.name}.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
              {brand.models.map((model, idx) => (
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
                  {brand.brandIcon ? (
                    <i className={brand.brandIcon} style={{ fontSize: '14px' }}></i>
                  ) : brand.brandIconSlug ? (
                    <img src={`https://cdn.simpleicons.org/${brand.brandIconSlug}/${brand.brandIconColor || '495057'}`} alt="" style={{ width: '14px', height: '14px' }} />
                  ) : (
                    <i className={category.icon} style={{ fontSize: '14px' }}></i>
                  )}
                  {model}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. Google Reviews Section */}
      <GoogleReviews />

      {/* 5. Über Uns / Stats Section */}
      <AboutUs />
      <DividerImage />

      {/* 6. FAQ Section */}
      <FAQs />
    </>
  );
};

export default DeviceRepairTemplate;
