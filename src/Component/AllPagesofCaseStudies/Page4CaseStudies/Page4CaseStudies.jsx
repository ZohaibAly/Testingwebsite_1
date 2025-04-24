import React from 'react';
import '../Page1CaseStudies/Page1CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import Ellipse from '../../../assets/Ellipse.png';
import MaskGroup from '../../../assets/Mask-group.png';
import strategies from '../../../assets/Strategies-image.png';
import page4Result from '../../../assets/page4ResultImage.png';


const CaseStudiesPage1 = () => {
return(

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
            <div className='page1casestudies-background-ellipse'>
                <img src={Ellipse} alt="" />
            </div>
            <h1 className="page1casestudies-main-title">Strategic Growth and Hijacker Removal for Baby Products & Supplements Brand Case Study</h1>
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">Brand Overview</h2>
                <p className="page1casestudies-subtitle">Baby Products & Supplements</p>
                
                <p className="page1casestudies-description">When we took over the brand's protection strategy, it was facing critical threats that were severely impacting sales and customer trust.
                </p>
                
                <p className="page1casestudies-challenges">
                Services: Brand Protection, Amazon Transparency Program, Amazon Zero Program Implementation
                </p>
              </div>
              
              <div className="page1casestudies-right-content">
                <img src={MaskGroup} alt="Multivitamin candies" className="page1casestudies-candy-image" />
              </div>
            </div>
          </div>

        
        </div>

        {/* challenge compoent */}
             <div className="challenges-section">
              <div className="challenges-1">
                <div className='challenge-content'>
                  <h3>Challenges Before Our Takeover</h3>
                  <p><span> <strong>Widespread Hijackers</strong> – Unauthorized sellers flooding the market with counterfeit and grey-market products.</span></p>
                  <p><span> <strong>Revenue Drain</strong> – Hijackers winning the Buy Box, undercutting pricing, and stealing sales.</span></p>
                  <p><span> <strong>Customer Complaints & Brand Damage</strong> – Buyers receiving low-quality or expired products, leading to negative reviews and declining trust.</span></p>
                  <p><span> <strong>Ineffective Initial Takedown Efforts</strong> – Basic warnings and violation reports failed due to the high number of hijackers.</span></p>
                </div>
                <div className='image-section'>
                  <div className='image-section-left'>
                    <div className='image-section-left-1'>
                    <img src={page1image1} alt="Logo" />
                    <h2>Widespread Hijackers</h2>
                    </div>
                    <div className='image-section-left-2'>
                    <img src={page1image3} alt="Logo" />
                      <h2>Customer Complaints & Brand Damage</h2>
                    </div>
                  </div>
                  <div className='image-section-right'>            
                  <div className='image-section-right-1'>
                  <img src={page1image2} alt="Logo" />
                  <h2>Revenue Drain</h2>
                  </div>
                    <div className='image-section-right-2'>
                    <img src={page1image4} alt="Logo" />
                    <h2>Ineffective Initial Takedown Efforts</h2>
                    </div>
                  </div>
                </div>
              </div>
             </div>

        {/*Strategies & Solutions  */}
              <div className="challenges-section2 ">
              <div className="challenges-2">
              <div className='image-section-strategies'>
              <img src={strategies} alt="Logo" />        
                </div>
                <div className='challenge-content-2'>
                  <h3>Strategies & Solutions Implemented</h3>
                  <p>We launched an aggressive, multi-phase strategy that combined legal enforcement, compliance programs, and automation to regain brand control.
                  </p>
                  <div>
    <strong><p>Phase 1: Direct Takedown & Enforcement</p></strong>
    <ul>
        <li><p><span>Issued cease-and-desist warnings to unauthorized sellers, demanding immediate removal.</span></p></li>
        <li><p><span>Filed intellectual property and policy violation reports with Amazon against persistent hijackers.</span></p></li>
    </ul>
    
    <strong><p>Phase 2: Amazon Transparency Program Enrollment</p></strong>
    <ul>
        <li><p><span>Registered all Wellements products under Amazon's Transparency Program to prevent unauthorized listings.</span></p></li>
        <li><p><span>Ensured only verified, serialized units could be sold, blocking counterfeit sales at the source.</span></p></li>
    </ul>
    
    <strong><p>Phase 3: Amazon Zero Program Activation</p></strong>
    <ul>
        <li><p><span>Enrolled in the Amazon Zero Program to leverage automated counterfeit detection.</span></p></li>
        <li><p><span>Enabled AI-driven removal of unauthorized listings, wiping out hijackers in real time.</span></p></li>
    </ul>
    
    <strong><p>Execution & Optimization</p></strong>
    <ul>
        <li><p><span>Successfully onboarded all products into the Transparency and Zero Programs.</span></p></li>
        <li><p><span>Implemented ongoing monitoring to lock down future threats and ensure long-term protection.</span></p></li>
    </ul>
</div>
                </div>
                
              </div>
             </div> 

        {/* Results and achievments */}
            <div className="challenges-section-3">
              <div className="challenges-3">
                <div className='challenge-content-3'>
                  <h3>Results & Achivements</h3>
                  <p>Following a complete brand protection overhaul, we achieved significant improvements:</p>
                  <ul>
                      <li><p><span>100% Hijacker-Free Listings – Every unauthorized seller was eliminated, restoring brand control.</span></p></li>
                      <li><p><span>3X Revenue Growth – With pricing control and Buy Box dominance, revenue skyrocketed.</span></p></li>
                      <li><p><span>Stronger Brand Reputation – Customers now receive only authentic products, leading to higher ratings and repeat purchases.</span></p></li>
                      <li><p><span>Long-Term Market Protection – Transparency and Zero Program enrollment ensure hijacker prevention for the future.
                      </span></p></li>
                  </ul> 
                  <strong><p className='bottom-p'> 
                  This transformation highlights the power of strategic brand protection, compliance enforcement, and automation in securing an Amazon brand's success.</p></strong>

                </div>
                <div className='image-section-results'>
              <img src={page4Result} alt="Logo" />        
                </div>
              </div>
            </div>
    
</div>
  );
};

export default CaseStudiesPage1;