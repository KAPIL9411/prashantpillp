"use client";
import React, { useState, useEffect } from "react";
import '../styles/header.css'; 
import { 
  FaHome, 
  FaInfoCircle, 
  FaUsers, 
  FaBox, 
  FaEnvelope,
  FaIndustry,
  FaCertificate,
  FaLeaf,
  FaFileAlt,
  FaTrophy,
  FaTimes
} from 'react-icons/fa';
import logo from '../assets/logos/logo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: '#home', icon: FaHome, label: 'Home' },
    { href: '#about-us', icon: FaInfoCircle, label: 'About Us' },
    { href: '#team', icon: FaUsers, label: 'Team' },
    { href: '#products', icon: FaBox, label: 'Products' },
    { href: '#industries', icon: FaIndustry, label: 'Industries' },
    { href: '#quality-certifications', icon: FaCertificate, label: 'Quality & Certifications' },
    { href: '#sustainability', icon: FaLeaf, label: 'Sustainability' },
    { href: '#resources', icon: FaFileAlt, label: 'Resources' },
    { href: '#awards', icon: FaTrophy, label: 'Awards' },
    { href: '#contact', icon: FaEnvelope, label: 'Contact', isContact: true }
  ];

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <a href="#home" onClick={handleLinkClick}>
              <img src={logo} alt="Prashant Plastic Industries LLP" className="logo-image" />
            </a>
          </div>
          
          <nav className="nav-links">
            <a href="#home" onClick={handleLinkClick}>Home</a>
            <a href="#about-us" onClick={handleLinkClick}>About Us</a>
            <a href="#team" onClick={handleLinkClick}>Team</a>
            <a href="#products" onClick={handleLinkClick}>Products</a>
          </nav>
          
          <a href="#contact" className="contact-btn" onClick={handleLinkClick}>Contact</a>

          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </header>

      {/* Professional Side Menu */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <div className="side-menu-logo">
            <img src={logo} alt="Prashant Plastic Industries LLP" className="side-logo-image" />
          </div>
          <button className="close-menu-btn" onClick={toggleMenu} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>
        
        <nav className="side-menu-nav">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a 
                key={item.href}
                href={item.href} 
                onClick={handleLinkClick}
                className={`side-menu-item ${item.isContact ? 'contact-item' : ''}`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="menu-item-icon">
                  <IconComponent />
                </div>
                <span className="menu-item-label">{item.label}</span>
                <div className="menu-item-arrow">→</div>
              </a>
            );
          })}
        </nav>
        
        <div className="side-menu-footer">
          <p className="company-tagline">Engineering Excellence in Every Layer</p>
        </div>
      </div>
      
      {/* Backdrop Overlay */}
      <div className={`menu-backdrop ${isMenuOpen ? 'open' : ''}`} onClick={handleLinkClick}></div>
    </>
  );
};

export default Header;
