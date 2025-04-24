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
import Page3results from '../../../assets/page3BeforeAfterImage.png';


const CaseStudiesPage1 = () => {
  return (

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
            <div className='page1casestudies-background-ellipse'>
                <img src={Ellipse} alt="" />
            </div>
            <h1 className="page1casestudies-main-title">Strategic Growth for Baby Products & Supplements Brand Case Study</h1>
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">Brand Overview</h2>
                <p className="page1casestudies-subtitle">Baby Products & Supplements</p>
                
                <p className="page1casestudies-description">When we took over, the product faced several hurdles that restricted its growth potential.</p>
                
                <p className="page1casestudies-challenges">
                Challenges: Low sales, limited brand awareness, high ACoS, and underutilized PPC potential.
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
                  <p><span> <strong>Revenue Stagnation</strong> – Sales were stuck at $33,765.84, lacking a structured growth plan.                  </span></p>
                  <p><span> <strong>Stockouts & Inventory Gaps </strong> – No major stock issues, but efficiency improvements were needed.</span></p>
                  <p><span> <strong>Weak Listings & Low Conversions</strong> – Unoptimized SEO, images, and A+ Content resulted in a 10% conversion rate.</span></p>
                  <p><span> <strong>High ACoS, Low PPC ROI</strong> – Advertising inefficiencies led to an ACoS of 30%. </span></p>
                  <p><span> <strong>No Brand Awareness</strong> – Lack of organic traffic and visibility on Amazon. </span></p>
                </div>
                <div className='image-section'>
                  <div className='image-section-left'>
                    <div className='image-section-left-1'>
                    <img src={page1image1} alt="Logo" />
                    <h2>Stockouts & Inventory Gaps</h2>
                    </div>
                    <div className='image-section-left-2'>
                    <img src={page1image3} alt="Logo" />
                      <h2>High ACoS, Low PPC ROI</h2>
                    </div>
                  </div>
                  <div className='image-section-right'>            
                  <div className='image-section-right-1'>
                  <img src={page1image2} alt="Logo" />
                  <h2>Weak Listings & Low Conversions </h2>
                  </div>
                    <div className='image-section-right-2'>
                    <img src={page1image4} alt="Logo" />
                    <h2>No Brand Awareness</h2>
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
                  <p>To address these challenges, we implemented a multi-phase strategy to optimize listings, refine PPC campaigns, and boost brand awareness: </p>
                  <div>
    <strong><p>Phase 1: Inventory Stability</p></strong>
    <ul>
        <li><p><span>Improved forecasting and planning to ensure stock availability without overstocking. </span></p></li>
        <li><p><span> Optimized storage and fulfillment strategies to reduce unnecessary costs. </span></p></li>
    </ul>
    
    <strong><p>Phase 2: Listing Optimization</p></strong>
    <ul>
        <li><p><span>Enhanced SEO, images, and A+ Content to attract and convert buyers. </span></p></li>
        <li><p><span> Focused on keyword-rich titles and descriptions to improve organic ranking. </span></p></li>
    </ul>
    
    <strong><p>Phase 3: PPC Revamp</p></strong>
    <ul>
        <li><p><span>Structured campaigns with refined keyword targeting and audience segmentation. </span></p></li>
        <li><p><span>Optimized bids to increase CTR to 10% and reduce wasted ad spend. </span></p></li>
        <li><p><span>Controlled ACoS while doubling PPC sales with the same budget. </span></p></li>
    </ul>
    
    <strong><p>Phase 4: Sales Growth & Brand Awareness</p></strong>
    <ul>
        <li><p><span>Prioritized visibility through PPC campaigns instead of relying on price drops or excessive promotions. </span></p></li>
        <li><p><span>Revamped the Amazon Storefront to enhance the shopping experience and capture more branded searches. </span></p></li>
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
                  <p>Our strategic efforts delivered exceptional outcomes:</p>
                  <ul>
                      <li><p><span>Revenue Growth –Sales increased from $33,765.84 to $65,285.55.</span></p></li>
                      <li><p><span>Inventory Optimization  –  Achieved improved efficiency and cost savings.</span></p></li>
                      <li><p><span>PPC Efficiency  – ACoS reduced from 30% to 12%, while PPC sales doubled with the same spend.</span></p></li>
                      <li><p><span> Conversion Boost – CVR improved from 10% to 28%, driving more sales.</span></p></li>
                      <li><p><span>Ratings & Reviews –  Minimal change, but gained additional reviews that contributed to credibility. </span></p></li>  
                      <li><p><span>Brand Awareness –  Increased organic traffic and branded searches, strengthening long-term growth. </span></p></li>  
                  </ul> 
                  <strong><p className='bottom-p'> 
                  Through targeted optimization and strategic PPC improvements, we transformed Wellements' Vitamin D Drops into a high-performing product with sustainable growth on Amazon. </p></strong>

                </div>
                <div className='image-section-results'>
              <img src={Page3results} alt="Logo" />        
                </div>
              </div>
            </div>
    
</div>
  );
};

export default CaseStudiesPage1;