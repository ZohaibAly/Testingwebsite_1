import React from 'react';
import './Page1CaseStudies.css';

// Import images 
import beforeandafter from '../../assets/beforeandafter.png';
import Frame from '../../assets/Frame.png';
import page1image1 from '../../assets/page1image1.png';
import page1image2 from '../../assets/page1image2.png';
import page1image3 from '../../assets/page1image3.png';
import page1image4 from '../../assets/page1image4.png';
import Ellipse from '../../assets/Ellipse.png';
import MaskGroup from '../../assets/Mask-group.png';

const CaseStudiesPage1 = () => {
  return (
    <div className="case-study-container">
      {/* Background ellipse */}
      <div className="ellipse-container">
        <img src={Ellipse} alt="Background glow" className="background-ellipse" />
      </div>

      {/* Section 1: Brand Overview */}
      <div className="brand-overview-section">
        <h1 className="main-title">Strategic Growth for Bariatric Multivitamins Brand Case Study</h1>
        
        <div className="overview-content">
          <div className="left-content">
            <h2 className="section-title">Brand Overview</h2>
            <p className="subtitle">Supplements Multivitamins</p>
            
            <p className="description">Before our intervention, the product faced multiple growth obstacles.</p>
            
            <p className="challenges">
              Challenges: Low sales, PPC inefficiencies, weak listings, declining Subscribe & Save (S&S) buyers, and lack of brand dominance.
            </p>
          </div>
          
          <div className="right-content">
            <img src={MaskGroup} alt="Multivitamin candies" className="candy-image" />
          </div>
        </div>
      </div>

     
    </div>
    



  );
};

export default CaseStudiesPage1;