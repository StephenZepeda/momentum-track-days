import React, { useState } from 'react';

function Contact() {
  const [Form_Data, setForm_Data] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const Form_HandleChange = (e) => {
    const { name, value } = e.target;
    setForm_Data(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const Form_HandleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', Form_Data);
    // Add form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setForm_Data({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Get In Touch</h1>
          <p>Have questions? We'd love to hear from you</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-main">
              <div className="contact-form-wrapper">
                <form onSubmit={Form_HandleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={Form_Data.name}
                        onChange={Form_HandleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={Form_Data.email}
                        onChange={Form_HandleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={Form_Data.phone}
                        onChange={Form_HandleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={Form_Data.subject}
                        onChange={Form_HandleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="corporate">Corporate Events</option>
                        <option value="instruction">Instruction Services</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="8" 
                      value={Form_Data.message}
                      onChange={Form_HandleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="submit-button">Send Message</button>
                </form>
              </div>
            </div>

            <aside className="contact-sidebar">
              <div className="contact-card">
                <div className="card-icon">📍</div>
                <h3>Location</h3>
                <p>California Thunderhill Raceway<br />5350 Midway Road<br />Willows, CA 95988</p>
              </div>

              <div className="contact-card">
                <div className="card-icon">📧</div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@momentumtrackdays.com">info@momentumtrackdays.com</a><br />
                  <a href="mailto:bookings@momentumtrackdays.com">bookings@momentumtrackdays.com</a>
                </p>
              </div>

              <div className="contact-card">
                <div className="card-icon">🕐</div>
                <h3>Hours</h3>
                <p>Monday - Sunday<br />9:00 AM - 5:00 PM PST</p>
              </div>

              <div className="contact-card">
                <div className="card-icon">🏁</div>
                <h3>Track Days</h3>
                <p>Check our schedule for upcoming events and availability</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
