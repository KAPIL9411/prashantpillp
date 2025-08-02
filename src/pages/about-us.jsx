import React from 'react';
import '../styles/about-us.css';
import { useNavigate } from 'react-router-dom';

const stats = [
    { value: '50+', label: 'YEARS OF EXPERIENCE' },
    { value: '250+', label: 'SKILLED PROFESSIONALS' },
    { value: '45000+', label: 'EQUIPMENTS MANUFACTURED', className: 'aboutus-stat-circle--small' },
    { value: '10+', label: 'COUNTRIES EXPORTED TO' },
    { value: '7', label: 'MANUFACTURING UNITS' }
];

export default function AboutUs() {
    const navigate = useNavigate();
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
                onClick={() => navigate('/about-extended')}
                title="See more"
            >
                &#8594;
            </div>
        </section>
    );
}
