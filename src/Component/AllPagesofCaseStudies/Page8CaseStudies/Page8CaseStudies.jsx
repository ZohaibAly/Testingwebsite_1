import React from 'react';
import './Page8CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import MaskGroup from '../../../assets/Mask-image.png';
import strategies from '../../../assets/Strategies.png';
import page8Result from '../../../assets/ResultPage8.png';


const CaseStudiesPage1 = () => {
return(

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
      
            <h1 className="page1casestudies-main-title">Grocery & Gourmet Food Brand: A Strategic Expansion Case Study</h1>
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">About the Brand</h2>
                <p className="page1casestudies-subtitle">Gourmet Food & Grocery</p>
                
                <p className="page1casestudies-description">Upon taking charge of the brand's regulatory adherence and brand defense on Amazon, the product encountered multiple significant obstacles.</p>
                
                <p className="page1casestudies-challenges">
                Services: Regulatory Oversight, Supply Refinement, Product Page Enhancement, Promotional Campaigns
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
                  <p><span> <strong>Compliance Issues</strong> – Buyer grievances regarding outdated stock triggered product policy regulatory alerts.</span></p>
                  <p><span> <strong>Inventory Management</strong> – Processing postponements during peak season caused merchandise to be flagged as outdated upon arrival.</span></p>
                </div>
                <div className='image-section'>
                  <div className='image-section-left'>
                    <div className='image-section-left-1'>
                    <img src={page1image1} alt="Logo" />
                    <h2>Compliance Issues</h2>
                    </div>
                  </div>
                  <div className='image-section-right'>            
                  <div className='image-section-right-1'>
                  <img src={page1image2} alt="Logo" />
                  <h2>Inventory Management</h2>
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
                  <div>
    <ul>
    <p>To tackle these obstacles and accelerate expansion, we executed a holistic framework:</p>
        <li><p><strong>Phase 1: Regulatory Resolution</strong></p>
        <ul>
        <p>• Provided current product photographs displaying extended expiration dates to confirm stock quality and restore the page.</p>
        <p>• Worked directly with Amazon's regulatory division to maintain continuous policy conformity.</p>
        </ul>
        </li>
    </ul>
    <ul>
        <li><p><strong>Phase 2: Forward-Thinking Supply Control</strong></p>
        <ul>
        <p>• Shipped new inventory in advance of major shopping periods to avoid low-stock scenarios.</p>
        <p>• Improved fulfillment center handling speed to prevent expiration-driven complications.</p>
        </ul>
        </li>
    </ul>
    <ul>
        <li><p><strong>Phase 3: Product Page Enhancement & Promotional Initiatives</strong></p>
        <ul>
        <p>• Redesigned product pages with seasonal keywords, enriched Enhanced Content, and premium visuals.</p>
        <p>• Initiated promotional strategies, featuring Discount Codes, Subscription Programs, and tactical pricing modifications to elevate conversion performance.</p>
        </ul>
        </li>
    </ul>
</div>
                </div>
                
              </div>
             </div> 

        {/* Results and achievments */}
            <div id="challenges-section-3-update-8">
              <div id="challenges-3-update-8">
                <div id='challenge-content-3-update-8'>
                  <h3>Outcomes & Milestones</h3>
                  <p>Our tactical implementations produced extraordinary achievements:</p>
                  <ul>
                      <li><p>7X Revenue Expansion – Sales multiplied from $29,131.70 in 2023 to $215,068.66 in 2024.</p></li>
                      <li><p>Enhanced Advertising Performance – Actual ACoS advanced from 23.99% in 2023 to 12.37% in 2024.</p></li>
                      <li><p>Profitability Enhancement – Net earnings climbed from $2,403.13 in 2023 to $25,405.25 in 2024.</p></li>
                  </ul> 
                  <p id='bottom-result-p-8'><strong>Via careful strategizing and implementation, Sweet Gifting converted its obstacles into prospects, securing considerable expansion and reinforced brand credibility on Amazon.</strong></p>
                </div>
                <div id='image-section-results-update-8'>
              <img src={page8Result} alt="Logo" />        
                </div>
              </div>
            </div>
    
</div>
  );
};

export default CaseStudiesPage1;