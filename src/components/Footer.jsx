import React from 'react';
import '../styles/footer.css';
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import logo from '/logos/logo.webp'; 

const Logo = () => (
  <div className="footer-logo">
    <img src={logo} alt="Prashant Plastic Industries LLP" className="footer-logo-image" />
  </div>
);

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

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div className="footer-column">
                    <Logo />
                    <p className="footer-tagline">
                        A pioneer in manufacturing high-quality Fibre Reinforced Plastic (FRP) and Glass Reinforced Plastic (GRP) products since 1980.
                    </p>
                    <div className="social-icons">
                        <a href="https://linkedin.com/company/ppillp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://twitter.com/ppillp" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://facebook.com/ppillp" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                    </div>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#about-us" onClick={(e) => handleSmoothScroll(e, 'about-us')}>About Us</a></li>
                        <li><a href="#products" onClick={(e) => handleSmoothScroll(e, 'products')}>Products</a></li>
                        <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a></li>
                        <li><a href="#sustainability" onClick={(e) => handleSmoothScroll(e, 'sustainability')}>Sustainability</a></li>
                        <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Our Products</h4>
                    <ul className="footer-links">
                        <li><a href="#products" onClick={(e) => handleSmoothScroll(e, 'products')}>Chemical Process Equipment</a></li>
                        <li><a href="#products" onClick={(e) => handleSmoothScroll(e, 'products')}>Storage Tanks & Systems</a></li>
                        <li><a href="#products" onClick={(e) => handleSmoothScroll(e, 'products')}>Pollution Control</a></li>
                        <li><a href="#products" onClick={(e) => handleSmoothScroll(e, 'products')}>Piping & Fittings</a></li>
                        <li><a href="#products" onClick={(e) => handleSmoothScroll(e, 'products')}>Renewable Energy</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Get in Touch</h4>
                    <ul className="footer-contact">
                        <li className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <span>W-75 & 76, Additional M.I.D.C, Anand Nagar, Ambernath (E), Thane, Maharashtra - 421 506</span>
                        </li>
                        <li className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <a href="mailto:info@ppillp.com">info@ppillp.com</a>
                        </li>
                        <li className="contact-item">
                            <FaPhone className="contact-icon" />
                            <div>
                                <a href="tel:02512621001">0251-2621001</a><br/>
                                <a href="tel:02512620137">0251-2620137</a><br/>
                                <a href="tel:+918698475053">+91 8698475053</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Prashant Plastic Industries LLP. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
