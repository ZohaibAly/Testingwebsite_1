
import React from 'react';
import './AmazonHeroComp.css';
import HeroImage from '../../../assets/Home-Hero-Graphic-CommerceKind.png';

const AmazonHeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-parent">
        <div className="hero-content">
          <h1 className="hero-title">Smart Amazon Management Services</h1>
          <h2 className="hero-subtitle">Low Ranking? We've Got Solutions!</h2>
          <p className="hero-description">
            Low Sales, High Potential? If you have the product, we have the
            <br />
            Strategy - Free Audit to get started
          </p>
          <div className="hero-buttons">
            <button className="hero-button">Free Store Audit</button>
            <a href="#" className="hero-link">
              Grow Your Amazon Sales <span className="arrow-icon">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Before and After Amazon Dashboard Comparison" />
        </div>
      </div>
    </div>
  );
};

export default AmazonHeroComponent;