import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [Slider_Index, setSlider_Index] = useState(1);

  const slides = [
    { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=800&fit=crop", alt: "Sports car on track" },
    { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop", alt: "Racing car detail" },
    { src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&h=800&fit=crop", alt: "Car drifting on track" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop", alt: "Luxury sports car" }
  ];

  useEffect(() => {
    const Slider_Auto = () => {
      setSlider_Index(prev => (prev >= slides.length ? 1 : prev + 1));
    };

    const Slider_Interval = setInterval(Slider_Auto, 4000);
    return () => clearInterval(Slider_Interval);
  }, [slides.length]);

  useEffect(() => {
    const elements = document.querySelectorAll('.about, .track-card, .ticket-card, .info-card');
    const Observer_Options = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const Observer_Callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(Observer_Callback, Observer_Options);
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const Slider_Change = (direction) => {
    let newIndex = Slider_Index + direction;
    if (newIndex > slides.length) newIndex = 1;
    if (newIndex < 1) newIndex = slides.length;
    setSlider_Index(newIndex);
  };

  const Slider_SetCurrent = (index) => {
    setSlider_Index(index);
  };

  return (
    <>
      <section className="slider-section">
        <div className="hero-content">
          <h1>Experience The Track</h1>
          <p>Premium track day experiences for automotive enthusiasts</p>
          <p className="hero-subtext">Professional facilities. Expert guidance. Unforgettable moments.</p>
          <a href="#tickets" className="hero-button">Get Your Tickets</a>
        </div>
        <div className="slider-container">
          <div className="slider">
            {slides.map((slide, index) => (
              <div key={index} className={`slide ${index + 1 === Slider_Index ? 'active' : ''}`}>
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
          <button className="slider-btn prev" onClick={() => Slider_Change(-1)}>&#10094;</button>
          <button className="slider-btn next" onClick={() => Slider_Change(1)}>&#10095;</button>
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index + 1 === Slider_Index ? 'active' : ''}`}
                onClick={() => Slider_SetCurrent(index + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="container">
          <div className="feature-content">
            <div className="feature-text">
              <h2>California's premier <span className="highlight">track day</span> destination.</h2>
              <p>Welcome to Momentum Track Days, home to California's most exciting track experiences at Thunderhill Raceway. As your premier track day provider, we invite you to experience world-class racing facilities and professional instruction. Whether you're a seasoned driver or exploring motorsports for the first time, Momentum delivers an unforgettable day on the track. Explore our layouts, book your session, and join the community of passionate automotive enthusiasts.</p>
              <a href="#tickets" className="feature-button">Book Your Experience</a>
            </div>
            <div className="feature-image">
              <div className="feature-image-placeholder">
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=500&fit=crop" alt="Premium Track Experience" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>Unleash Your Passion</h2>
          <p>Momentum Track Days offers exclusive access to premium racing facilities. Whether you're a seasoned driver or looking to experience the thrill for the first time, we provide a safe and exhilarating environment to push your limits.</p>
        </div>
      </section>

      <section id="tracks" className="tracks">
        <div className="container">
          <h2>Our Track Layouts</h2>
          <div className="tracks-grid">
            <div className="track-card">
              <div className="track-image">
                <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=400&fit=crop" alt="Thunderhill 5 Mile" />
              </div>
              <div className="track-info">
                <h3>Thunderhill 5-Mile</h3>
                <p className="track-distance">5.0 miles | 18 turns</p>
                <p>Our premier full-length circuit at California Thunderhill Raceway. Experience high-speed straights and technical corners for maximum adrenaline.</p>
              </div>
            </div>
            <div className="track-card">
              <div className="track-image">
                <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=400&fit=crop" alt="Thunderhill 3 Mile" />
              </div>
              <div className="track-info">
                <h3>Thunderhill 3-Mile</h3>
                <p className="track-distance">3.0 miles | 12 turns</p>
                <p>Perfect for honing driving skills with a balanced mix of acceleration zones and technical corners on this intermediate course.</p>
              </div>
            </div>
            <div className="track-card">
              <div className="track-image">
                <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=400&fit=crop" alt="Thunderhill 2 Mile" />
              </div>
              <div className="track-info">
                <h3>Thunderhill 2-Mile</h3>
                <p className="track-distance">2.0 miles | 8 turns</p>
                <p>Ideal for beginners and practice sessions. This shorter layout provides safe learning opportunities with all the racing thrills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tickets" className="tickets">
        <div className="container">
          <h2>Book Your Day</h2>
          <div className="tickets-grid">
            <div className="ticket-card">
              <div className="card-header">
                <h3>Track Day Pass</h3>
                <div className="price">Contact for Pricing</div>
              </div>
              <div className="card-body">
                <ul>
                  <li>Full day track access</li>
                  <li>Safety briefing included</li>
                  <li>Professional marshals on-site</li>
                  <li>Pit area access</li>
                  <li>Tech inspection</li>
                  <li>Timing equipment available</li>
                </ul>
              </div>
              <div className="card-footer">
                <Link to="/contact" className="ticket-button">Contact Us</Link>
              </div>
            </div>
            <div className="info-card">
              <h3>What to Expect</h3>
              <div className="info-content">
                <div className="info-item">
                  <span className="info-icon">🏁</span>
                  <div>
                    <h4>Professional Environment</h4>
                    <p>Expertly managed sessions with safety as priority</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">🏎️</span>
                  <div>
                    <h4>All Skill Levels</h4>
                    <p>From beginners to experienced racers</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">⚡</span>
                  <div>
                    <h4>Premium Facilities</h4>
                    <p>Modern track with top-tier amenities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
