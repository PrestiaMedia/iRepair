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
    <div ref={sectionRef} id="ueberuns" style={{ backgroundColor: '#f8f9fa', padding: '80px 20px', fontFamily: 'sans-serif', width: '100%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', color: '#1a1a1a', fontWeight: 'bold', marginBottom: '15px', textAlign: 'center' }}>Über uns</h2>
        <p style={{ fontSize: '18px', color: '#4a4a4a', marginBottom: '40px', textAlign: 'center' }}>Wir sind stolz auf unsere exzellenten Leistungen als Handy-Reparatur-Service:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', width: '100%' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px 20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <h2 style={{ color: '#0056b3', fontSize: '42px', fontWeight: 'bold', margin: '0 0 15px 0' }}>{counters.techniker}</h2>
            <span style={{ fontSize: '16px', color: '#4a4a4a', fontWeight: 'bold' }}>freundliche Techniker</span>
          </div>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px 20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <h2 style={{ color: '#0056b3', fontSize: '42px', fontWeight: 'bold', margin: '0 0 15px 0' }}>{counters.erfolgsquote}%</h2>
            <span style={{ fontSize: '16px', color: '#4a4a4a', fontWeight: 'bold' }}>Erfolgsquote</span>
          </div>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px 20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <h2 style={{ color: '#0056b3', fontSize: '42px', fontWeight: 'bold', margin: '0 0 15px 0' }}>{counters.bewertungen}+</h2>
            <span style={{ fontSize: '16px', color: '#4a4a4a', fontWeight: 'bold' }}>5-Sterne-Bewertungen</span>
          </div>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px 20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <h2 style={{ color: '#0056b3', fontSize: '42px', fontWeight: 'bold', margin: '0 0 15px 0' }}>{counters.reparaturen.toLocaleString('de-DE')}+</h2>
            <span style={{ fontSize: '16px', color: '#4a4a4a', fontWeight: 'bold' }}>erfolgreiche Reparaturen</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
