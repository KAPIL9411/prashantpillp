import React from 'react';
import '../styles/about-extended.css';
import { FaUsers, FaLeaf, FaBuilding, FaHeart, FaTrophy, FaMedal, FaCogs, FaHandshake, FaBullseye, FaRocket, FaSeedling, FaShieldAlt } from 'react-icons/fa';

const timelineData = [
    { year: '1974', title: 'Foundation Journey Begins', description: 'Shri Virendra Singh establishes Prashant Plastic Works in Malad, Mumbai, with a team of 4, focusing on high-quality plastic products.' },
    { year: '1982', title: 'First Major Order', description: 'Successfully executed a major PVC Lining work order for the prestigious client ONGC at their DM Plant.' },
    { year: '1994', title: 'Second Unit Expansion', description: 'Launched a second manufacturing unit in Kalamboli, Maharashtra, to serve Metallurgy and Pharma sectors, significantly boosting production.' },
    { year: '1998', title: 'Landmark Project', description: 'Successfully delivered the piping project for the iconic Water Kingdom in Mumbai.' },
    { year: '2000s', title: 'Global Market Reach', description: 'Diversified product offerings and began exporting to markets across Asia and the Middle East.' },
    { year: '2010', title: 'Rebranding & Certification', description: 'Rebranded to Prashant Plastic Industries LLP (PPILLP) and achieved major ISO 9001 and ISO 14001 certifications.' },
    { year: '2016', title: 'Entering Renewable Energy', description: 'Launched the fifth unit, Prashant Solar, to manufacture Photovoltaic Solar Modules, entering the world of renewable energy.' },
    { year: '2024', title: 'State-of-the-Art Expansion', description: 'Opened the seventh manufacturing unit in Ambernath, Thane, equipped with modern machines and labs for advanced material processing.' },
];

const teamData = [
    { name: 'Virendra Singh', title: 'Founder & Chairman', description: 'With over 40+ years of experience, his visionary leadership is the cornerstone of the company’s success.' },
    { name: 'Rajendra Singh', title: 'Founder Member & CEO', description: 'A motivational force with 30+ years in the industry, driving the company’s sustained growth.' },
    { name: 'Prashant', title: 'Chief Finance Officer', description: 'Oversees the company’s finances and day-to-day operations, ensuring smooth and efficient processes.' },
    { name: 'Himanshu', title: 'Director of Productions', description: 'Leads the engineering and production teams, bringing innovative solutions and ensuring timely delivery.' },
    { name: 'Rahul', title: 'Manager, Designs & Quality', description: 'Responsible for product design and maintaining the rigorous quality control processes that define our brand.' },
    { name: 'Dhanashree', title: 'Manager, Sales & Admin', description: 'Drives sales efforts and builds strong customer relationships while managing administration.' },
];

const csrData = [
    { icon: <FaLeaf />, title: 'Environmental Sustainability', description: 'Reducing our environmental footprint through waste reduction, energy efficiency, and eco-friendly products.' },
    { icon: <FaUsers />, title: 'Community Development', description: 'Supporting local communities through educational initiatives, healthcare support, and infrastructure development.' },
    { icon: <FaHeart />, title: 'Employee Welfare', description: 'Prioritizing employee well-being with a safe work environment and opportunities for professional growth.' },
    { icon: <FaHandshake />, title: 'Ethical Practices', description: 'Adhering to the highest standards of integrity, transparency, and fairness in all business operations.' },
];

const whyChooseUsData = [
    { icon: <FaTrophy />, title: 'Unmatched Quality', description: 'Adhering to the highest manufacturing standards, reinforced by our ISO 9001 certification.' },
    { icon: <FaRocket />, title: 'Innovative Solutions', description: 'Investing in cutting-edge technology to develop solutions that meet the evolving needs of our customers.' },
    { icon: <FaCogs />, title: 'Proven Track Record', description: 'Over four decades of established experience and trust as a leader in the FRP/GRP industry.' },
    { icon: <FaShieldAlt />, title: 'Customer-Centric Approach', description: 'Our dedicated team provides exceptional service and after-sales support to ensure customer satisfaction.' },
];

export default function AboutExtended() {
    return (
        <div className="ae-page-container">
            <section className="ae-hero-section">
                <div className="ae-hero-content">
                    <h1 className="ae-hero-title">Our Journey of Excellence</h1>
                    <p className="ae-hero-subtitle">
                        Since 1974, Prashant Plastic Industries LLP has been a leader in innovation and quality. From a small workshop in Mumbai to a global enterprise, our story is one of relentless dedication, growth, and a commitment to building a sustainable future.
                    </p>
                </div>
            </section>

            <section className="ae-section">
                <div className="ae-vision-mission-container">
                    <div className="ae-card vm-card">
                        <FaBullseye className="vm-icon" />
                        <h2 className="ae-card-title">Our Vision</h2>
                        <p>To become the world leader in manufacturing Fibre Glass Composite Products, setting benchmarks in quality, innovation, and customer satisfaction.</p>
                    </div>
                    <div className="ae-card vm-card">
                        <FaSeedling className="vm-icon" />
                        <h2 className="ae-card-title">Our Mission</h2>
                        <p>To deliver superior quality products that meet the highest standards of durability, efficiency, and sustainability, enriching our customers’ businesses.</p>
                    </div>
                </div>
            </section>

            <section className="ae-section">
                <h2 className="ae-section-title">Our History & Milestones</h2>
                <div className="ae-timeline">
                    {timelineData.map((item, index) => (
                        <div className="ae-timeline-item" key={index}>
                            <div className="ae-timeline-dot"></div>
                            <div className="ae-timeline-content">
                                <div className="ae-timeline-year">{item.year}</div>
                                <h3 className="ae-timeline-title">{item.title}</h3>
                                <p className="ae-timeline-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ae-section ae-team-section">
                <h2 className="ae-section-title">Meet Our Leadership</h2>
                <div className="ae-team-grid">
                    {teamData.map((member, index) => (
                        <div className="ae-team-card" key={index}>
                            <div className="ae-team-avatar">
                                <FaUsers />
                            </div>
                            <h3 className="ae-team-name">{member.name}</h3>
                            <p className="ae-team-title">{member.title}</p>
                            <p className="ae-team-description">{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="ae-section">
                <h2 className="ae-section-title">Corporate Social Responsibility</h2>
                <div className="ae-grid-container">
                    {csrData.map((item, index) => (
                        <div className="ae-card info-card" key={index}>
                            <div className="info-card-icon">{item.icon}</div>
                            <h3 className="ae-card-title">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="ae-section">
                <h2 className="ae-section-title">Why Partner With PPILLP?</h2>
                <div className="ae-grid-container">
                    {whyChooseUsData.map((item, index) => (
                        <div className="ae-card info-card" key={index}>
                            <div className="info-card-icon">{item.icon}</div>
                            <h3 className="ae-card-title">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}