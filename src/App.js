import React from 'react';
import './App.css';
import cakeVideo from './assets/cakevideo.mp4';
import tresleches1 from './assets/tresleches1.jpg';

function App() {
  return (
    <div className="App">
      {/* Hero Section with Fullscreen Background Video */}
      <section className="hero-video-section">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src={cakeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>{' '}
        <div className="hero-overlay">
          <h1 className="hero-title">We're here to bake you happy!</h1>
          <p className="hero-subtitle">At Gala Sweets, we serve joy in every bite — with our homemade tres leches and vintage treats crafted with love.</p>
          <button className="cta-button">Get Some Goodies!</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Gala Sweets</h2>
        <p>
          Born from a love for vintage desserts and creamy tres leches, Gala Sweets blends timeless flavor with heartfelt tradition. We use only the finest ingredients to bring you unforgettable
          sweetness.
        </p>
        <img src={tresleches1} alt="Tres Leches Cake" className="about-image" />
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
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
