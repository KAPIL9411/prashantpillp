"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/header.css';
import { 
  FaHome, FaInfoCircle, FaUsers, FaBox, FaEnvelope,
  FaIndustry, FaCertificate, FaLeaf, FaFileAlt, FaTrophy
} from 'react-icons/fa';

const MENU_ITEMS = [
  { id: '#home', icon: FaHome, label: 'Home' },
  { id: '#about-us', icon: FaInfoCircle, label: 'About Us' },
  { id: '#ourteam', icon: FaUsers, label: 'Team' },
  { id: '#products', icon: FaBox, label: 'Products' },
  { id: '#industries', icon: FaIndustry, label: 'Industries' },
  { id: '#quality-certifications', icon: FaCertificate, label: 'Quality & Certifications' },
  { id: '#sustainability', icon: FaLeaf, label: 'Sustainability' },
  { id: '#resources', icon: FaFileAlt, label: 'Resources' },
  { id: '#awards', icon: FaTrophy, label: 'Awards' },
  { id: '#contact', icon: FaEnvelope, label: 'Contact', isContact: true }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleLinkClick = useCallback((e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const performScroll = () => {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      requestAnimationFrame(() => {
        setTimeout(performScroll, 50);
      });
    } else {
      performScroll();
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="logo-link">
            <img src="/logos/logo.webp" alt="Prashant Plastic Industries LLP Logo" className="logo-image" />
          </a>
          
          <nav className="nav-links">
            {MENU_ITEMS.slice(0, 4).map(item => (
              <a key={item.id} href={item.id} onClick={(e) => handleLinkClick(e, item.id)}>
                {item.label}
              </a>
            ))}
          </nav>
          
          <a href="#contact" className="contact-btn" onClick={(e) => handleLinkClick(e, '#contact')}>
            Contact Us
          </a>

          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </header>

      <aside className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <img src="/logos/logo.webp" alt="PPILLP Logo" className="side-logo-image" />
          <button className="close-menu-btn" onClick={toggleMenu} aria-label="Close menu"></button>
        </div>
        
        <nav className="side-menu-nav">
          {MENU_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a 
                key={item.id}
                href={item.id} 
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`side-menu-item ${item.isContact ? 'contact-item' : ''}`}
                style={{ transitionDelay: `${index * 0.04}s` }}
              >
                <IconComponent className="menu-item-icon" />
                <span className="menu-item-label">{item.label}</span>
                <span className="menu-item-arrow">→</span>
              </a>
            );
          })}
        </nav>
        
        <footer className="side-menu-footer">
          <p className="company-tagline">Engineering Excellence in Every Layer</p>
        </footer>
      </aside>
      
      <div className={`menu-backdrop ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} />
    </>
  );
};

export default Header;