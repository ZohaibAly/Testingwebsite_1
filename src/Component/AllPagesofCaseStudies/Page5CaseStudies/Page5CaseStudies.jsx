import React from 'react';
import './Page5CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import MaskGroup from '../../../assets/Mask-image.png';
import strategies from '../../../assets/Strategies.png';
import Page5Result from '../../../assets/ResultPage5.png';


const CaseStudiesPage1 = () => {
return(

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
       
            <h1 className="page1casestudies-main-title">Supplements Brand: A Strategic Expansion Case Study</h1>
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">About the Brand</h2>
                <p className="page1casestudies-subtitle">Nutritional Supplements</p>
                
                <p className="page1casestudies-description">Upon assuming management of the brand, it encountered numerous obstacles, including elevated advertising costs, poor conversion performance, and inadequate stock planning. The brand couldn't break through the $1M revenue threshold.
                </p>
                
                <p className="page1casestudies-challenges">
                Services: Product Page Search Optimization, Visual Content, Amazon Advertising & Click-Through/Conversion Enhancement
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
                  <h3>Obstacles Prior to Our Engagement</h3>
                  <p><span> <strong>Revenue Stagnation:</strong> Plateaued at $1M yearly, lacking an organized expansion blueprint.</span></p>
                  <p><span> <strong>Stockouts & Inventory Gaps:</strong> Inadequate supply forecasting resulted in recurring unavailability problems.</span></p>
                  <p><span> <strong>Weak Listings & Low Conversions:</strong> Suboptimal material & imagery failed to engage purchasers.</span></p>
                  <p><span> <strong>High ACOS, Low PPC ROI:</strong> Campaign expenditure proved wasteful, with subpar keyword selection.</span></p>
                  <p><span> <strong>Low Ratings & Customer Trust:</strong> Product quality issues adversely affected testimonials and revenue.</span></p>
                  <p><span> <strong>No Brand Awareness:</strong> No systematic initiatives for recognition within or beyond Amazon.</span></p>
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
                  <h3>Solutions & Tactics We Deployed</h3>
                  <p>We initiated with a comprehensive brand assessment, pinpointing critical obstacles and evaluating merchandise viability. We projected expansion prospects based on rival engagement metrics and marketplace dynamics. Our primary focus was supply allocation to maintain steady stock availability, particularly given the product's seasonal nature.
                  </p>
                  <div>
    <strong><p>Phase 1: Supply Chain Management Enhancement</p></strong>
    <ul>
        <li><p><span>Established a Quarterly Supply Management Framework to prevent stockouts.</span></p></li>
        <li><p><span>Constructed an efficient Supply Distribution System with precise demand prediction.</span></p></li>
        <li><p><span>Maintained adequate inventory availability to accommodate anticipated revenue expansion.</span></p></li>
    </ul>
    
    <strong><p>Phase 2: Product Page Enhancement & Conversion Performance Gains</p></strong>
    <ul>
        <li><p><span>Performed comprehensive search optimization for product pages, focusing on high-performing keywords.</span></p></li>
        <li><p><span>Concentrated on click-through enhancement by developing premium imagery and conducting split testing via external platforms.</span></p></li>
        <li><p><span>Upgraded product visuals, accounting for buyer mindset and product application scenarios.</span></p></li>
        <li><p><span>Determined the intended demographic's patterns and consumption situations to emphasize in page material.</span></p></li>
        <li><p><span>Integrated findings from marketplace feedback and commonly mentioned consumer concerns.</span></p></li>
        <li><p><span>Refined both visible content and backend indexing terms, including Spanish indexing terms for extended market penetration.</span></p></li>
    </ul>
    
    <strong><p>Phase 3: Advertising Enhancement & Campaign Approach</p></strong>
    <ul>
        <li><p><span>Upon securing robust click-through and conversion rates, we executed a comprehensive advertising blueprint.</span></p></li>
        <li><p><span>Emphasized enhancing campaign efficiency and reducing advertising costs while optimizing profitability.</span></p></li>
        <li><p><span>Implemented persistent tracking and modifications to guarantee peak effectiveness.</span></p></li>
    </ul>
</div>
                </div>
                
              </div>
             </div> 

        {/* Results and achievments */}
            <div className="challenges-section-3">
              <div className="challenges-3">
                <div className='challenge-content-3'>
                  <h3>Outcomes & Milestones</h3>
                  <p>After a comprehensive brand transformation, we accomplished outstanding advancements:</p>
                  <ul>
                      <li><p><span>Yearly profit margins grew from $20,000 to $90,000 USD.</span></p></li>
                      <li><p><span>Advertising efficiency advanced from 35% to 19%, substantially boosting campaign performance.</span></p></li>
                      <li><p><span>Notable enhancements in conversion rates, click-through metrics, and total brand recognition.</span></p></li>
                      <li><p><span>Elevated customer interaction and credibility through refined product pages and testimonials.
                      </span></p></li>
                  </ul> 
                  <strong><p className='bottom-p'> 
                  This evolution demonstrates the effectiveness of tactical supply planning, content refinement, and focused advertising in expanding an Amazon brand prosperously.</p></strong>

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