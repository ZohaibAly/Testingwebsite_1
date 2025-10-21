import React from 'react';
import './Page1CaseStudies.css';

// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import MaskGroup from '../../../assets/Mask-image.png';
import strategies from '../../../assets/Strategies.png';
import results from '../../../assets/Results.png';


const CaseStudiesPage1 = () => {
  return (

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
        
            <h1 className="page1casestudies-main-title">Bariatric Multivitamins Brand: A Strategic Growth Case Study</h1>
            
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">About the Brand</h2>
                <p className="page1casestudies-subtitle">Supplements Multivitamins</p>
                
                <p className="page1casestudies-description">Prior to our engagement, the product encountered several barriers to expansion.</p>
                
                <p className="page1casestudies-challenges">
                   Obstacles: Underperforming revenue, ineffective paid advertising, suboptimal product pages, shrinking subscription customer base, and insufficient market positioning.
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
                    <h3>Obstacles Prior to Engagement</h3>
                  <p><span> <strong>Sales Stagnation</strong> – Sales were stuck at 3,000 units/month with no structured growth plan.</span></p>
                  <p><span> <strong>Buyer Drop-Off</strong> – Inactive subscriptions due to previous inventory gaps, leading to declining recurring revenue.</span></p>
                  <p><span> <strong>Low Conversions</strong> – Unoptimized content, visuals, and keyword strategy hindered conversion rates.</span></p>
                  <p><span> <strong>Wasted Budget</strong> – Broad targeting and inefficient spending led to a high ACoS without strong returns.</span></p>
                  <p><span> <strong>Weak Presence</strong> – Competitors dominated key placements, reducing visibility.</span></p>
                </div>
                <div className='image-section'>
                  <div className='image-section-left'>
                    <div className='image-section-left-1'>
                    <img src={page1image1} alt="Logo" />
                    <h2>Buyer Drop-Off</h2>
                    </div>
                    <div className='image-section-left-2'>
                    <img src={page1image3} alt="Logo" />
                      <h2>Wasted  Budget</h2>
                    </div>
                  </div>
                  <div className='image-section-right'>            
                  <div className='image-section-right-1'>
                  <img src={page1image2} alt="Logo" />
                  <h2>Low Conversions</h2>
                  </div>
                    <div className='image-section-right-2'>
                    <img src={page1image4} alt="Logo" />
                    <h2>Weak Presence</h2>
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
                  <h3>Solutions & Tactics We Deployed</h3>
                  <p>To achieve lasting expansion, we implemented a performance-focused, phased approach:</p>
                  <ul>
                      <li><p><span><strong>Subscription Recovery</strong> – Introduced discount codes and customized offers to recapture inactive subscribers.</span></p></li>
                      <li><p><span><strong>Product Page Enhancement</strong> – Applied keyword-optimized copy, tested image variations, and refined Enhanced Brand Content for improved conversions.</span></p></li>
                      <li><p><span><strong>Advertising Optimization</strong> – Transitioned to focused keyword campaigns, accurate product matching, and tactical bid management to boost performance.</span></p></li>
                      <li><p><span><strong>Visibility Enhancement</strong> – Refined Brand Store layout, protected brand search terms, and utilized off-platform promotion for greater reach.</span></p></li>
                      <li><p><span><strong>Prime Member Discount Approach</strong> – Deployed member-exclusive deals during high-traffic periods, delivering unprecedented revenue spikes.</span></p></li>
                  </ul>
                </div>
                
              </div>
             </div> 

        {/* Results and achievments */}
            <div className="challenges-section-3">
              <div className="challenges-3">
          <div className='challenge-content-3'>
                  <h3>Outcomes & Milestones</h3>
                  <ul>
                      <li><p><span><strong>Revenue Growth</strong>: Scaled from 3,000 to 5,000+ units monthly.</span></p></li>
                      <li><p><span><strong>Conversion Enhancement</strong>: Elevated from 12-15% to 35-38%.</span></p></li>
                      <li><p><span><strong>Ad Efficiency</strong>: Decreased ACoS from 55-60% to 18-22%, optimizing advertising returns.</span></p></li>
                      <li><p><span><strong>Search Positioning</strong>: Captured premium search spots for priority keywords.</span></p></li>
                      <li><p><span><strong>Amplified Market Visibility</strong>: Boosted natural traffic and platform recognition.</span></p></li>
                      <li><p><span><strong>Peak Performance Record</strong>: Reached unprecedented sales figures for the brand, driven by Prime Member Discounts.</span></p></li>
                      <li><p><span><strong>Platform Recognition</strong>: Earned Amazon's Choice designation and achieved Top 2 category ranking.</span></p></li>
                  </ul>
                  <strong><p className='Future-p'>Upcoming Expansion Plans:</p></strong>
                  <ul>
                      <li><p><span><strong>Portfolio Development</strong> – Rolling out additional variants and formulas to reach broader markets.</span></p></li>
                      <li><p><span><strong>Off-Platform Traffic Growth</strong> – Utilizing paid social, creator partnerships, and collaborations for diversified expansion.</span></p></li>
                      <li><p><span><strong>Continuous Campaign & Content Refinement</strong> – Persistent experimentation and enhancement to drive higher conversions.</span></p></li>
                      <li><p><span><strong>Category Dominance</strong> – Sustaining competitive advantage through innovation and customer connection.</span></p></li>
                  </ul>
                  <strong><p className='bottom-p'>Via methodical implementation and persistent refinement, ProCare Health's Bariatric Multivitamin 45mg 90ct has established its standing as a category frontrunner on Amazon.</p></strong>

                </div>
                <div className='image-section-results'>
              <img src={results} alt="Logo" />        
                </div>
              </div>
            </div>
    
</div>
  );
};

export default CaseStudiesPage1;