import React from 'react';

const Impressum = () => {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', color: '#1a1a1a', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '30px' }}>Impressum</h1>
      <h2 style={{ fontSize: '20px', marginTop: '20px' }}>Angaben gemäß § 5 TMG</h2>
      <p style={{ lineHeight: '1.6' }}>
        <strong>iRepairStore GmbH</strong><br />
        Am Westpark 6<br />
        85057 Ingolstadt
      </p>
      <p style={{ lineHeight: '1.6' }}>
        <strong>Vertreten durch:</strong><br />
        Ramil Fatullaew
      </p>
      <h2 style={{ fontSize: '20px', marginTop: '20px' }}>Kontakt</h2>
      <p style={{ lineHeight: '1.6' }}>
        Telefon: 0841 900421-29<br />
        E-Mail: westpark@irepairstore24.de
      </p>
      <h2 style={{ fontSize: '20px', marginTop: '20px' }}>Umsatzsteuer-ID</h2>
      <p style={{ lineHeight: '1.6' }}>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE XXX XXX XXX
      </p>
      <h2 style={{ fontSize: '20px', marginTop: '20px' }}>Haftung für Inhalte</h2>
      <p style={{ lineHeight: '1.6' }}>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
    </div>
  );
};

export default Impressum;
