import React, { useState } from 'react';
import './App.css';
import cakeBackgroundVideo from './assets/cakeBackgroundVideo.mp4';
import tresleches1 from './assets/tresleches1.jpg';
import galaLogo from './assets/gala_sweets_logo.png';
import tresleches2 from './assets/tresleches2.jpg';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function App() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
    };

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then(
      () => {
        alert('Message sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' });
      },
      (error) => {
        console.error('EmailJS error:', error);
        alert('Message failed to send.');
      },
    );
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-video-section">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src={cakeBackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <img src={galaLogo} alt="Gala Sweets Logo" className="hero-logo" />

          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
            We're here to bake you happy!
          </motion.h1>
          <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}>
            At Gala Sweets, we serve joy in every bite with our homemade tres leches crafted with love.
          </motion.p>
          <motion.button
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
            onClick={() => {
              const contactSection = document.querySelector('.contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Reach Out Now
          </motion.button>
        </div>
      </section>

      {/* Card Section */}
      <section className="cards-section">
        <motion.div
          className="card left-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img src={tresleches1} alt="Classic Tres Leches" className="card-image" />
          <h3>Classic Tres Leches</h3>
          <p>Our signature tres leches cake light, fluffy, and soaked in three rich milks. A timeless dessert made with love in every layer.</p>
        </motion.div>

        <motion.div
          className="card right-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        >
          <img src={tresleches2} alt="Mango Tres Leches" className="card-image" />
          <h3>Mango Tres Leches</h3>
          <p>A tropical twist on our classic soft sponge cake drenched in mango-infused milk and topped with real mango. Sweet, sunny, and unforgettable.</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" value={formData.user_name} onChange={handleChange} required />
          <input type="email" name="user_email" placeholder="Your Email" value={formData.user_email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Gala Sweets. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
