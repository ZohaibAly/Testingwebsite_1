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
          <h1 className="hero-title">Premium <span>Amazon</span> Propelling Solutions</h1>
          <h2 className="hero-subtitle">Struggling with Visibility? We'll Fix It!</h2>
          <p className="hero-description">
            Great Products, Low Sales? You bring the inventory, we bring the
            <br />
               Expertise - Complimentary Analysis to begin
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
