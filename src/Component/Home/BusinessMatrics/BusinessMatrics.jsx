import React from 'react';
import './BusinessMatrics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const CompanyMetrics = () => {
  return (
    <section className="company-metrics">
      <div className="container">
        <div className="metrics-header">
          <div className="title-container">
            <h2 className="section-title">By The<span>Numbers</span></h2>
            <p className="section-subtitle">We Don't Just Manage Amazon—We Master It for You.</p>
            
            <a href="#" className="about-button">
              About CommerceKind
              <span className="icon">
              <FontAwesomeIcon icon={faArrowRight}/>
              </span>
            </a>
          </div>
          
          <div className="primary-metric-card">
            <h3 className="metric-value">$100M+</h3>
            <p className="metric-label">Revenue Generated Annually</p>
          </div>
        </div>
        
        <div className="metrics-grid">
          <div className="metric-card gradient-purple">
            <h3 className="metric-value">40+</h3>
            <p className="metric-label">Brands</p>
          </div>
          
          <div className="metric-card dark-blue">
            <h3 className="metric-value">99%</h3>
            <p className="metric-label">Retention Rate</p>
          </div>
          
          <div className="metric-card self-customize">
            <h3 className="metric-value">50+</h3>
            <p className="metric-label">Employees</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMetrics;