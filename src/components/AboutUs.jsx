import { useState, useEffect, useRef } from 'react';

const AboutUs = () => {
  const [counters, setCounters] = useState({
    techniker: 0,
    erfolgsquote: 0,
    bewertungen: 0,
    reparaturen: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      techniker: 3,
      erfolgsquote: 97.5,
      bewertungen: 450,
      reparaturen: 10000
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        techniker: Math.floor(targets.techniker * progress),
        erfolgsquote: (targets.erfolgsquote * progress).toFixed(1),
        bewertungen: Math.floor(targets.bewertungen * progress),
        reparaturen: Math.floor(targets.reparaturen * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
  };

  return (
    <div ref={sectionRef} id="ueberuns" className="fl-row fl-row-full-width fl-row-bg-color fl-node-42ygo53tkuhm fl-row-default-height fl-row-align-center" data-node="42ygo53tkuhm">
	<div className="fl-row-content-wrap">
								<div className="fl-row-content fl-row-fixed-width fl-node-content">
		
<div className="fl-col-group fl-node-9haj0xl1skmu" data-node="9haj0xl1skmu">
			<div className="fl-col fl-node-crh0p9kls3gb fl-col-bg-color" data-node="crh0p9kls3gb">
	<div className="fl-col-content fl-node-content"><div className="fl-module fl-module-heading fl-node-trjyes6hqali" data-node="trjyes6hqali">
	<div className="fl-module-content fl-node-content">
		<h2 className="fl-heading">
		<span className="fl-heading-text">Über uns</span>
	</h2>
	</div>
</div>
<div className="fl-module fl-module-rich-text fl-node-yltf9d05qmuv" data-node="yltf9d05qmuv">
	<div className="fl-module-content fl-node-content">
		<div className="fl-rich-text">
	<p className="info">Wir sind stolz auf unsere exzellenten Leistungen als Handy-Reparatur-Service:</p>
</div>
	</div>
</div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', marginTop: '40px', width: '100%' }}>
  <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '30px 15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
    <h2 style={{ color: '#0056b3', fontSize: '36px', fontWeight: 'bold', margin: '0 0 10px 0' }}>{counters.techniker}</h2>
    <span style={{ fontSize: '16px', color: '#4a4a4a', fontWeight: 'bold' }}>freundliche Techniker</span>
  </div>
  <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '30px 15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
    <h2 style={{ color: '#0056b3', fontSize: '36px', fontWeight: 'bold', margin: '0 0 10px 0' }}>{counters.erfolgsquote}%</h2>
    <span style={{ fontSize: '16px', color: '#4a4a4a', fontWeight: 'bold' }}>Erfolgsquote</span>
  </div>
  <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '30px 15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
    <h2 style={{ color: '#0056b3', fontSize: '36px', fontWeight: 'bold', margin: '0 0 10px 0' }}>{counters.bewertungen}+</h2>
    <span style={{ fontSize: '16px', color: '#4a4a4a', fontWeight: 'bold' }}>5-Sterne-Bewertungen</span>
  </div>
  <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '30px 15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
    <h2 style={{ color: '#0056b3', fontSize: '36px', fontWeight: 'bold', margin: '0 0 10px 0' }}>{counters.reparaturen.toLocaleString('de-DE')}+</h2>
    <span style={{ fontSize: '16px', color: '#4a4a4a', fontWeight: 'bold' }}>erfolgreiche Reparaturen</span>
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

export default AboutUs;
