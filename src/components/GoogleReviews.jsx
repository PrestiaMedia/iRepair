import { useState, useEffect } from 'react';

const GoogleReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Markus Weber",
      date: "15. Januar, 2025",
      rating: 5,
      text: "Sehr hilfsbereit und mein Handy wieder zum Laufen gebracht. Reparatur ging auch flott. Vielen Dank.",
      initial: "M",
      color: "#4CAF50"
    },
    {
      id: 2,
      name: "Anna Schmidt",
      date: "8. Januar, 2025",
      rating: 5,
      text: "Toller Service! Mein iPhone wurde innerhalb von 2 Stunden repariert. Sehr professionell und freundlich.",
      initial: "A",
      color: "#FF5722"
    },
    {
      id: 3,
      name: "Thomas Müller",
      date: "2. Januar, 2025",
      rating: 5,
      text: "Beste Handy-Reparatur in Ingolstadt! Schnell, günstig und zuverlässig. Kann ich nur empfehlen!",
      initial: "T",
      color: "#009688"
    },
    {
      id: 4,
      name: "Ulla Groß",
      date: "5. Mai, 2025",
      rating: 5,
      text: "Sehr hilfsbereit und er hat mein Handy wieder zum Laden gebracht. Sehr empfehlenswert! Vielen Dank!",
      initial: "U",
      color: "#5B7FE8"
    },
    {
      id: 5,
      name: "Robert Jakovljevic",
      date: "25. April, 2025",
      rating: 5,
      text: "Sehr freundliche und gute Auskunft, vielen Dank.",
      initial: "R",
      color: "#7B68EE"
    },
    {
      id: 6,
      name: "J Ala",
      date: "19. April, 2025",
      rating: 5,
      text: "Super, schnell und zuverlässig!",
      initial: "J",
      color: "#4285F4"
    },
    {
      id: 7,
      name: "Zsuzsi Gáspár",
      date: "13. März, 2025",
      rating: 5,
      text: "Richtig schnell und super korrekt, kann nur weiterempfehlen! Es ging um einen Akkutausch, bin spontan vorbei gekommen und alles hat insgesamt nur 20 Minuten gedauert. Danke.",
      initial: "Z",
      color: "#9C27B0"
    },
    {
      id: 8,
      name: "Slow Mo",
      date: "24. Februar, 2025",
      rating: 5,
      text: "Super freundlich und schnelle Umsetzung",
      initial: "S",
      color: "#E91E63"
    }
  ];

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = reviews.length - (slidesToShow - 1);
  const slideWidth = 100 / slidesToShow;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="happy-customers" className="fl-row fl-row-full-width fl-row-bg-color fl-node-hzm7f0yxlvce" data-node="hzm7f0yxlvce">
      <div className="fl-row-content-wrap">
        <div className="fl-row-content fl-row-fixed-width fl-node-content">
          
          <div className="fl-col-group fl-node-i62akzgsqu3h" data-node="i62akzgsqu3h">
            <div className="fl-col fl-node-b830gpyutq6h" data-node="b830gpyutq6h">
              <div className="fl-col-content fl-node-content">
                
                {/* Header */}
                <div className="reviews-section-header">
                  <h2 className="reviews-title">Kundenstimmen auf Google</h2>
                  <p className="reviews-subtitle">
                    Wir sind der Reparaturladen für Mobiltelefone mit den meisten 5-Sterne Bewertungen in Ingolstadt. 
                    So bewerten Kunden unseren Handy Reparatur Service:
                  </p>
                </div>

                {/* Rating Badge */}
                <div className="reviews-rating-badge">
                  <div className="rating-label">AUSGEZEICHNET</div>
                  <div className="rating-stars-large">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star-icon-large">★</span>
                    ))}
                  </div>
                  <div className="rating-info">Basierend auf <strong>465 Bewertungen</strong></div>
                  <div className="google-brand">
                    <span style={{color: '#4285F4'}}>G</span>
                    <span style={{color: '#EA4335'}}>o</span>
                    <span style={{color: '#FBBC05'}}>o</span>
                    <span style={{color: '#4285F4'}}>g</span>
                    <span style={{color: '#34A853'}}>l</span>
                    <span style={{color: '#EA4335'}}>e</span>
                  </div>
                </div>

                {/* Carousel */}
                <div className="reviews-carousel-container">
                  <button 
                    className="carousel-nav-btn prev" 
                    onClick={prevSlide}
                    aria-label="Previous reviews"
                  >
                    ‹
                  </button>

                  <div className="reviews-carousel-viewport" style={{ overflow: 'hidden', width: '100%' }}>
                    <div 
                      className="reviews-carousel-track"
                      style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease',
                        transform: `translateX(-${currentSlide * slideWidth}%)`
                      }}
                    >
                      {reviews.map((review) => (
                        <div key={review.id} className="review-item" style={{ flex: `0 0 ${slideWidth}%`, maxWidth: `${slideWidth}%`, boxSizing: 'border-box' }}>
                          <div className="review-header-section">
                            <div className="review-author-info">
                              <div 
                                className="author-avatar"
                                style={{ backgroundColor: review.color }}
                              >
                                {review.initial}
                              </div>
                              <div className="author-details">
                                <div className="author-name">{review.name}</div>
                                <div className="review-date">{review.date}</div>
                              </div>
                            </div>
                            <div className="google-icon-badge">
                              <svg width="20" height="20" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="10" fill="#4285F4"/>
                                <text x="10" y="14" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">G</text>
                              </svg>
                            </div>
                          </div>
                          
                          <div className="review-rating-stars">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="star-icon-small">★</span>
                            ))}
                            <span className="verified-icon">✓</span>
                          </div>
                          
                          <div className="review-content-text">
                            {review.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    className="carousel-nav-btn next" 
                    onClick={nextSlide}
                    aria-label="Next reviews"
                  >
                    ›
                  </button>
                </div>

                {/* Dots Navigation */}
                <div className="carousel-dots-nav">
                  {[...Array(totalSlides)].map((_, index) => (
                    <button
                      key={index}
                      className={`dot-indicator ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
