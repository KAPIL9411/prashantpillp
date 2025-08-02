import React from 'react';
import '../styles/projects.css';
import { FaPencilRuler, FaCogs, FaShippingFast, FaTools, FaRegCheckCircle } from 'react-icons/fa';
import { SiAutodesk } from 'react-icons/si';
import OptimizedImage from '../components/OptimizedImage';
import jsw from '../assets/logos/jsw.png';
import adani from '../assets/logos/adani.png';
import shanti from '../assets/logos/shanti-logo.png';
import hindustan from '../assets/logos/hindustan.png';
import water from '../assets/logos/water.png';
import ongc from '../assets/logos/ongc.png';
import head from '../assets/images/image.jpg'
import head2 from '../assets/images/head2.jpg'


const keyClients = [
    { name: 'JSW', logoUrl: jsw },
    { name: 'Water Kingdom', logoUrl: water },
    { name: 'Shanti Renewables', logoUrl: shanti },
    { name: 'ONGC', logoUrl: ongc },
    { name: 'Hindustan Zinc', logoUrl: hindustan },
    { name: 'Adani', logoUrl: adani },
];

const lifecycleSteps = [
    { icon: <FaPencilRuler />, title: 'Design & Engineering', description: 'Developing project plans and detailed component designs using advanced CAD software.' },
    { icon: <FaCogs />, title: 'Manufacturing & Fabrication', description: 'Precision fabrication of equipment and components to meet the highest quality standards.' },
    { icon: <FaShippingFast />, title: 'Logistics & Delivery', description: 'Meticulous tracking of project milestones to ensure timely delivery of all components to the site.' },
    { icon: <FaTools />, title: 'Installation & Site Support', description: 'Providing expert on-site technical assistance, supervision, and support during installation.' },
];

const testimonials = [
    {
        quote: "The FRVS Chemical Storage Tanks installed at our Bellary facility have performed exceptionally. The project was handled with great professionalism from start to finish.",
        author: '- Project Lead, JSW Steel Ltd.',
        imageUrl: head,
    },
    {
        quote: "Their team successfully installed multiple large-scale tanks at our Mundra power plant. The quality of work and on-site support was impressive.",
        author: '- Site Manager, Adani Power',
        imageUrl: head2,
    },
];


export default function Projects() {
    return (
        <section className="projects-section">
            <div className="projects-header">
                <h2 className="projects-title">Engineering Success, Delivering Excellence</h2>
                <p className="projects-intro">
                    We have a proven track record of executing complex projects for industry leaders. Our end-to-end project management ensures quality, precision, and timely completion.
                </p>
            </div>

            <div className="clients-section">
                <h3 className="clients-title">Trusted By Industry Leaders</h3>
                <div className="clients-logo-grid">
                    {keyClients.map(client => (
                        <img key={client.name} src={client.logoUrl} alt={`${client.name} Logo`} className="client-logo" />
                    ))}
                </div>
            </div>

            <div className="lifecycle-section">
                <h3 className="section-subtitle">Our Comprehensive Project Lifecycle</h3>
                <div className="lifecycle-grid">
                    {lifecycleSteps.map(step => (
                        <div key={step.title} className="lifecycle-card">
                            <div className="lifecycle-icon">{step.icon}</div>
                            <h4 className="lifecycle-card-title">{step.title}</h4>
                            <p className="lifecycle-card-desc">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="tech-support-grid">
                <div className="tech-card">
                    <div className="tech-card-icon"><SiAutodesk /></div>
                    <h4 className="tech-card-title">Advanced Design & Simulation</h4>
                    <p className="tech-card-desc">We utilize advanced CAD software to create precise isometric and construction drawings, running simulations to optimize designs before fabrication.</p>
                </div>
                <div className="tech-card">
                    <div className="tech-card-icon"><FaRegCheckCircle /></div>
                    <h4 className="tech-card-title">Dedicated Site & Technical Support</h4>
                    <p className="tech-card-desc">Our project management includes controlling technical documentation, end-user submissions, and providing hands-on site support to ensure seamless execution.</p>
                </div>
            </div>
            
            <div className="testimonials-section">
                 <h3 className="section-subtitle">Project Highlights & Testimonials</h3>
                 <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <img src={testimonial.imageUrl} alt="Project visual" className="testimonial-img" />
                            <div className="testimonial-content">
                                <p className="testimonial-quote">"{testimonial.quote}"</p>
                                <p className="testimonial-author">{testimonial.author}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>

        </section>
    );
}
