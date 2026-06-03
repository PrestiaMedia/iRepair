import { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    console.log('Toggling FAQ:', index, 'Current:', openIndex);
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Wie lange dauert die Reparatur von meinem Smartphone?",
      answer: "Im Regelfall schließen wir Reparaturen innerhalb von 60 – 120 Minuten vor Ort ab. Dies ist durch unser großes Ersatzteillager möglich. Da es mittlerweile eine nicht mehr überschaubare Zahl von verschiedenen Geräten verschiedener Hersteller auf dem Markt gibt, kann es unter Umständen immer vorkommen, dass wir ein Ersatzteil für Sie bestellen müssen. Hierbei kann es zu Lieferzeiten von 1 – 2 Werktagen kommen. Auf Anfrage ist eine Vorbestellung mit Anzahlung möglich, so dass Sie nur noch zur Reparatur vorbeikommen müssen."
    },
    {
      question: "Welche Geräte reparieren wir?",
      answer: "Der iRepairStore hat sich auf keinen bestimmten Hersteller festgelegt. Wir reparieren alles mit Platine! Neben den weit verbreiteten Geräten der Marken Samsung, Apple, Huawei, Sony und HTC reparieren wir auch gerne Geräte der Hersteller Xiaomi, Asus, OnPlus und Motorola. Doch das ist noch nicht genug. Auch mit Macbook, Laptop, Computer und Co. kennen wir uns aus! Rufen Sie uns an und fragen Sie nach einem verbindlichen Angebot für die Reparatur Ihres Elektro-Kleingeräts."
    },
    {
      question: "Habe ich Garantie auf die Reparatur?",
      answer: "Wir gewähren auf unsere verbauten Ersatzteile und unsere Reparatur 24 Monate Gewährleistung. Sollten Sie mit einer unserer Reparaturen einmal nicht zufrieden sein, wenden Sie sich bitte umgehend telefonisch oder per E-Mail an info@irepairstore24.de. Wir werden anschließend einen erneuten Termin mit Ihnen vereinbaren, um die Mängel mit Ihnen gemeinsam zu begutachten. Die Gewährleistung verfällt, sobald Ihr Gerät einen Sturz- oder Wasserschaden erleidet.\n\nAuf Akkus und Batterien geben wir sechs Monate Garantie ab dem Einbaudatum, auf alle weiteren Ersatzteile gewähren wir eine Garantie von 12 Monaten ab dem Einbau. Tritt derselbe Mangel innerhalb der Garantiezeit mehrmals auf, erstatten wir nach der dritten nicht erfolgreichen Mängelbeseitigung den Preis der Reparatur abzüglich der Diagnose-Pauschale von 29,95 EUR."
    },
    {
      question: "Schicken Sie die Geräte zur Reparatur ein?",
      answer: "Nein! Der iRepairStore ist stolz darauf, dass alles eigenhändig vor Ort in Ingolstadt repariert wird. Unser kompetentes Technik-Team verfügt über nun mehr zehn Jahre Erfahrung in der Handyreparatur in Ingolstadt und hat deshalb auch für jedes technische Problem eine Lösung parat. Nur so sind kurze Durchlaufzeiten bei Handyreparaturen möglich und Sie können Ihr Smartphone oder Tablet direkt wieder mitnehmen."
    },
    {
      question: "Werden meine Daten bei der Reparatur gelöscht?",
      answer: "Im Regelfall bleiben alle Daten während einer Reparatur auf dem Gerät erhalten. Sollte das einmal nicht möglich sein, werden wir Sie in jedem Fall vor Abgabe zur Reparatur auf einen möglichen Datenverlust hinweisen. Dies geschieht in der Regel nur bei Software-Reparaturen oder dem Entfernen von vergessenen Account-Daten aus dem jeweiligen Gerät. iRepairStore übernimmt für den Datenverlust während der Reparatur eines Geräts keine Haftung!"
    }
  ];

  return (
    <div className="fl-row fl-row-full-width fl-row-bg-none fl-node-oi12exudzp6t fl-row-default-height fl-row-align-center" data-node="oi12exudzp6t">
	<div className="fl-row-content-wrap">
		<div className="fl-row-content fl-row-fixed-width fl-node-content">
		
<div className="fl-col-group fl-node-cb235ul7wpnr" data-node="cb235ul7wpnr">
	<div className="fl-col fl-node-2ydjkt75fq6g fl-col-bg-color" data-node="2ydjkt75fq6g">
	<div className="fl-col-content fl-node-content">
    <div className="fl-module fl-module-heading fl-node-hj6v9ai4gecs" data-node="hj6v9ai4gecs">
	<div className="fl-module-content fl-node-content">
		<h2 className="fl-heading">
		<span className="fl-heading-text">Häufig gestellte Fragen</span>
	</h2>
	</div>
</div>
<div className="fl-module fl-module-rich-text fl-node-3h571qpuanco" data-node="3h571qpuanco">
	<div className="fl-module-content fl-node-content">
		<div className="fl-rich-text">
	<p style={{ textAlign: "center" }}>Hier finden Sie Antworten auf die am meisten gestellten Fragen unserer Kunden:</p>
</div>
	</div>
</div>
<div className="fl-module fl-module-uabb-faq fl-node-zd2094bpho36" data-node="zd2094bpho36">
	<div className="fl-module-content fl-node-content">
		<div className="uabb-faq-module uabb-faq-layout-accordion_style uabb__faq-layout-accordion">
			<div className="uabb-module-content uabb-faq-module uabb-faq__layout-accordion uabb-faq-collapse">
      {faqs.map((faq, index) => (
        <div key={index} role="tablist" className="uabb-faq-item" data-index={index} style={{ marginBottom: '10px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
          <div 
            role="tab" 
            className="uabb-faq-questions-button uabb-faq-questions-buttonzd2094bpho36 uabb-faq-questions uabb-faq-questionszd2094bpho36 uabb-faq-before-text" 
            aria-selected={openIndex === index} 
            tabIndex="0" 
            aria-expanded={openIndex === index} 
            aria-controls={`faq-content-${index}`}
            data-index={index}
            onClick={() => toggleFAQ(index)}
            style={{ 
              cursor: 'pointer',
              padding: '15px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              backgroundColor: openIndex === index ? '#f8f9fa' : '#ffffff',
              transition: 'background-color 0.2s ease'
            }}
          >
            <div className="uabb-faq-icon-wrap" style={{ flexShrink: 0 }}>
              <i className={`uabb-faq-button-icon fas ${openIndex === index ? 'fa-minus' : 'fa-plus'}`} style={{ fontSize: '14px', color: '#666' }}></i>
            </div>
            <h4 className="uabb-faq-question-label" tabIndex="0" style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>{faq.question}</h4>
          </div>
          <div 
            id={`faq-content-${index}`}
            role="tabpanel" 
            className={`uabb-faq-content fl-clearfix`}
            aria-expanded={openIndex === index}
            style={{
              maxHeight: openIndex === index ? '1000px' : '0px',
              opacity: openIndex === index ? 1 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.4s ease-in-out, opacity 0.4s ease-in-out',
            }}
          >
            <div style={{ padding: '0 20px 15px 20px' }}>
              <p style={{ whiteSpace: 'pre-line', margin: 0, lineHeight: '1.6', color: '#4a4a4a', fontSize: '15px' }}>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
					</div>
	</div>
	</div>
</div>
<div className="fl-module fl-module-rich-text fl-node-rghk0euq2v61" data-node="rghk0euq2v61">
	<div className="fl-module-content fl-node-content">
		<div className="fl-rich-text">
	<p style={{ textAlign: "center" }}>Falls Sie weitere Fragen haben, nehmen Sie gerne Kontakt mit uns auf:</p>
</div>
	</div>
</div>
<div className="fl-module fl-module-uabb-button fl-node-uyo9hlm5bqdf erstkontakt" data-node="uyo9hlm5bqdf">
	<div className="fl-module-content fl-node-content">
		
<div className="uabb-module-content uabb-button-wrap uabb-creative-button-wrap uabb-button-width-auto uabb-creative-button-width-auto uabb-button-center uabb-creative-button-center uabb-button-reponsive-center uabb-creative-button-reponsive-center">
			<a href="/kontakt" title="Hier klicken" target="_self" className="uabb-button ast-button uabb-creative-button uabb-creative-default-btn   " role="button" aria-label="Jetzt Kontakt aufnehmen">
							<span className="uabb-button-text uabb-creative-button-text">Jetzt Kontakt aufnehmen</span>
							
						
		</a>
	</div>




	</div>
</div>
</div>
</div>
	</div>
		</div>
	</div>
</div>
  );
};

export default FAQs;
