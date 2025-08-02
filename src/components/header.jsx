"use client";
import React, { useState, useEffect } from "react";
import '../styles/header.css'; 
import { FaHome, FaInfoCircle, FaUsers, FaBox, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <div className="logo">ppillp</div>
          
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about-us">About Us</a>
            <a href="#team">Team</a>
            <a href="#products">Products</a>
          </nav>
          
          <a href="#contact" className="contact-btn">Contact</a>

          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <div className={`line line1 ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line line2 ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line line3 ${isMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}><FaHome /><span>Home</span></a>
        <a href="#about-us" onClick={toggleMenu}><FaInfoCircle /><span>About Us</span></a>
        <a href="#team" onClick={toggleMenu}><FaUsers /><span>Team</span></a>
        <a href="#products" onClick={toggleMenu}><FaBox /><span>Products</span></a>
        <a href="#contact" className="mobile-contact-btn" onClick={toggleMenu}>< FaEnvelope /><span className="contact-text">Contact</span></a>
      </div>
      
      {isMenuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
