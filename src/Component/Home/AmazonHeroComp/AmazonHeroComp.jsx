import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./AmazonHeroComp.css";
import HeroImage from "../../../assets/testimg.png";
import purpleGlow from "../../../assets/Home-Hero-Glow-Purple.png";
import GreenGlow from "../../../assets/Home-Hero-Glow-Green.png";

const AmazonHeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-parent">
        <div className="hero-content">
          <h1 className="hero-title">Premium <span>Amazon</span> Accelerating Solutions</h1>
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
          <div className="pic1">
            <img
              src={purpleGlow}
              alt="Before and After Amazon Dashboard Comparison"
            />
          </div>
        
          <img
            src={HeroImage}
            alt="Before and After Amazon Dashboard Comparison"
          />
          <div className="pic2">
            <img
              src={GreenGlow}
              alt="Before and After Amazon Dashboard Comparison"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonHeroComponent;
