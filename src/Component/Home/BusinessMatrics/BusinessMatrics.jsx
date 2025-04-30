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
              By The <span className="businessMatrics-spanclass">Numbers</span>
            </p>
            <p className="businessMatrics-section-subtitle">
              We Don't Just Manage Amazon—We Master It for You.
            </p>
            <div className="businessMatrics-setting">
              <Link to="/contact" className="businessMatrics-about-button">
                About CommerceKind
                <span className="businessMatrics-icon">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
          </div>

          <div className="businessMatrics-primary-metric-card">
            <p className="businessMatrics-primary-child">$100M+</p>
            <p className="businessMatrics-primary-child2">
              Revenue Generated Annually
            </p>
          </div>
        </div>

        <div className="businessMatrics-metrics-grid">
          <div className="businessMatrics-metric-card businessMatrics-gradient-purple">
            <p className="businessMatrics-metric-value">40+</p>
            <p className="businessMatrics-matric-brand">Brands</p>
          </div>

          <div className="businessMatrics-metric-card businessMatrics-dark-blue">
            <p className="businessMatrics-metric-value">99%</p>
            <p className="businessMatrics-matric-brand">Retention Rate</p>
          </div>

          <div className="businessMatrics-metric-card businessMatrics-self-customize">
            <p className="businessMatrics-metric-value">50+</p>
            <p className="businessMatrics-matric-brand">Employees</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessMatrics;
