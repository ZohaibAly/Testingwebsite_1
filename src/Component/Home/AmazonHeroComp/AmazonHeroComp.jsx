import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./AmazonHeroComp.css";
import HeroImage from "../../../assets/testimg.png";

const AmazonHeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-parent">
        <div className="hero-content">
          <h1 className="hero-title">Smart <span>Solutions</span> for Smarter Selling</h1>
          <h2 className="hero-subtitle">Low Sales, High Potential? You’ve Got the Product, We’ve Got the Strategy.</h2>
          <p className="hero-description">
            iEmpowering Thousands of Amazon Sellers & Premium Brands
            <br />
               Trusted by 100+ Growing Brands and FBA Sellers on Amazon
          </p>
          <div className="hero-buttons">
            <Link to="/contact-us">
              <button className="hero-button">Claim Free Analysis</button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
     
        
          <img
            src={HeroImage}
            alt="Before and After Amazon Dashboard Comparison"
          />
      
        </div>
      </div>
    </div>
  );
};

export default AmazonHeroComponent;
