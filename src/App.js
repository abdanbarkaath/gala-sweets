import React, { useRef } from 'react';
import './App.css';
import cakeVideo from './assets/cakevideo.mp4';
import tresleches1 from './assets/tresleches1.jpg';
import tresleches2 from './assets/tresleches2.jpg';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          alert('Message failed to send.');
        }
      );
  };

  return (
    <div className="App">
      {/* Hero Section with Fullscreen Background Video */}
      <section className="hero-video-section">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src={cakeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            We're here to bake you happy!
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            At Gala Sweets, we serve joy in every bite — with our homemade tres leches and vintage treats crafted with love.
          </motion.p>
          <motion.button 
            className="cta-button"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          >
            Get Some Goodies!
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
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={tresleches1} alt="Vintage Flavors" className="card-image" />
          <h3>Vintage Flavors</h3>
          <p>Indulge in our nostalgic dessert menu that brings timeless classics to life.</p>
        </motion.div>

        <motion.div
          className="card right-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <img src={tresleches2} alt="Creamy Tres Leches" className="card-image" />
          <h3>Creamy Tres Leches</h3>
          <p>Enjoy our signature moist tres leches cake topped with sweet whipped cream.</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
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
