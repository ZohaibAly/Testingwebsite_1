import React from "react";
import { Link } from "react-router-dom";
import "./BusinessMatrics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const BusinessMatrics = () => {
  return (
    <section className="businessMatrics-company-metrics">
      <div className="businessMatrics-container">
        <div className="businessMatrics-metrics-header">
          <div className="businessMatrics-title-container">
            <p className="businessMatrics-section-title">
            In The <span className="businessMatrics-spanclass">Data</span>
            </p>
            <p className="businessMatrics-section-subtitle">
               We Don't Just Handle Marketplace—We Excel At It For You.
            </p>
            <div className="businessMatrics-setting">
              <Link to="/contact-us" className="businessMatrics-about-button">
                Know JPT AmazonSolutions
                <span className="businessMatrics-icon">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
          </div>

          <div className="businessMatrics-primary-metric-card">
            <p className="businessMatrics-primary-child">$150M+</p>
            <p className="businessMatrics-primary-child2">
             Sales Achieved Yearly
            </p>
          </div>
        </div>

        <div className="businessMatrics-metrics-grid">
          <div className="businessMatrics-metric-card businessMatrics-gradient-purple">
            <p className="businessMatrics-metric-value">60+</p>
            <p className="businessMatrics-matric-brand">Clients</p>
          </div>

          <div className="businessMatrics-metric-card businessMatrics-dark-blue">
            <p className="businessMatrics-metric-value">97%</p>
            <p className="businessMatrics-matric-brand">Client Loyalty</p>
          </div>

          <div className="businessMatrics-metric-card businessMatrics-self-customize">
            <p className="businessMatrics-metric-value">75+</p>
            <p className="businessMatrics-matric-brand">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessMatrics;
