import React from 'react';
import '../styles/products.css';
import processImg from '../assets/images/industries/pharma.jpg';
import surfaceImg from '../assets/images/industries/chemical.jpg';
import pollutionImg from '../assets/images/industries/agrochemicals.jpeg';
import storageImg from '../assets/images/industries/steel.jpg';
import accessoriesImg from '../assets/images/industries/chemical.jpg';
import renewableImg from '../assets/images/industries/steel.jpg';

const categories = [
    {
        name: 'Chemical Process Equipment',
        img: processImg,
        description: 'Custom-built reactors, vessels, and polymer concrete cells for various chemical processes.'
    },
    {
        name: 'Surface Treatment & Galvanizing',
        img: surfaceImg,
        description: 'Turnkey plants for pickling, anodizing, and galvanizing with impeccable surface treatment.'
    },
    {
        name: 'Pollution Control Equipment',
        img: pollutionImg,
        description: 'High-efficiency fume extraction systems, scrubbers, and industrial blowers for a safe environment.'
    },
    {
        name: 'Storage Systems',
        img: storageImg,
        description: 'Corrosion-resistant FRP, GRP, HDPE, and PP+FRP tanks for acids and chemicals.'
    },
    {
        name: 'Piping & Accessories',
        img: accessoriesImg,
        description: 'High-pressure GRE pipes, FRP piping systems, and pultruded gratings for industrial setups.'
    },
    {
        name: 'Renewable Energy Solutions',
        img: renewableImg,
        description: 'Sustainable and eco-friendly solar PV panels and complete solar energy systems.'
    },
];

export default function Products() {
    return (
        <section className="products-root">
            <div className="products-header">
                <h1 className="products-title">Our Products</h1>
                <p className="products-intro">
                    Engineered for performance and reliability, our products cater to a wide range of industrial needs, from chemical processing to environmental protection.
                </p>
            </div>
            <div className="products-grid">
                {categories.map((cat, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-card-img-wrap">
                            <img 
                                src={cat.img} 
                                alt={cat.name} 
                                className="product-card-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="product-card-content">
                            <h3 className="product-card-name">{cat.name}</h3>
                            <p className="product-card-desc">{cat.description}</p>
                            <button className="product-card-btn">Explore</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
