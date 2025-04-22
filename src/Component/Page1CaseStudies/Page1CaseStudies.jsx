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

    <div className='CaseStudiesPage1-comp'>

    <div className="Page1-top-brand">
  

      <div className="brand-overview-section">
        <div className='background-ellipse'>
            <img src={Ellipse} alt="" />
        </div>
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
{/* challenge compoent */}

<div className="challenges-section">
      <div className="challenges-1">
        <div className='challenge-content'>
          <h3>Challenges Before Our Takeover</h3>
          <p><span> <strong>Sales Stagnation</strong> – Sales were stuck at 3,000 units/month with no structured growth plan.</span></p>
          <p><span> <strong>S&S Buyer Drop-Off</strong> – Inactive subscriptions due to previous inventory gaps, leading to declining recurring revenue.</span></p>
          <p><span> <strong>Low Conversions</strong> – Unoptimized content, visuals, and keyword strategy hindered conversion rates.</span></p>
          <p><span> <strong>PPC Wastage</strong> – Broad targeting and inefficient spending led to a high ACoS without strong returns.</span></p>
          <p><span> <strong>Weak Brand Presence</strong> – Competitors dominated key placements, reducing visibility.</span></p>
        </div>
        <div className='image-section'>
          <div className='image-section-left'>
            <div className='image-section-left-1'>
            <img src={page1image1} alt="Logo" />
            <h2>S&S Buyer Drop-Off</h2>
            </div>
            <div className='image-section-left-2'>
            <img src={page1image3} alt="Logo" />
              <h2>PPC Wastage</h2>
            </div>
          </div>
          <div className='image-section-right'>            
          <div className='image-section-right-1'>
          <img src={page1image2} alt="Logo" />
          <h2>Sales Stagnation and Low Conversions</h2>
          </div>
            <div className='image-section-right-2'>
            <img src={page1image4} alt="Logo" />
            <h2>Weak Brand Presence</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </div>



  );
};

export default CaseStudiesPage1;