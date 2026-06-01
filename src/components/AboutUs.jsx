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
<div className="fl-module fl-module-box fl-node-zu76an3o94d8" data-node="zu76an3o94d8">
	<div className="fl-module fl-module-box fl-node-kex360l7ntfb" data-node="kex360l7ntfb">
	<div className="fl-module fl-module-uabb-numbers fl-node-onvm80zjb1yw" data-node="onvm80zjb1yw">
	<div className="fl-module-content fl-node-content">
		<div className="uabb-module-content uabb-number uabb-number-none-above-title uabb-number-default" role="group" tabIndex="0" aria-label="Counter module showing numbers">
		{/* Comment to fix spacing issue
	*/}<div className="uabb-number-text">
		<h2 className="uabb-number-string"><span className="uabb-number-int">{counters.techniker}</span></h2><span className="uabb-number-after-text">freundliche Techniker</span>
	</div>{/* Comment to fix spacing issue
	*/}	</div>
	</div>
</div>
</div>
<div className="fl-module fl-module-box fl-node-0fa617b5yngk" data-node="0fa617b5yngk">
	<div className="fl-module fl-module-uabb-numbers fl-node-qdmwj1ahzcsu" data-node="qdmwj1ahzcsu">
	<div className="fl-module-content fl-node-content">
		<div className="uabb-module-content uabb-number uabb-number-none-above-title uabb-number-default" role="group" tabIndex="0" aria-label="Counter module showing numbers">
		{/* Comment to fix spacing issue
	*/}<div className="uabb-number-text">
		<h2 className="uabb-number-string"><span className="uabb-number-int">{counters.erfolgsquote}</span>%</h2><span className="uabb-number-after-text">Erfolgsquote</span>
	</div>{/* Comment to fix spacing issue
	*/}	</div>
	</div>
</div>
<div className="fl-module fl-module-uabb-numbers fl-node-twaqzjyrgh4f" data-node="twaqzjyrgh4f">
	<div className="fl-module-content fl-node-content">
		<div className="uabb-module-content uabb-number uabb-number-none-above-title uabb-number-default" role="group" tabIndex="0" aria-label="Counter module showing numbers">
		{/* Comment to fix spacing issue
	*/}<div className="uabb-number-text">
		<h2 className="uabb-number-string"><span className="uabb-number-int">{counters.bewertungen}</span>+</h2><span className="uabb-number-after-text">5-Sterne-Bewertungen</span>
	</div>{/* Comment to fix spacing issue
	*/}	</div>
	</div>
</div>
</div>
<div className="fl-module fl-module-box fl-node-z2vsc4p83uq7" data-node="z2vsc4p83uq7">
	<div className="fl-module fl-module-uabb-numbers fl-node-eh0y4afd7c3w" data-node="eh0y4afd7c3w">
	<div className="fl-module-content fl-node-content">
		<div className="uabb-module-content uabb-number uabb-number-none-above-title uabb-number-default" role="group" tabIndex="0" aria-label="Counter module showing numbers">
		{/* Comment to fix spacing issue
	*/}<div className="uabb-number-text">
		<h2 className="uabb-number-string"><span className="uabb-number-int">{counters.reparaturen.toLocaleString('de-DE')}</span>+</h2><span className="uabb-number-after-text">erfolgreiche Reparaturen</span>
	</div>{/* Comment to fix spacing issue
	*/}	</div>
	</div>
</div>
</div>
</div>
</div>
</div>
	</div>

<div className="fl-col-group fl-node-a6102ykzjspv" data-node="a6102ykzjspv">
			<div className="fl-col fl-node-ogable76d10c fl-col-bg-color" data-node="ogable76d10c">
	<div className="fl-col-content fl-node-content"><div className="fl-module fl-module-spacer-gap fl-node-duyw9h6a78bv" data-node="duyw9h6a78bv">
	<div className="fl-module-content fl-node-content">
		<div className="uabb-module-content uabb-spacer-gap-preview uabb-spacer-gap">
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

export default AboutUs;
