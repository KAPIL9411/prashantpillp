import React from 'react';
import '../styles/about-us.css';
import { useNavigate } from 'react-router-dom';

const stats = [
    { value: '51+', label: 'YEARS OF EXPERIENCE' },
    { value: '250+', label: 'SKILLED PROFESSIONALS' },
    { value: '45000+', label: 'EQUIPMENTS MANUFACTURED', className: 'aboutus-stat-circle--small' },
    { value: '10+', label: 'COUNTRIES EXPORTED TO' },
    { value: '7', label: 'MANUFACTURING UNITS' }
];

export default function AboutUs() {
    const navigate = useNavigate();
    
    const handleLearnMoreClick = () => {
        navigate('/about-extended');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };
    return (
        <section className="aboutus-root">
            <h1 className="aboutus-title">ABOUT PPILLP</h1>
            <p className="aboutus-desc">
            Founded in 1974 by Shri Virendra Singh, Prashant Plastic Industries LLP is a pioneer in the manufacturing of high-quality FRP/GRP products in India. With over five decades of dedication to excellence, innovation, and customer satisfaction, PPILLP has become a trusted name in the global market. Our commitment to superior quality, sustainable practices, and cutting-edge technology drives us to deliver world-class solutions to industries across the world.
            </p>
            <div className="aboutus-stats-row">
                {stats.map((stat, idx) => (
                    <div className="aboutus-stat" key={idx}>
                        <div className={`aboutus-stat-circle${stat.className ? ' ' + stat.className : ''}`}>{stat.value}</div>
                        <div className="aboutus-stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
            <div
                className="aboutus-plus-icon"
                style={{ cursor: 'pointer' }}
                onClick={handleLearnMoreClick}
                title="See more"
            >
                <div className="modern-icon-container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M8 12h8M16 12l-4-4M16 12l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="icon-text">Learn More</span>
                </div>
            </div>
        </section>
    );
}
