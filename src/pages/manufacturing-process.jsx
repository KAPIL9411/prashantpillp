import React from 'react';
import '../styles/manufacturing-process.css';
import { FaUserFriends, FaLightbulb, FaFlask, FaIndustry, FaCheckCircle, FaTruck, FaHandsHelping } from 'react-icons/fa';

const steps = [
    {
        title: 'We Listen & Understand',
        icon: <FaUserFriends />,
        desc: 'Our process begins by thoroughly understanding your unique requirements, challenges, and project goals to ensure a perfect solution.'
    },
    {
        title: 'Smart Design & Engineering',
        icon: <FaLightbulb />,
        desc: 'Our expert engineers utilize advanced CAD and simulation tools to create precise, efficient, and innovative designs tailored to your needs.'
    },
    {
        title: 'Material Selection',
        icon: <FaFlask />,
        desc: 'We carefully select the highest quality materials, from FRP and GRP to specialized thermoplastics, ensuring durability and performance.'
    },
    {
        title: 'Expert Fabrication',
        icon: <FaIndustry />,
        desc: 'With state-of-the-art manufacturing units, our skilled team fabricates your equipment with meticulous attention to detail.'
    },
    {
        title: 'Rigorous Quality Checks',
        icon: <FaCheckCircle />,
        desc: 'Every product undergoes stringent quality control inspections at each stage to guarantee it meets international standards.'
    },
    {
        title: 'Secure Packaging & Delivery',
        icon: <FaTruck />,
        desc: 'We ensure your order is securely packaged and delivered safely and on time, no matter the destination.'
    },
    {
        title: 'After-Sales Support',
        icon: <FaHandsHelping />,
        desc: 'Our commitment doesn’t end at delivery. We provide ongoing after-sales support to ensure your complete satisfaction.'
    },
];

export default function ManufacturingProcess() {
    return (
        <section className="mp-root">
            <div className="mp-header">
                <h1 className="mp-title">Manufacturing Process</h1>
                <p className="mp-intro">
                    From initial consultation to final delivery and beyond, our process is designed for quality, efficiency, and your complete satisfaction.
                </p>
            </div>
            <div className="mp-timeline">
                {steps.map((step, idx) => (
                    <div className="mp-timeline-item" key={idx}>
                        <div className="mp-timeline-icon">{step.icon}</div>
                        <div className="mp-timeline-content">
                            <h3 className="mp-step-title">{step.title}</h3>
                            <p className="mp-step-desc">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
