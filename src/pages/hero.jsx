import React from 'react';
import '../styles/hero.css';
import factoryOutline from '../assets/images/bgfactoryfinal.webp';

const Hero = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${factoryOutline})` }}>
      <div className="hero-text-container">
        <h1 className="hero-title">
          Prashant Plastic<br />Industries LLP
        </h1>
        <p className="hero-tagline">
            “Engineering Excellence in Every Layer.”
        </p>
        <button className="hero-cta">Explore our Products</button>
      </div>
    </div>
  );
};

export default Hero;
