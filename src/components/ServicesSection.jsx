import React from 'react';
import { repairCategories, repairBrands } from '../data/repairData';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Text */}
        <div style={{ textAlign: 'center', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px auto' }}>
          <p style={{ fontSize: '18px', color: '#4a4a4a', lineHeight: '1.6' }}>
            Ob Smartphone, Tablet, MacBook, Laptop, Spielekonsole, Controller oder Smartwatch – wir 
            reparieren viele aktuelle Geräte und Modelle direkt in Ingolstadt oder per Versand.
          </p>
        </div>

        {/* CSS for hover effects */}
        <style>
          {`
            .service-card {
              background-color: #ffffff;
              border-radius: 12px;
              padding: 25px;
              box-shadow: 0 4px 15px rgba(0,0,0,0.05);
              border: 1px solid #eaeaea;
              border-left: 4px solid #1d3a8f;
              display: flex;
              flex-direction: column;
              height: 100%;
              transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            .service-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }
            .brand-pill {
              background-color: #f1f3f5;
              color: #495057;
              padding: 6px 12px;
              border-radius: 20px;
              font-size: 13px;
              font-weight: 600;
              text-decoration: none;
              display: inline-block;
              transition: background-color 0.2s, color 0.2s;
            }
            .brand-pill:hover {
              background-color: #1d3a8f;
              color: #ffffff;
            }
          `}
        </style>

        {/* 6 Grid layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '25px' 
        }}>
          {repairCategories.map(category => (
            <div key={category.id} className="service-card">
              
              {/* Card Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <i className={category.icon} style={{ color: '#1d3a8f', fontSize: '20px' }}></i>
                <h3 style={{ fontSize: '20px', color: '#1a1a1a', margin: 0, fontWeight: 'bold' }}>
                  {category.name}
                </h3>
              </div>
              
              {/* Brands Grid (Pills) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px', flexGrow: 1 }}>
                {repairBrands[category.id]?.map(brand => (
                  <Link 
                    key={brand.slug} 
                    to={`/leistungen/${category.slug}/${brand.slug}`}
                    className="brand-pill"
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>

              {/* Subtext */}
              <div style={{ marginTop: 'auto', borderTop: '1px solid #f1f3f5', paddingTop: '15px' }}>
                <span style={{ fontStyle: 'italic', color: '#888', fontSize: '13px' }}>
                  {category.subtext}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;
