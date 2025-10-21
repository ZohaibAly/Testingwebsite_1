import React from 'react';
import './Page6CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import MaskGroup from '../../../assets/Mask-image.png';
import strategies from '../../../assets/Strategies.png';
import Page6Result from '../../../assets/ResultPage6.png';


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
                
                <p className="page1casestudies-description">Prior to our engagement, the product encountered several expansion barriers.
                </p>
                
                <p className="page1casestudies-challenges">
                Obstacles: Underperforming revenue, supply disruptions, poor click-through & conversion metrics, disorganized advertising architecture, weak search positions, misaligned keyword selection, wasteful budget allocation, and unmanaged campaign expenditure.
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
                  <p><span> <strong>Revenue Struggles</strong> – Monthly earnings capped at $28,000 with merely 1,250 units moved, significantly beneath the brand's capacity.</span></p>
                  <p><span> <strong>Inventory Mismanagement</strong> – Supply levels failed to match the transaction velocity, causing repeated unavailability and extended out-of-stock durations, hampering sales continuity.</span></p>
                  <p><span> <strong>Low CTR & CVR</strong> – The product's click-through stood at merely 0.13%, and the purchase rate stayed minimal, suggesting that the page and advertisements weren't attracting or persuading customers successfully.</span></p>
                  <p><span> <strong>Inefficient PPC Campaigns</strong>  – The current advertising initiatives were inadequately organized, featuring excessive keywords, sporadic bid modifications, and poor budget distribution, resulting in squandered expenditure and subpar results.
                  </span></p>
                  <p><span> <strong>Poor Organic Ranking</strong> – The product maintained an average position of 72, hindering its ability to achieve search exposure and rival leading listings.
                  </span></p>
                </div>
                <div className='image-section'>
                  <div className='image-section-left'>
                    <div className='image-section-left-1'>
                    <img src={page1image1} alt="Logo" />
                    <h2>Poor Organic Ranking</h2>
                    </div>
                    <div className='image-section-left-2'>
                    <img src={page1image3} alt="Logo" />
                      <h2> Low CTR & CVR</h2>
                    </div>
                  </div>
                  <div className='image-section-right'>            
                  <div className='image-section-right-1'>
                  <img src={page1image2} alt="Logo" />
                  <h2>Inventory Mismanagement</h2>
                  </div>
                    <div className='image-section-right-2'>
                    <img src={page1image4} alt="Logo" />
                    <h2>Inefficient PPC Campaigns</h2>
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
    <p><strong>Supply Consistency</strong> – Implemented a metrics-based stock control framework utilizing transaction patterns and demand prediction. This guaranteed inventory quantities matched sales momentum, removing prolonged unavailability intervals.
    </p>
   
    
   <p> <strong>Product Page Enhancement</strong> – Upgraded product presentation with search-optimized headlines, keyword-dense features, premium visuals, and Enhanced Content to boost click-through and purchase rates.
   </p>
  
    
    <p><strong>Advertising Restructuring</strong>  – Redesigned advertising initiatives by:</p>
    <ul>
        <li><p><span>Sharpening keyword focus to emphasize high-performing and applicable phrases.</span></p></li>
        <li><p><span>Refining bid strategies to minimize wasteful spending and enhance cost efficiency.</span></p></li>
        <li><p><span>Distributing campaign funds for optimal profitability and effectiveness.</span></p></li>
    </ul>
    <p><strong>Purchase Rate Enhancement (CRO)</strong>  – Upgraded product placement, pricing tactics, and promotional incentives to strengthen buying motivation and elevate conversions.
    </p>
    <p><strong>Position Advancement Strategy</strong>  – Prioritized natural ranking elevation via an enhanced advertising framework, tactical keyword indexing, and channeling outside visitors to the product page.</p>
</div>
                </div>
                
              </div>
             </div> 

        {/* Results and achievments */}
            <div className="challenges-section-3">
              <div className="challenges-3">
                <div className='challenge-content-3'>
                  <h3>Outcomes & Milestones</h3>
                
                      <p><strong>Sales Expansion </strong><span> – Elevated monthly earnings from $28,000 to $43,900, with unit transactions climbing from 1,250 to 2,000 monthly.</span></p>
                      <p><strong>Supply Optimization</strong><span> – Established an organized replenishment framework, substantially decreasing unavailability incidents and preserving steady product availability.
                      </span></p>
                      <p><strong>Ad Efficiency</strong><span> – Halted underperforming search terms, eliminated misaligned targeting, and redirected initiatives toward highly applicable keywords, connecting with the ideal demographic.

                      </span></p>
                      <p><strong>Conversion Enhancement</strong><span> – Click-through advanced from 0.13% to 0.80%, accompanied by a purchase rate increase stemming from improved page refinement, backend keyword indexing, and advertisement relevance.
                      </span></p>
                      <p><strong>Position Advancement</strong><span> – The product's average search position progressed from 72 to 29, substantially boosting natural discoverability.
                      </span></p>
                      <p><strong>Superior Budget Management</strong><span> – Distributed advertising funds more strategically and refined bids according to keyword effectiveness, producing elevated ROAS and managed campaign spending.
                      </span></p>
                </div>
                <div className='image-section-results'>
              <img src={Page6Result} alt="Logo" />        
                </div>
              </div>
            </div>
    
</div>
  );
};

export default CaseStudiesPage1;