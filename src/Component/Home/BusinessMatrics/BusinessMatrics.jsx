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
            <p className="section-title">By The <span className='spanclass'>Numbers</span></p>
            <p className="section-subtitle">We Don't Just Manage Amazon—We Master It for You.</p>
            <div className='setting'>
            <a href="#" className="about-button">
              About CommerceKind
              <span className="icon">
              <FontAwesomeIcon icon={faArrowRight}/>
              </span>
            </a>
          </div>
            </div>
          
          
          <div className="primary-metric-card">
            <p className='primary-child'>$100M+</p>
            <p className='primary-child2'>Revenue Generated Annually</p>
          </div>
        </div>
        
        <div className="metrics-grid">
          <div className="metric-card gradient-purple">
            <p className='metric-value'>40+</p>
            <p className='matric-brand'>Brands</p>
          </div>
          
          <div className="metric-card dark-blue">
            <p className='metric-value'>99%</p>
            <p className='matric-brand'>Retention Rate</p>
          </div>
          
          <div className="metric-card self-customize">
            <p className='metric-value'>50+</p>
            <p className='matric-brand'>Employees</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMetrics;