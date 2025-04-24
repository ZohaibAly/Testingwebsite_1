import React from 'react';
import './Page5CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import Ellipse from '../../../assets/Ellipse.png';
import MaskGroup from '../../../assets/Mask-group.png';
import strategies from '../../../assets/Strategies-image.png';
import Page5Result from '../../../assets/page5ResultImage.png';


const CaseStudiesPage1 = () => {
return(

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
            <div className='page1casestudies-background-ellipse'>
                <img src={Ellipse} alt="" />
            </div>
            <h1 className="page1casestudies-main-title">Strategic Growth for Supplements Brand Case Study </h1>
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">Brand Overview</h2>
                <p className="page1casestudies-subtitle">Supplements</p>
                
                <p className="page1casestudies-description"> When we took over the brand, it was facing multiple issues, including high ACOS, low CVR%, and improper inventory management. The brand was struggling to surpass the $1M revenue milestone.
                </p>
                
                <p className="page1casestudies-challenges">
                Services: Listings SEO, Creatives, Amazon PPC & CTR/CVR% Optimization
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
                  <p><span> <strong>Revenue Stagnation:</strong> Stuck at $1M annually, with no structured growth plan. </span></p>
                  <p><span> <strong>Stockouts & Inventory Gaps:</strong> Poor inventory planning led to frequent out of stock issues.</span></p>
                  <p><span> <strong>Weak Listings & Low Conversions:</strong> Unoptimized content & images failed to attract buyers.</span></p>
                  <p><span> <strong>High ACOS, Low PPC ROI:</strong> Ad spend was inefficient, with poor keyword targeting.</span></p>
                  <p><span> <strong>Low Ratings & Customer Trust:</strong> Quality concerns negatively impacted reviews and sales.</span></p>
                  <p><span> <strong>No Brand Awareness:</strong> No structured efforts for visibility on or off Amazon.</span></p>
                </div>
                <div className='image-section'>
                  <div className='image-section-left'>
                    <div className='image-section-left-1'>
                    <img src={page1image1} alt="Logo" />
                    <h2>Weak Listings & Low Conversions</h2>
                    </div>
                    <div className='image-section-left-2'>
                    <img src={page1image3} alt="Logo" />
                      <h2> Low Ratings & Customer Trust</h2>
                    </div>
                  </div>
                  <div className='image-section-right'>            
                  <div className='image-section-right-1'>
                  <img src={page1image2} alt="Logo" />
                  <h2>High ACOS, Low PPC ROI</h2>
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
                  <p>We began with an in-depth brand analysis, identifying key issues and assessing product potential. We forecasted growth opportunities based on competitor click ratios and market trends. Our first priority was inventory allocation to ensure consistent stock levels, especially since the product was seasonal.
                  </p>
                  <div>
    <strong><p>Phase 1: Inventory Management Optimization</p></strong>
    <ul>
        <li><p><span>Developed a Quarter-over-Quarter Inventory Management Plan to eliminate stockouts. </span></p></li>
        <li><p><span>Built a streamlined Inventory Pipeline with accurate forecasting. </span></p></li>
        <li><p><span>Ensured sufficient stock availability to support projected sales growth. </span></p></li>
    </ul>
    
    <strong><p>Phase 2: Listing Optimization & Conversion Rate Improvements</p></strong>
    <ul>
        <li><p><span>Conducted extensive SEO optimization for listings, targeting high-converting keywords. </span></p></li>
        <li><p><span>Focused on CTR improvement by creating high-quality images and running A/B tests using third-party tools. </span></p></li>
        <li><p><span>Enhanced stock images, considering customer psychology and product use cases. </span></p></li>
        <li><p><span>Identified the target audience's behavior and usage scenarios to highlight in listing content. </span></p></li>
        <li><p><span>Incorporated insights from market reviews and frequently discussed customer concerns. </span></p></li>
        <li><p><span>Optimized both content and backend search terms, including Spanish search terms for broader reach. </span></p></li>
    </ul>
    
    <strong><p>Phase 3: PPC Optimization & Advertising Strategy </p></strong>
    <ul>
        <li><p><span>After achieving a strong CTR and CVR%, we implemented a detailed PPC strategy. </span></p></li>
        <li><p><span>Focused on improving ad efficiency and lowering ACOS while maximizing profitability. </span></p></li>
        <li><p><span>Applied continuous monitoring and adjustments to ensure optimal performance. </span></p></li>
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
                  <p>Following a complete brand revamp, we achieved remarkable improvements:</p>
                  <ul>
                      <li><p><span>Annual profitability increased from $20,000 to $90,000 USD. </span></p></li>
                      <li><p><span>ACOS improved from 35% to 19%, significantly increasing advertising efficiency. </span></p></li>
                      <li><p><span>Significant improvements in CVR%, CTR, and overall brand visibility. </span></p></li>
                      <li><p><span>Enhanced customer engagement and trust through optimized listings and reviews.
                      </span></p></li>
                  </ul> 
                  <strong><p className='bottom-p'> 
                  This transformation showcases the power of strategic inventory planning, content optimization, and targeted advertising in scaling an Amazon brand successfully.</p></strong>

                </div>
                <div className='image-section-results'>
              <img src={Page5Result} alt="Logo" />        
                </div>
              </div>
            </div>
    
</div>
  );
};

export default CaseStudiesPage1;