import React, { useState } from 'react';
import '../styles/industries.css';
import pharmaceuticalsImg from '../assets/images/industries/pharma.jpg';
import chemicalsImg from '../assets/images/industries/chemical.jpg';
import fertilizersImg from '../assets/images/industries/pharma.jpg';
import steelImg from '../assets/images/industries/steel.jpg';

const industries = [
    {
        name: 'Chemical & Process Industries',
        img: pharmaceuticalsImg,
        children: ['Pharmaceuticals', 'Chemicals', 'Fertilizers & Pesticides'],
    },
    {
        name: 'Metals, Mining & Infrastructure',
        img: chemicalsImg,
        children: ['Steel', 'Mining', 'Construction'],
    },
    {
        name: 'Water & Environmental Solutions',
        img: fertilizersImg,
        children: ['Desalination', 'Pulp & Paper'],
    },
    {
        name: 'OEM & Industrial Manufacturing',
        img: steelImg,
        children: ['OEMs', 'Telecom'],
    },
    {
        name: 'Energy & Renewables',
        img: chemicalsImg,
        children: ['Oil & Gas', 'Agrochemicals', 'Viscose/Fiber'],
    },
];

export default function Industries() {
    const [expanded, setExpanded] = useState(Array(industries.length).fill(false));

    const toggleExpand = idx => {
        setExpanded(expanded =>
            expanded.map((val, i) => (i === idx ? !val : val))
        );
    };

    return (
        <section className="industries-root">
            <h1 className="industries-title">Industries We Serve</h1>
            <div className="industries-grid">
                {industries.map((industry, idx) => (
                    <div
                        className={`industry-card${expanded[idx] ? ' expanded' : ''}`}
                        key={idx}
                        onClick={() => toggleExpand(idx)} // Allow clicking anywhere on the card
                    >
                        <div className="industry-card-image-container">
                            <img 
                                src={industry.img} 
                                alt={industry.name} 
                                className="industry-card-img"
                                loading="lazy" // PERFORMANCE FIX: Lazy load images
                            />
                        </div>
                        <div className="industry-card-content">
                            <div className="industry-card-name">{industry.name}</div>
                            <div
                                className="industry-toggle-icon"
                                title={expanded[idx] ? 'Collapse' : 'Expand'}
                            >
                                {expanded[idx] ? '−' : '+'}
                            </div>
                        </div>
                        {expanded[idx] && industry.children && (
                            <ul className="industry-child-list">
                                {industry.children.map((child, cidx) => (
                                    <li className="industry-child-item" key={cidx}>
                                        {child}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
