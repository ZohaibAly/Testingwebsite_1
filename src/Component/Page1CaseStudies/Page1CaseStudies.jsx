import React from 'react';
import './Page1CaseStudies.css';

// Import images 
import page1image1 from '../../assets/page1image1.png';
import page1image2 from '../../assets/page1image2.png';
import page1image3 from '../../assets/page1image3.png';
import page1image4 from '../../assets/page1image4.png';
import Ellipse from '../../assets/Ellipse.png';
import MaskGroup from '../../assets/Mask-group.png';
import strategies from '../../assets/Strategies-image.png';
import results from '../../assets/Result-image.png';


const CaseStudiesPage1 = () => {
  return (

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
            <div className='page1casestudies-background-ellipse'>
                <img src={Ellipse} alt="" />
            </div>
            <h1 className="page1casestudies-main-title">Strategic Growth for Bariatric Multivitamins Brand Case Study</h1>
            
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">Brand Overview</h2>
                <p className="page1casestudies-subtitle">Supplements Multivitamins</p>
                
                <p className="page1casestudies-description">Before our intervention, the product faced multiple growth obstacles.</p>
                
                <p className="page1casestudies-challenges">
                  Challenges: Low sales, PPC inefficiencies, weak listings, declining Subscribe & Save (S&S) buyers, and lack of brand dominance.
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

        {/*Strategies & Solutions  */}
              <div className="challenges-section2 ">
              <div className="challenges-2">
              <div className='image-section-strategies'>
              <img src={strategies} alt="Logo" />        
                </div>
                <div className='challenge-content-2'>
                  <h3>Strategies & Solutions Implemented</h3>
                  <p>To drive sustainable growth, we executed a data-driven, multi-phase strategy:</p>
                  <ul>
                      <li><p><span><strong>S&S Reactivation</strong> – Launched coupons and tailored promotions to regain lost subscribers.</span></p></li>
                      <li><p><span><strong>Listing Overhaul</strong> – Implemented SEO-rich keywords, A/B-tested images, and optimized A+ Content for higher conversions.</span></p></li>
                      <li><p><span><strong>PPC Revamp</strong> – Shifted to single-keyword campaigns, precise product targeting, and strategic bidding to improve efficiency.</span></p></li>
                      <li><p><span><strong>Brand Awareness Boost</strong> – Optimized Amazon Storefront, defended branded keywords, and leveraged external marketing for visibility.</span></p></li>
                      <li><p><span><strong>Prime Exclusive Discounts (PED) Strategy</strong> – Used PED promotions during peak events, resulting in record-breaking sales.</span></p></li>
                  </ul>
                </div>
                
              </div>
             </div> 

        {/* Results and achievments */}
            <div className="challenges-section-3">
              <div className="challenges-3">
                <div className='challenge-content-3'>
                  <h3>Results & Achivements</h3>
                  <ul>
                      <li><p><span><strong>Sales Surge</strong>: Increased from 3,000 to 5,000+ units/month.</span></p></li>
                      <li><p><span><strong>Conversion Rate Boost</strong>: Improved from 12-15% to 35-38%.</span></p></li>
                      <li><p><span><strong>PPC Profitability</strong>: Reduced ACoS from 55-60% to 18-22%, maximizing return on ad spend.</span></p></li>
                      <li><p><span><strong>TOS Domination</strong>: Secured top-of-search placements for high-converting keywords.</span></p></li>
                      <li><p><span><strong>Enhanced Brand Presence</strong>: Increased organic engagement and visibility across Amazon.</span></p></li>
                      <li><p><span><strong>Historic Sales Record</strong>: Achieved highest-ever sales volume for the brand, fueled by Prime Exclusive Discounts (PEDs).</span></p></li>
                      <li><p><span><strong>Market Recognition</strong>: Secured Amazon’s Choice Badge and ranked Top 2 in its category.</span></p></li>
                  </ul>
                  <strong><p className='Future-p'>Future Growth Initiatives:</p></strong>
                  <ul>
                      <li><p><span><strong>Product Expansion</strong> – Introducing new variations and formulations to capture a wider audience.</span></p></li>
                      <li><p><span><strong>Scaling External Traffic</strong> – Leveraging social ads, influencers, and partnerships for diversified growth.</span></p></li>
                      <li><p><span><strong>Ongoing PPC & Listing Optimization</strong> – Continuous testing and refinement to maximize conversions.</span></p></li>
                      <li><p><span><strong>Brand Leadership</strong> – Maintaining a competitive edge through innovation and customer engagement.</span></p></li>
                  </ul>
                  <strong><p className='bottom-p'>Through strategic execution and continuous optimization, ProCare Health’s Bariatric Multivitamin 45mg 90ct has solidified its position as a market leader on Amazon.</p></strong>

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