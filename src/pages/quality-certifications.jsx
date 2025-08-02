import React from 'react';
import '../styles/quality-certifications.css';
import { FaCertificate, FaSearch, FaShieldAlt } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import textureImg from '../assets/images/texture.jpg';

const sections = [
  {
    icon: <FaCertificate />,
    title: 'Certifications',
    type: 'tags',
    content: ['ISO 9001:2015', 'ISO 14001:2015', 'OHSAS 18001'],
  },
  {
    icon: <FaSearch />,
    title: 'Inspection & Testing',
    type: 'list',
    content: [
      'Third-party inspection available',
      'Comprehensive testing methods',
      'Strict inspection protocols',
    ],
  },
  {
    icon: <MdDesignServices />,
    title: 'Design Standards',
    type: 'tags',
    content: ['DIN', 'ASTM', 'ASME', 'EN', 'API'],
  },
  {
    icon: <FaShieldAlt />,
    title: 'Custom Quality Assurance',
    type: 'list',
    content: [
      'Tailored QA plans per project',
      'Full documentation & traceability',
      'Continuous process improvement',
    ],
  },
];

export default function QualityCertifications() {
  return (
    <section className="qc-section">
      <h2 className="qc-title">Quality & Certifications</h2>
      <p className="qc-intro">
        Our commitment to excellence is backed by industry-standard certifications and rigorous quality control.
      </p>
      <div className="qc-grid">
        {sections.map((section, idx) => (
          <div
            className="qc-card"
            key={idx}
            style={{
              backgroundImage: `url(${textureImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="qc-card-icon">{section.icon}</div>
            <h3 className="qc-card-title">{section.title}</h3>
            
            {section.type === 'tags' ? (
              <div className="qc-card-tags">
                {section.content.map((item, i) => (
                  <span key={i} className="qc-card-tag">
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <ul className="qc-card-list">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}