import React, { useState } from 'react';
import '../styles/industries.css';
import { 
  FaFlask, 
  FaHammer, 
  FaTint, 
  FaCog, 
  FaBolt,
  FaIndustry
} from 'react-icons/fa';

// React Icons Component with better visibility
const IndustryIcon = ({ type, className }) => {
  const iconProps = {
    className: `${className} industry-icon`,
    size: 48,
    style: { 
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
      transition: 'all 0.3s ease'
    }
  };
  
  const icons = {
    chemical: <FaFlask {...iconProps} />,
    construction: <FaHammer {...iconProps} />,
    water: <FaTint {...iconProps} />,
    manufacturing: <FaCog {...iconProps} />,
    energy: <FaBolt {...iconProps} />
  };
  
  return icons[type] || <FaIndustry {...iconProps} />;
};

const industries = [
    {
        name: 'Chemical & Process Industries',
        icon: 'chemical',
        color: '#2563eb',
        gradient: 'from-blue-500 to-blue-600',
        children: ['Pharmaceuticals', 'Chemicals', 'Fertilizers & Pesticides'],
        description: 'Advanced solutions for chemical processing and pharmaceutical manufacturing'
    },
    {
        name: 'Metals, Mining & Infrastructure',
        icon: 'construction',
        color: '#64748b',
        gradient: 'from-slate-500 to-slate-600',
        children: ['Steel', 'Mining', 'Construction'],
        description: 'Robust infrastructure solutions for heavy industries and construction'
    },
    {
        name: 'Water & Environmental Solutions',
        icon: 'water',
        color: '#0891b2',
        gradient: 'from-cyan-500 to-cyan-600',
        children: ['Desalination', 'Pulp & Paper'],
        description: 'Sustainable water treatment and environmental protection systems'
    },
    {
        name: 'OEM & Industrial Manufacturing',
        icon: 'manufacturing',
        color: '#dc2626',
        gradient: 'from-red-500 to-red-600',
        children: ['OEMs', 'Telecom'],
        description: 'Precision manufacturing solutions for industrial applications'
    },
    {
        name: 'Energy & Renewables',
        icon: 'energy',
        color: '#059669',
        gradient: 'from-emerald-500 to-emerald-600',
        children: ['Oil & Gas', 'Agrochemicals', 'Viscose/Fiber'],
        description: 'Clean energy solutions and renewable technology systems'
    },
];

export default function Industries() {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (idx) => {
        setActiveCard(activeCard === idx ? null : idx);
    };

    return (
        <section className="industries-root">
            <div className="industries-container">
                <div className="industries-header">
                    <h2 className="industries-title">Industries We Serve</h2>
                    <p className="industries-subtitle">Delivering excellence across diverse sectors with innovative solutions</p>
                </div>
                
                <div className="industries-grid">
                    {industries.map((industry, idx) => (
                        <div
                            key={idx}
                            className={`industry-card ${activeCard === idx ? 'active' : ''}`}
                            onClick={() => handleCardClick(idx)}
                            style={{ '--accent-color': industry.color }}
                        >
                            <div className="industry-card-header">
                                <div className="industry-icon-container">
                                    <IndustryIcon type={industry.icon} className="industry-icon" />
                                </div>
                                <div className="industry-content">
                                    <h3 className="industry-name">{industry.name}</h3>
                                    <p className="industry-description">{industry.description}</p>
                                </div>
                                <div className="industry-arrow">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="industry-details">
                                <div className="industry-specializations">
                                    <h4 className="specializations-title">Our Specializations</h4>
                                    <div className="industry-tags">
                                        {industry.children.map((child, cidx) => (
                                            <span key={cidx} className="industry-tag">
                                                <span className="tag-dot"></span>
                                                {child}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
