import React from 'react';
import '../styles/sustainability.css';
import { FaLeaf, FaSolarPanel, FaIndustry, FaBoxOpen, FaHandHoldingHeart } from 'react-icons/fa';

const sustainabilityPillars = [
    {
        icon: <FaLeaf />,
        title: 'Eco-Safe Materials',
        description: 'We prioritize the use of recyclable and durable plastics, ensuring our products have a long lifespan and contribute to a circular economy.'
    },
    {
        icon: <FaSolarPanel />,
        title: 'Renewable Energy Division',
        description: 'Through Prashant Solar, we manufacture photovoltaic solar modules and have successfully executed large-scale solar park projects, promoting clean energy.'
    },
    {
        icon: <FaIndustry />,
        title: 'Energy-Efficient Plants',
        description: 'Our manufacturing processes are continuously optimized for energy efficiency, reducing our overall environmental footprint and operational costs.'
    },
    {
        icon: <FaHandHoldingHeart />,
        title: 'Corporate Social Responsibility',
        description: 'We are dedicated to community development, environmental sustainability, and employee welfare, making a positive impact beyond our business operations.'
    }
];

export default function Sustainability() {
    return (
        <section className="sustainability-section">
            <div className="sustainability-header">
                <h2 className="sustainability-title">Committed to a Greener Future</h2>
                <p className="sustainability-intro">
                    Our vision is to lead with integrity, not just in manufacturing, but in our commitment to environmental stewardship and sustainable practices for a better world.
                </p>
            </div>

            <div className="pillars-grid">
                {sustainabilityPillars.map((pillar, index) => (
                    <div className="pillar-card" key={index}>
                        <div className="pillar-icon">{pillar.icon}</div>
                        <h3 className="pillar-title">{pillar.title}</h3>
                        <p className="pillar-description">{pillar.description}</p>
                    </div>
                ))}
            </div>

            <div className="feature-section">
                <div className="feature-content">
                    <h3 className="feature-title">Pioneering Solar Energy Solutions</h3>
                    <p className="feature-description">
                        A key milestone in our journey was the successful execution of a 4.5 Mega-Watt Renewable Energy Solar Park for Shanti Renewables. This project underscores our capability and dedication to advancing sustainable energy infrastructure.
                    </p>
                </div>
                <div className="feature-image-wrapper">
                    <img 
                        src="https://placehold.co/600x400/22c55e/ffffff?text=Solar+Park+Project" 
                        alt="Solar Park Project" 
                        className="feature-image"
                    />
                </div>
            </div>
        </section>
    );
}
