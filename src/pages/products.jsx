import React, { useState } from 'react';
import '../styles/products.css';
import productImage1 from '../assets/images/products/1.webp';
import productImage2 from '../assets/images/products/horizontaltank.webp';
import productImage3 from '../assets/images/products/Rectangulartank.webp';
import productImage4 from '../assets/images/products/hdpe.webp';
import productImage5 from '../assets/images/products/PPReactorVessels.webp';
import productImage6 from '../assets/images/products/DosingTanks.webp';
import productImage7 from '../assets/images/products/vaccumtanks.webp';
import productImage8 from '../assets/images/products/FRPBlowers.webp';
import productImage9 from '../assets/images/products/FumeExhaust.webp';
import productImage10 from '../assets/images/products/FRPFume.webp';
import productImage11 from '../assets/images/products/GRPFRPPipelines.webp';
import productImage12 from '../assets/images/products/FRPGrating.webp';
import productImage13 from '../assets/images/products/PicklingTanks.webp';
import productImage14 from '../assets/images/products/LamellaClarifiers.webp';
import productImage15 from '../assets/images/products/FRPLamellaPlates.webp';
import productImage16 from '../assets/images/products/ReinforcedPlasticCovers.webp';
import productImage17 from '../assets/images/products/FRPTurbineFan.webp';

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
    </svg>
);


const productCategories = [
  {
    name: 'Storage & Processing Vessels',
    description: 'Custom-built tanks, reactors, and vessels for various chemical and industrial processes.',
    products: [
      {
        name: 'FRP Cylindrical Tanks',
        image: productImage1,
        description: 'High-capacity, corrosion-resistant tanks for chemical and acid storage.',
        specs: ['Material: FRP, PP/FRP', 'Capacity: Up to 210 KL+', 'Clients: HIL Rasayani, Blue Circle Organics']
      },
      {
        name: 'FRP Horizontal Tanks',
        image: productImage2,
        description: 'Horizontal storage solutions with structural support, ideal for various industrial sites.',
        specs: ['Material: FRVS', 'Application: Chemical Storage', 'Clients: JSW Steel Ltd']
      },
      {
        name: 'FRP Rectangular Tanks',
        image: productImage3,
        description: 'Structurally reinforced rectangular tanks for pickling, plating, and storage.',
        specs: ['Material: FRP', 'Reinforcement: External ribbing', 'Customization: Available']
      },
      {
        name: 'HDPE Storage Tanks',
        image: productImage4,
        description: 'Durable and versatile tanks made from High-Density Polyethylene.',
        specs: ['Material: HDPE', 'Configuration: Vertical, Horizontal', 'Features: High impact strength']
      },
      {
        name: 'PP Reactor Vessels',
        image: productImage5,
        description: 'Specialized vessels for chemical reactions and processing, often with structural support.',
        specs: ['Material: PP/FRP', 'Application: Chemical Processing', 'Features: Custom nozzle configurations']
      },
      {
        name: 'Dosing Tanks',
        image: productImage6,
        description: 'Tanks designed for precise chemical dosing and mixing.',
        specs: ['Material: FRP', 'Application: Water Treatment, Chemical Dosing', 'Clients: GHCL Gujarat']
      },
      {
        name: 'PP/FRP Vacuum Tanks',
        image: productImage7,
        description: 'Tanks engineered to withstand negative pressure for vacuum applications.',
        specs: ['Material: PP/FRP', 'Application: Vacuum Processes', 'Features: Reinforced structure']
      }
    ]
  },
  {
    name: 'Pollution Control Equipment',
    description: 'High-efficiency fume extraction systems, scrubbers, and industrial blowers for a safe environment.',
    products: [
      {
        name: 'FRP Blowers & Fans',
        image: productImage8,
        description: 'Centrifugal and exhaust blowers designed for handling corrosive gases.',
        specs: ['Type: Centrifugal, Exhaust', 'Material: FRP', 'Application: Fume Extraction']
      },
      {
        name: 'Fume Exhaust & Scrubbing Systems',
        image: productImage9,
        description: 'Complete systems including Venturi scrubbers for effective pollution control.',
        specs: ['Components: Venturi Scrubber, Ducting', 'Material: FRP/PP', 'Use: R&D, Industrial Labs']
      },
      {
        name: 'FRP Fume Cupboards',
        image: productImage10,
        description: 'Laboratory fume hoods for safe handling of volatile substances.',
        specs: ['Material: Wooden FRP', 'Application: R&D Laboratories', 'Features: Integrated purification systems']
      },
    ]
  },
    {
    name: 'Piping & Infrastructure',
    description: 'High-pressure GRE pipes, FRP piping systems, and pultruded gratings for industrial setups.',
    products: [
       {
        name: 'GRP/FRP Pipe Lines & Fittings',
        image: productImage11,
        description: 'Comprehensive piping solutions for transporting corrosive fluids like acids.',
        specs: ['Material: GRP, FRP', 'Application: Acid Pipe Lines', 'Features: Leak-proof, long life']
      },
      {
        name: 'FRP Grating Platforms',
        image: productImage12,
        description: 'Lightweight, strong, and anti-slip grating for walkways, platforms, and flooring.',
        specs: ['Type: Moulded, Pultruded', 'Material: FRP', 'Features: Corrosion-resistant']
      }
    ]
  },
  {
    name: 'Surface Treatment & Galvanizing',
    description: 'Turnkey plants for pickling, anodizing, and galvanizing with impeccable surface treatment.',
    products: [
        {
            name: 'Pickling Tanks',
            image: productImage13,
            description: 'Corrosion-resistant tanks specifically designed for metal surface treatment processes.',
            specs: ['Material: FRP, PP/FRP', 'Application: Metal Pickling', 'Features: High chemical resistance']
        },
        {
            name: 'Lamella Clarifiers',
            image: productImage14,
            description: 'Compact, high-efficiency clarifiers for solid-liquid separation in treatment plants.',
            specs: ['Material: FRP', 'Application: Water & Wastewater Treatment', 'Features: Small footprint']
        },
        {
            name: 'FRP Lamella Plates',
            image: productImage15,
            description: 'Individual settler plates used in clarifiers for enhancing separation efficiency.',
            specs: ['Material: FRP', 'Use: New and existing clarifiers', 'Clients: Adani Power - Mundra']
        }
    ]
  },
  {
    name: 'Other Industrial Products',
    description: 'Additional specialized products including custom covers and specialized fans.',
     products: [
        {
            name: 'Reinforced Plastic Covers / Hoods',
            image: productImage16,
            description: 'Custom-fabricated covers and hoods for machinery and process equipment protection.',
            specs: ['Material: FRP/GRP', 'Application: Equipment Protection', 'Design: Custom-fit to specifications']
        },
        {
            name: 'FRP Turbine Fan',
            image: productImage17,
            description: 'Specialized turbine fans for high-performance air and gas movement.',
            specs: ['Material: FRP', 'Application: Industrial Ventilation', 'Features: High efficiency design']
        }
    ]
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  return (
      <section className="products-root">
        {selectedCategory ? (
          <div>
            <div className="back-button-wrapper">
              <button onClick={handleBackClick} className="back-button">
                <ChevronLeftIcon />
                Back to Categories
              </button>
            </div>
            <div className="products-header">
              <h1 className="products-title">{selectedCategory.name}</h1>
            </div>
            <div className="products-grid">
              {selectedCategory.products.map((product, index) => (
                <div className="product-card" key={index}>
                  <div className="product-card-img-wrap">
                    <img src={product.image} alt={product.name} className="product-card-img" loading="lazy"/>
                  </div>
                  <div className="product-card-content">
                    <h3 className="product-card-name">{product.name}</h3>
                    <p className="product-card-desc">{product.description}</p>
                      <div>
                       <h4 className="product-card-name" style={{fontSize: '1.1rem', marginBottom: '8px'}}>Key Details:</h4>
                       <ul className="specs-list">
                         {product.specs.map((spec, i) => <li key={i}>{spec}</li>)}
                       </ul>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="products-header">
              <h1 className="products-title">Our Products</h1>
              <p className="products-intro">
                Engineered for performance and reliability, our products cater to a wide range of industrial needs, from chemical processing to environmental protection.
              </p>
            </div>
            <div className="products-grid">
              {productCategories.map((cat, index) => (
                <div className="category-card" key={index} onClick={() => handleCategoryClick(cat)}>
                  <div className="category-card-content">
                    <h3 className="category-card-name">{cat.name}</h3>
                    <p className="category-card-desc">{cat.description}</p>
                    <button className="product-card-btn">Explore Products</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
  );
}