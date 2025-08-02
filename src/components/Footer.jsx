import React from 'react';
import '../styles/footer.css';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Logo = () => <h3 className="footer-logo">Prashant Plastic Industries LLP</h3>;

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div className="footer-column">
                    <Logo />
                    <p className="footer-tagline">
                        A pioneer in manufacturing high-quality Fibre Reinforced Plastic (FRP) and Glass Reinforced Plastic (GRP) products since 1974.
                    </p>
                    <div className="social-icons">
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                    </div>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Our Products</h4>
                    <ul className="footer-links">
                        <li><a href="#">Chemical Process Equipment</a></li>
                        <li><a href="#">Storage Tanks & Systems</a></li>
                        <li><a href="#">Pollution Control</a></li>
                        <li><a href="#">Piping & Fittings</a></li>
                        <li><a href="#">Renewable Energy</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Get in Touch</h4>
                    <ul className="footer-contact">
                        <li>B-72, MIDC Anand Nagar, Ambernath, Maharashtra</li>
                        <li>info@ppillp.com</li>
                        <li>+91 9623 368 579</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Prashant Plastic Industries LLP. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
