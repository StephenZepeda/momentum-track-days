import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQ() {
  const [Open_Items, setOpen_Items] = useState([]);

  const FAQ_Toggle = (index) => {
    setOpen_Items(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const FAQ_Data = {
    'getting-started': {
      title: 'Getting Started',
      items: [
        {
          question: 'Do I need track day experience to participate?',
          answer: 'No experience necessary! We welcome drivers of all skill levels, from complete beginners to experienced track day veterans. Our instructors will provide comprehensive safety briefings and guidance tailored to your experience level.'
        },
        {
          question: 'What do I need to bring?',
          answer: 'Please bring a valid driver\'s license and a helmet (we can provide helmets if needed). Comfortable athletic clothing and closed-toe shoes are recommended. Sunscreen, water, and snacks are also good to have on hand.'
        },
        {
          question: 'Can I use any vehicle?',
          answer: 'Most vehicles are welcome! We do require a tech inspection to ensure your car meets safety requirements. High-performance vehicles, sports cars, and even daily drivers are permitted. Contact us for specific vehicle requirements and any questions about your particular car.'
        }
      ]
    },
    'what-to-expect': {
      title: 'What to Expect',
      items: [
        {
          question: 'What\'s included in a track day pass?',
          answer: 'Your track day pass includes full day track access, safety briefing, professional marshals on-site, pit area access, tech inspection, and timing equipment. Lunch and beverages are available for purchase at our facility.'
        },
        {
          question: 'How long are the track sessions?',
          answer: 'Sessions are typically 20-30 minutes of track time, followed by cool-down periods. A full day event usually includes 3-4 sessions, giving you multiple opportunities to improve and enjoy the track.'
        },
        {
          question: 'Is instruction available?',
          answer: 'Yes! Professional instruction is available. We offer both ride-along sessions where an instructor accompanies you, and independent driving sessions. Instruction packages can be added to your booking.'
        }
      ]
    },
    'policies-booking': {
      title: 'Policies & Booking',
      items: [
        {
          question: 'What\'s the cancellation policy?',
          answer: 'Cancellations made 7 days or more before your event receive a full refund. Cancellations within 7 days are subject to a 50% fee. No-shows forfeit the full amount. Weather-related cancellations are rescheduled for free.'
        },
        {
          question: 'Do you offer corporate events?',
          answer: 'Absolutely! We offer custom corporate track day packages for team building and special events. Contact our team to discuss your specific needs and pricing for group bookings.'
        },
        {
          question: 'How do I book a track day?',
          answer: 'Booking is easy! Visit our tickets section on the home page or contact us directly. We\'ll help you select the perfect date, track layout, and any add-on services you need.'
        }
      ]
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about Momentum Track Days</p>
        </div>
      </section>

      <section className="faq-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-image">
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=400&fit=crop" alt="FAQ" />
            </div>
            <div className="intro-text">
              <h2>Questions About Track Days?</h2>
              <p>We've compiled answers to the most common questions we receive about our track day experiences, booking process, and what to expect when you visit Momentum Track Days.</p>
              <p>If you don't find your answer here, feel free to <Link to="/contact">contact us directly</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-layout">
            <aside className="faq-sidebar">
              <h3>Categories</h3>
              <ul className="faq-nav">
                <li><a href="#getting-started" className="faq-nav-link active">Getting Started</a></li>
                <li><a href="#what-to-expect" className="faq-nav-link">What to Expect</a></li>
                <li><a href="#policies-booking" className="faq-nav-link">Policies & Booking</a></li>
              </ul>
            </aside>

            <div className="faq-content">
              {Object.entries(FAQ_Data).map(([categoryId, category], categoryIndex) => (
                <div key={categoryId} className="faq-category" id={categoryId}>
                  <h2>{category.title}</h2>
                  <div className="faq-container">
                    {category.items.map((item, itemIndex) => {
                      const globalIndex = `${categoryIndex}-${itemIndex}`;
                      const isOpen = Open_Items.includes(globalIndex);
                      
                      return (
                        <div key={globalIndex} className={`faq-item ${isOpen ? 'active' : ''}`}>
                          <button 
                            className="faq-question"
                            onClick={() => FAQ_Toggle(globalIndex)}
                          >
                            <span>{item.question}</span>
                            <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                          </button>
                          <div className="faq-answer">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="container">
          <h2>Still have questions?</h2>
          <p>Don't hesitate to reach out. Our team is here to help!</p>
          <Link to="/contact" className="faq-button">Contact Us</Link>
        </div>
      </section>
    </>
  );
}

export default FAQ;
