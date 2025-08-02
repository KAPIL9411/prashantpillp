import React from 'react';
import '../styles/hero.css';
import factoryOutline from '../assets/images/bgfactoryfinal.webp';

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div id="home" className="hero-container" style={{ backgroundImage: `url(${factoryOutline})` }}>
      <div className="hero-text-container">
        <h1 className="hero-title">
          Prashant Plastic<br />Industries LLP
        </h1>
        <p className="hero-tagline">
            "Engineering Excellence in Every Layer."
        </p>
        <button 
          className="hero-cta" 
          onClick={(e) => handleSmoothScroll(e, 'products')}
        >
          Explore our Products
        </button>
      </div>
    </div>
  );
};

export default Hero;
