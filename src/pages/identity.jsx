import React from 'react';
import '../styles/identity.css';
import factoryIcon from '../assets/images/factory-icon.png';
import projectIcon from '../assets/images/project-icon.png';
import globeIcon from '../assets/images/country-icon.png';
import industryIcon from '../assets/images/industry-icon.png';
import isoIcon from '../assets/images/iso-icon.png';

const stats = [
    { value: '38+', label: 'Years Experience', icon: factoryIcon },
    { value: '500+', label: 'Projects Completed', icon: projectIcon },
    { value: '15+', label: 'Countries Served', icon: globeIcon },
    { value: '30+', label: 'Industries', icon: industryIcon },
    { value: '9001:2015', label: 'Certified', icon: isoIcon },
];

const Identity = () => {
    return (
        <main className="identity-root">
            <section className="identity-hero">
                <div className="identity-hero-content">
                    <h1 className="identity-hero-title">38+ Years of Excellence</h1>
                    <p className="identity-hero-desc">
                        Prashant Plastic Industries LLP is a leader in FRP/GRP solutions, delivering excellence, innovation, and sustainability for over 38 years.
                    </p>
                </div>
            </section>

            <section className="identity-stats">
                {stats.map((stat, idx) => (
                    <div className="identity-stat-card" key={idx}>
                        <img src={stat.icon} alt={`${stat.label} icon`} className="identity-stat-icon" />
                        <div className="identity-stat-value">{stat.value}</div>
                        <div className="identity-stat-label">{stat.label}</div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Identity;
