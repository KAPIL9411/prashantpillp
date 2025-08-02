import React from 'react';
import '../styles/awards.css';
import { FaAward, FaCertificate, FaUsers, FaHardHat, FaLightbulb, FaUserTie } from 'react-icons/fa';

const awards = [
    { icon: <FaAward />, title: 'Industry Excellence', description: 'Recognized for our outstanding contributions and leadership in the FRP/GRP manufacturing industry.' },
    { icon: <FaCertificate />, title: 'Customer Satisfaction', description: 'Awarded for consistently exceeding client expectations with exceptional service and support.' },
    { icon: <FaLightbulb />, title: 'Innovation in Sustainability', description: 'Honored for our forward-thinking solutions in renewable energy and eco-friendly products.' },
];

const trainingInitiatives = [
    { icon: <FaHardHat />, title: 'Safety Training', description: 'Comprehensive programs to ensure a safe and secure work environment for all our employees, adhering to the highest OHSAS standards.' },
    { icon: <FaUsers />, title: 'Quality Assurance', description: 'Regular training focused on maintaining our rigorous ISO 9001 quality standards and promoting a culture of continuous improvement.' },
    { icon: <FaUserTie />, title: 'Technical & Leadership', description: 'Workshops and development programs to enhance the technical skills and cultivate leadership qualities within our team.' },
];

export default function Awards() {
    return (
        <section className="awards-section">
            <div className="awards-header">
                <h2 className="awards-title">Excellence, Recognized and Cultivated</h2>
                <p className="awards-intro">
                    Our commitment to quality and innovation is matched by our dedication to empowering our team through continuous training and development.
                </p>
            </div>

            <div className="main-content-section">
                <h3 className="section-subtitle">Awards & Recognition</h3>
                <div className="awards-grid">
                    {awards.map((award, index) => (
                        <div className="award-card" key={index}>
                            <div className="award-icon">{award.icon}</div>
                            <h4 className="award-title">{award.title}</h4>
                            <p className="award-description">{award.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="main-content-section">
                <h3 className="section-subtitle">Training & Development</h3>
                <div className="training-grid">
                    <div className="training-images">
                        <img src="https://placehold.co/600x400/1e293b/ffffff?text=Workshop" alt="Employee workshop" className="training-img" />
                        <img src="https://placehold.co/600x400/2563eb/ffffff?text=Training+Day" alt="Employee training day" className="training-img" />
                    </div>
                    <div className="training-initiatives">
                        {trainingInitiatives.map((initiative, index) => (
                            <div className="initiative-item" key={index}>
                                <div className="initiative-icon">{initiative.icon}</div>
                                <div className="initiative-text">
                                    <h4 className="initiative-title">{initiative.title}</h4>
                                    <p className="initiative-description">{initiative.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
