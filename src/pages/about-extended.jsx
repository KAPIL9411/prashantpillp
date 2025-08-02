import React from 'react';
import '../styles/about-extended.css';
import { FaAward, FaCertificate, FaLeaf, FaUsers, FaIndustry, FaGlobe, FaHandshake, FaShieldAlt } from 'react-icons/fa';

export default function AboutExtended() {
  return (
    <div className="about-extended">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>About PPILLP</h1>
          <p className="hero-subtitle">
            Welcome to Prashant Plastic Industries LLP, a pioneer in manufacturing high-quality 
            Fibre Reinforced Plastic (FRP) and Glass Reinforced Plastic (GRP) products since 1974.
          </p>
        </div>
      </section>

      {/* Vision Mission CSR */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="section-header">
            <h2>Vision, Mission & Corporate Social Responsibility</h2>
          </div>
          
          <div className="vmcsr-grid">
            <div className="vmcsr-card">
              <div className="card-icon">
                <FaGlobe />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the world leader in manufacturing Fibre Glass Composite Products, 
                setting benchmarks in quality, innovation, and customer satisfaction.
              </p>
            </div>
            
            <div className="vmcsr-card">
              <div className="card-icon">
                <FaHandshake />
              </div>
              <h3>Our Mission</h3>
              <p>
                Our mission is to deliver superior quality products that meet the highest standards 
                of durability, efficiency, and sustainability. We are committed to enriching our 
                customers' businesses through innovative solutions and exceptional service.
              </p>
            </div>
            
            <div className="vmcsr-card full-width">
              <div className="card-icon">
                <FaLeaf />
              </div>
              <h3>Corporate Social Responsibility (CSR)</h3>
              <p>At Prashant Plastic Industries LLP, we believe in giving back to the community and making a positive impact on society.</p>
              <div className="csr-points">
                <div className="csr-point">
                  <strong>Environmental Sustainability:</strong> Reducing environmental footprint through sustainable manufacturing practices and eco-friendly products.
                </div>
                <div className="csr-point">
                  <strong>Community Development:</strong> Supporting educational initiatives, healthcare support, and infrastructure development.
                </div>
                <div className="csr-point">
                  <strong>Employee Welfare:</strong> Providing safe work environment, professional growth opportunities, and work-life balance programs.
                </div>
                <div className="csr-point">
                  <strong>Ethical Practices:</strong> Adhering to highest standards of transparency, integrity, and fairness in all operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Do & Our Products</h2>
            <p>
              We specialize in design, manufacture and supply of a wide range of 
              FRP/GRP/PP/PPH/PVDF/ECTFE/PVC/HDPE products for various industries.
            </p>
          </div>
          
          <div className="products-categories">
            <div className="category-section">
              <h3><FaIndustry /> Chemical Equipment</h3>
              <div className="product-grid">
                <div className="product-item">
                  <h4>Process Tanks</h4>
                  <p>Premium quality tanks customized for different structures and applications.</p>
                </div>
                <div className="product-item">
                  <h4>Structure Galvanizing Plant</h4>
                  <p>Complete galvanizing solutions with flawless design and robust setup.</p>
                </div>
                <div className="product-item">
                  <h4>Pickling Plants</h4>
                  <p>Surface treatment equipment for Hot-Dip Galvanization and electroplating processes.</p>
                </div>
                <div className="product-item">
                  <h4>Wire Galvanizing Plant</h4>
                  <p>High-end functional tanks for coil batch and inline wire pickling processes.</p>
                </div>
                <div className="product-item">
                  <h4>Electroplating Plant</h4>
                  <p>Metal surface finishing equipment with excellent chemical resistance.</p>
                </div>
                <div className="product-item">
                  <h4>Phosphating Plant</h4>
                  <p>Customized phosphating tanks for effective industrial results.</p>
                </div>
              </div>
            </div>
            
            <div className="category-section">
              <h3><FaIndustry /> Storage Solutions</h3>
              <div className="product-grid">
                <div className="product-item">
                  <h4>Acid Storage Tanks</h4>
                  <p>Fabricated from PP, HDPE, and FRP for excellent hydraulic features.</p>
                </div>
                <div className="product-item">
                  <h4>Vertical Storage Tanks</h4>
                  <p>Conical top/bottom and flat configurations for various applications.</p>
                </div>
                <div className="product-item">
                  <h4>Horizontal Tanks</h4>
                  <p>Customized range built per application and dimension requirements.</p>
                </div>
                <div className="product-item">
                  <h4>Square Storage Tanks</h4>
                  <p>Self-standing, leak-proof tanks ideal for aggressive solvents.</p>
                </div>
              </div>
            </div>
            
            <div className="category-section">
              <h3><FaLeaf /> Pollution Control Equipment</h3>
              <div className="product-grid">
                <div className="product-item">
                  <h4>Acid Fume Extraction System</h4>
                </div>
                <div className="product-item">
                  <h4>Wet Scrubbing System</h4>
                </div>
                <div className="product-item">
                  <h4>Dust Collector Filter System</h4>
                </div>
                <div className="product-item">
                  <h4>Renewable Solar Products</h4>
                  <p>Solar PV panels and systems for sustainable energy solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="history-section">
        <div className="container">
          <div className="section-header">
            <h2>Our History</h2>
            <p>
              Since our foundation in 1974 by Founder & Chairman Shri Virendra Singh, 
              we have grown into a leading global manufacturer and exporter.
            </p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1974</div>
              <div className="timeline-content">
                <h4>Foundation</h4>
                <p>Establishment of 1st Manufacturing Unit as Prashant Plastic Works in Malad East, Mumbai with team of 4 members.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">1980s</div>
              <div className="timeline-content">
                <h4>Expansion and Innovation</h4>
                <p>Expanded product range to include industrial process equipment such as blowers, chimneys, and tanks.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">1994</div>
              <div className="timeline-content">
                <h4>Second Manufacturing Unit</h4>
                <p>Expansion at Jawahar Industrial Park, Kalamboli, Maharashtra for Metallurgy and Pharma sectors.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h4>Rebranding to PPILLP</h4>
                <p>Rebranded to Prashant Plastic Industries LLP after 36 years. Achieved ISO 9001:2015 and ISO 14001:2015 certifications.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h4>Renewable Energy Entry</h4>
                <p>Entered renewable energy sector with Prashant Solar manufacturing photovoltaic modules from 2.5Wp to 400Wp.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>Seventh Manufacturing Unit</h4>
                <p>Latest expansion with specialized modern equipment for PP/PPH/PVDF/ECTFE/PVC/HDPE tanks and vessels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="manufacturing-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Manufacturing Process</h2>
            <p>State-of-the-art manufacturing process ensuring highest quality and efficiency.</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Customer-Centric Approach</h4>
              <p>Customers at the heart of everything we do with exceptional service and support.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Design and Engineering</h4>
              <p>Advanced CAD software to design products meeting specific requirements and industry standards.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Material Selection</h4>
              <p>Sourcing finest raw materials including high-grade resins and fibers for durability.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Quality Control</h4>
              <p>Rigorous testing including mechanical and chemical tests to meet stringent standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="certifications-section">
        <div className="container">
          <div className="section-header">
            <h2>Quality Certifications</h2>
            <p>Prestigious certifications attesting to our commitment to quality and excellence.</p>
          </div>
          
          <div className="certifications-grid">
            <div className="cert-card">
              <FaCertificate className="cert-icon" />
              <h4>ISO 9001:2015</h4>
              <p>International standards for quality management systems</p>
            </div>
            <div className="cert-card">
              <FaLeaf className="cert-icon" />
              <h4>ISO 14001:2015</h4>
              <p>Environmental management and sustainability commitment</p>
            </div>
            <div className="cert-card">
              <FaShieldAlt className="cert-icon" />
              <h4>OHSAS 18001</h4>
              <p>Occupational health and safety standards dedication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Success driven by dedicated professionals with wealth of knowledge and experience.</p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <h4>Virendra Singh</h4>
              <p className="position">Founder & Chairman</p>
              <p>40+ years of visionary leadership in the plastics industry.</p>
            </div>
            <div className="team-member">
              <h4>Rajendra Singh</h4>
              <p className="position">Founder & CEO</p>
              <p>30+ years of motivational leadership and industry growth.</p>
            </div>
            <div className="team-member">
              <h4>Prashant</h4>
              <p className="position">Chief Finance Officer</p>
              <p>Oversees day-to-day operations and finance management.</p>
            </div>
            <div className="team-member">
              <h4>Himanshu</h4>
              <p className="position">Director of Productions</p>
              <p>Leads engineering & production with innovative solutions.</p>
            </div>
            <div className="team-member">
              <h4>Rahul</h4>
              <p className="position">Manager Designs & QA</p>
              <p>Maintains rigorous quality control and design processes.</p>
            </div>
            <div className="team-member">
              <h4>Dhanashree</h4>
              <p className="position">Manager Sales & Admin</p>
              <p>Drives sales efforts and administration management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="industries-section">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
          </div>
          
          <div className="industries-grid">
            <div className="industry-item">Pharmaceuticals</div>
            <div className="industry-item">Fertilizers/Pesticides</div>
            <div className="industry-item">Bromine</div>
            <div className="industry-item">Dyes & Pigments</div>
            <div className="industry-item">Mineral Processing/Mining</div>
            <div className="industry-item">Construction</div>
            <div className="industry-item">Telecommunication</div>
            <div className="industry-item">Water Treatment</div>
            <div className="industry-item">Pulp & Paper</div>
            <div className="industry-item">Oil</div>
            <div className="industry-item">Paint</div>
            <div className="industry-item">Steel</div>
            <div className="industry-item">Chemical</div>
            <div className="industry-item">Alkali</div>
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section className="chairman-message-section">
        <div className="container">
          <div className="message-card">
            <div className="section-header">
              <h2>Message from Our Chairman</h2>
            </div>
            <div className="message-content">
              <p className="message-intro">
                "As we reflect on our journey since 1974, I am filled with immense pride and gratitude. 
                Our commitment to innovation, quality, and customer satisfaction has been the cornerstone of our success."
              </p>
              <p>
                Over the years, we have grown from a small manufacturing unit to a global player in the 
                FRP/GRP/PP/PPH/PVDF/ECTFE/PVC/HDPE/Plastics/Renewable Manufacturing industry, thanks to our 
                dedicated team, loyal customers, and trusted partners.
              </p>
              <p>
                Looking ahead, our vision is to become the world leader in manufacturing Fibre Glass Composite, 
                Sustainable & Renewable Solar Products. We are committed to sustainable practices that benefit 
                our customers, environment, and communities we serve.
              </p>
              <div className="signature">
                <strong>Shri Virendra Singh</strong><br />
                <span>Founder & Chairman, Prashant Plastic Industries LLP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Prashant Plastic Industries LLP?</h2>
          </div>
          
          <div className="reasons-grid">
            <div className="reason-card">
              <FaAward className="reason-icon" />
              <h4>Unmatched Quality</h4>
              <p>ISO 9001 certified with highest standards in manufacturing processes.</p>
            </div>
            <div className="reason-card">
              <FaIndustry className="reason-icon" />
              <h4>Innovative Solutions</h4>
              <p>Cutting-edge technology and sustainable practices for evolving needs.</p>
            </div>
            <div className="reason-card">
              <FaUsers className="reason-icon" />
              <h4>Exceptional Service</h4>
              <p>Customer-centric approach with dedicated after-sales support.</p>
            </div>
            <div className="reason-card">
              <FaGlobe className="reason-icon" />
              <h4>Global Reach</h4>
              <p>Strong presence across Asia and Middle East with export expertise.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
