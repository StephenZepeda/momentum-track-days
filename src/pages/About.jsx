import React from 'react';

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About Momentum Track Days</h1>
          <p>Dedicated to delivering world-class track day experiences</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-image">
              <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=500&fit=crop" alt="Track Mission" />
            </div>
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>At Momentum Track Days, our mission is to provide automotive enthusiasts with premium, professionally-managed track day experiences at California's premier racing facility. We believe that everyone deserves the opportunity to explore their driving potential in a safe, controlled environment with expert guidance and world-class facilities.</p>
              <ul className="mission-list">
                <li>Accessible track days for all skill levels</li>
                <li>Professional instruction and guidance</li>
                <li>Safety-first approach to motorsports</li>
                <li>Building a passionate motorsports community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="container">
          <div className="two-column">
            <div>
              <h2>Why Choose Momentum?</h2>
              <ul className="benefits-list">
                <li>Professional instruction from experienced racing coaches</li>
                <li>Multiple track layouts for all skill levels</li>
                <li>World-class Thunderhill Raceway facilities</li>
                <li>Small group sizes for personalized attention</li>
                <li>Comprehensive safety briefings and protocols</li>
                <li>Flexible scheduling and multiple session options</li>
              </ul>
            </div>
            <div>
              <h2>Our Commitment</h2>
              <p>We're committed to providing a safe, welcoming environment where drivers can push their limits and discover their true potential. Every session is designed with safety as our top priority, backed by professional marshaling, modern facilities, and expert instruction.</p>
              <p>Whether you're a track day veteran or experiencing your first lap, Momentum is dedicated to making your day unforgettable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem', color: 'var(--Color_BabyBlue)' }}>Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Team Member" />
              </div>
              <h3>Professional Instructors</h3>
              <p>Expert guidance from certified racing coaches with years of track experience</p>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" alt="Team Member" />
              </div>
              <h3>Safety First Approach</h3>
              <p>Comprehensive marshaling and safety protocols ensuring your peace of mind</p>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" alt="Team Member" />
              </div>
              <h3>Premium Support</h3>
              <p>Dedicated staff ready to assist with all aspects of your track day experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
