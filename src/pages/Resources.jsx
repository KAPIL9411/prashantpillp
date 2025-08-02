import React from 'react';
import '../styles/resources.css';
import { FaCheckCircle, FaTimesCircle, FaThermometerHalf, FaShieldAlt, FaBolt } from 'react-icons/fa';

const materials = [
    {
        name: 'FRP/GRP',
        title: 'Fibre-Reinforced Plastic',
        overview: 'A composite material made of a polymer matrix reinforced with fibres. Known for its high strength-to-weight ratio, durability, and excellent corrosion resistance. Ideal for structural applications.',
        properties: [
            { name: 'High Strength & Rigidity', icon: <FaCheckCircle className="prop-icon-good" /> },
            { name: 'Excellent Corrosion Resistance', icon: <FaCheckCircle className="prop-icon-good" /> },
            { name: 'Lightweight', icon: <FaCheckCircle className="prop-icon-good" /> },
            { name: 'UV Resistant', icon: <FaCheckCircle className="prop-icon-good" /> },
        ],
        industries: 'Chemical, Steel, Water Treatment, Oil & Gas, Pulp & Paper'
    },
    {
        name: 'PP/PPH',
        title: 'Polypropylene / Homopolymer',
        overview: 'A versatile and widely used thermoplastic known for its excellent chemical resistance, high rigidity, and performance at elevated temperatures. PPH is the stronger, stiffer variant.',
        properties: [
            { name: 'High Chemical Resistance', icon: <FaCheckCircle className="prop-icon-good" /> },
            { name: 'High Service Temperature (up to 95°C)', icon: <FaThermometerHalf className="prop-icon-good" /> },
            { name: 'Weldable & Easy to Fabricate', icon: <FaCheckCircle className="prop-icon-good" /> },
            { name: 'Sensitive to Impact Below Freezing', icon: <FaTimesCircle className="prop-icon-bad" /> },
        ],
        industries: 'Chemical Processing, Galvanizing Plants, Pharmaceuticals, Battery Industry'
    },
    {
        name: 'PVDF',
        title: 'Polyvinylidene Fluoride',
        overview: 'A high-performance fluoropolymer offering exceptional purity and resistance to a wide range of solvents, acids, and hydrocarbons. Used in high-purity and critical applications.',
        properties: [
            { name: 'Highest Purity & Low Leaching', icon: <FaCheckCircle className="prop-icon-good" /> },
            { name: 'Excellent Chemical & UV Resistance', icon: <FaShieldAlt className="prop-icon-good" /> },
            { name: 'High Thermal Stability', icon: <FaThermometerHalf className="prop-icon-good" /> },
            { name: 'Good Radiation Resistance', icon: <FaCheckCircle className="prop-icon-good" /> },
        ],
        industries: 'Semiconductor, Pharmaceutical, Life Science, Defense, Chemical'
    },
    {
        name: 'ECTFE',
        title: 'Ethylene Chloro-trifluoroethylene',
        overview: 'A semi-crystalline fluoropolymer with a unique combination of properties, including outstanding chemical resistance, a sound permeation barrier, and excellent weldability.',
        properties: [
            { name: 'Superior Permeation Barrier', icon: <FaShieldAlt className="prop-icon-good" /> },
            { name: 'Broad Chemical Resistance (Acids, Oxidizers)', icon: <FaCheckCircle className="prop-icon-good" /> },
            { name: 'High Service Temperature (up to 150°C)', icon: <FaThermometerHalf className="prop-icon-good" /> },
            { name: 'Thermoplastic Formability', icon: <FaCheckCircle className="prop-icon-good" /> },
        ],
        industries: 'Heavy-Duty Corrosion Protection, Chemical Linings, Power Plants'
    },
    {
        name: 'PVC',
        title: 'Polyvinyl Chloride',
        overview: 'The world\'s third-most produced synthetic plastic polymer, known for its versatility, corrosion resistance, and high strength-to-weight ratio. Available in rigid and flexible forms.',
        properties: [
            { name: 'Excellent Corrosion Resistance', icon: <FaCheckCircle className="prop-icon-good" /> },
            { name: 'Good Electrical & Thermal Insulation', icon: <FaBolt className="prop-icon-good" /> },
            { name: 'Self-Extinguishing (Flame Retardant)', icon: <FaCheckCircle className="prop-icon-good" /> },
            { name: 'Lower Temperature Limit (60°C)', icon: <FaThermometerHalf className="prop-icon-bad" /> },
        ],
        industries: 'Chemical Storage, Acid Proof Lining, Plating, Industrial Piping'
    }
];

const chartData = [
    { material: 'FRP/GRP', strength: 'Excellent', temp: 'High', chemical: 'Excellent', cost: 'Medium' },
    { material: 'PP/PPH', strength: 'Good', temp: 'Medium', chemical: 'Excellent', cost: 'Low' },
    { material: 'PVDF', strength: 'Very Good', temp: 'High', chemical: 'Superior', cost: 'High' },
    { material: 'ECTFE', strength: 'Very Good', temp: 'Very High', chemical: 'Superior', cost: 'Very High' },
    { material: 'PVC', strength: 'Good', temp: 'Low', chemical: 'Very Good', cost: 'Low' },
];


export default function Resources() {
    const [activeTab, setActiveTab] = React.useState(materials[0].name);

    return (
        <section className="resources-section">
            <div className="resources-header">
                <h2 className="resources-title">Material Guide</h2>
                <p className="resources-intro">
                    An engineer's guide to our high-performance plastics. Understand the technical properties and applications to select the right material for your project.
                </p>
            </div>
            <div className="material-tabs-container">
                <div className="material-tabs">
                    {materials.map(material => (
                        <button
                            key={material.name}
                            className={`tab-button ${activeTab === material.name ? 'active' : ''}`}
                            onClick={() => setActiveTab(material.name)}
                        >
                            {material.name}
                        </button>
                    ))}
                </div>

                <div className="tab-content">
                    {materials.map(material =>
                        activeTab === material.name && (
                            <div key={material.name} className="tab-pane">
                                <h3 className="material-title">{material.title}</h3>
                                <p className="material-overview">{material.overview}</p>
                                <div className="material-details-grid">
                                    <div className="properties-list">
                                        <h4 className="details-subtitle">Key Properties</h4>
                                        <ul>
                                            {material.properties.map(prop => (
                                                <li key={prop.name}>{prop.icon} {prop.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="industries-list">
                                        <h4 className="details-subtitle">Ideal For Industries Like</h4>
                                        <p>{material.industries}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

            <div className="comparison-section">
                <h3 className="section-subtitle">At-a-Glance Material Comparison</h3>
                <div className="comparison-chart">
                    <table>
                        <thead>
                            <tr>
                                <th>Material</th>
                                <th>Mechanical Strength</th>
                                <th>Max. Temperature</th>
                                <th>Chemical Resistance</th>
                                <th>Relative Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chartData.map(data => (
                                <tr key={data.material}>
                                    <td>{data.material}</td>
                                    <td>{data.strength}</td>
                                    <td>{data.temp}</td>
                                    <td>{data.chemical}</td>
                                    <td>{data.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
