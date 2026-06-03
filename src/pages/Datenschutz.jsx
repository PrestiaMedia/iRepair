import React from 'react';

const Datenschutz = () => {
  return (
    <div className="legal-page" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', color: '#000000', fontFamily: 'sans-serif', fontSize: '18px' }}>
      <style>{`
        .legal-page, .legal-page p, .legal-page h1, .legal-page h2, .legal-page h3, .legal-page a, .legal-page strong {
          color: #000000 !important;
        }
      `}</style>
      <h1 style={{ fontSize: '54px', marginBottom: '40px', fontWeight: 'bold' }}>Datenschutzerklärung</h1>
      
      <h2 style={{ fontSize: '20px', marginTop: '20px' }}>1. Datenschutz auf einen Blick</h2>
      <h3 style={{ fontSize: '18px', marginTop: '15px' }}>Allgemeine Hinweise</h3>
      <p style={{ lineHeight: '1.6' }}>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
      </p>
      
      <h3 style={{ fontSize: '18px', marginTop: '15px' }}>Datenerfassung auf unserer Website</h3>
      <p style={{ lineHeight: '1.6' }}>
        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
      </p>

      <h2 style={{ fontSize: '20px', marginTop: '20px' }}>2. Hosting</h2>
      <p style={{ lineHeight: '1.6' }}>Wir hosten unsere Website bei einem externen Dienstleister. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>

      <h2 style={{ fontSize: '20px', marginTop: '20px' }}>3. Allgemeine Hinweise und Pflichtinformationen</h2>
      <p style={{ lineHeight: '1.6' }}>
        <strong>Datenschutz</strong><br />
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>
      
      <p style={{ marginTop: '20px', color: '#666', fontStyle: 'italic', lineHeight: '1.6' }}>
        Hinweis: Dies ist ein Platzhaltertext für die Datenschutzerklärung. Bitte passen Sie diesen entsprechend den tatsächlichen Gegebenheiten und eingesetzten Tools an.
      </p>
    </div>
  );
};

export default Datenschutz;
