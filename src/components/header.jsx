"use client";
import React, { useState, useEffect } from "react";
import '../styles/header.css'; 
import { FaHome, FaInfoCircle, FaUsers, FaBox, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnLightSection, setIsOnLightSection] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      const aboutSection = document.getElementById('about-us');
      const contactSection = document.getElementById('contact');
      const productsSection = document.getElementById('products');
      const teamSection = document.getElementById('team');
      
      if (aboutSection || contactSection || productsSection || teamSection) {
        const sections = [aboutSection, contactSection, productsSection, teamSection].filter(Boolean);
        const isOnLight = sections.some(section => {
          if (section) {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setIsOnLightSection(isOnLight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''} ${isOnLightSection ? 'on-light' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <a href="#home" onClick={handleLinkClick}>ppillp</a>
          </div>
          
          <nav className="nav-links">
            <a href="#home" onClick={handleLinkClick}>Home</a>
            <a href="#about-us" onClick={handleLinkClick}>About Us</a>
            <a href="#team" onClick={handleLinkClick}>Team</a>
            <a href="#products" onClick={handleLinkClick}>Products</a>
          </nav>
          
          <a href="#contact" className="contact-btn" onClick={handleLinkClick}>Contact</a>

          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <div className={`line line1 ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line line2 ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line line3 ${isMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={handleLinkClick}><FaHome /><span>Home</span></a>
        <a href="#about-us" onClick={handleLinkClick}><FaInfoCircle /><span>About Us</span></a>
        <a href="#team" onClick={handleLinkClick}><FaUsers /><span>Team</span></a>
        <a href="#products" onClick={handleLinkClick}><FaBox /><span>Products</span></a>
        <a href="#contact" className="mobile-contact-btn" onClick={handleLinkClick}><FaEnvelope /><span className="contact-text">Contact</span></a>
      </div>
      
      {isMenuOpen && <div className="nav-overlay" onClick={handleLinkClick}></div>}
    </>
  );
};

export default Header;
