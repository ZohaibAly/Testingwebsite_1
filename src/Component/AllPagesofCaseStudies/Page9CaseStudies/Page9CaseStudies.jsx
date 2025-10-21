import React from 'react';
import './Page9CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import MaskGroup from '../../../assets/Mask-image.png';
import strategies from '../../../assets/Strategies.png';
import page9Result from '../../../assets/ResultPage9.png';


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
              
              <p className="page1casestudies-description">Prior to our engagement, the product encountered several expansion barriers.</p>
              
              <p className="page1casestudies-challenges">
                Obstacles: Sales plateauing, supply disruptions, poor click-through & conversion metrics, wasteful advertising, weak search positions.
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
            <ul style={{marginLeft: '50px'}}>
              <li><p><span><strong>Revenue Struggles</strong> – Monthly earnings capped at $374,665 with 15,000 units moved, significantly beneath the brand's capacity.</span></p></li>
              <li><p><span><strong>Inventory Mismanagement</strong> – Supply levels failed to match transaction velocity, causing repeated unavailability and extended out-of-stock durations, hampering sales continuity.</span></p></li>
              <li><p><span><strong>Low CTR & CVR</strong> – The product's click-through stood at merely 0.25%, and purchase rates stayed minimal, revealing ineffective page presentation and advertisement attraction.</span></p></li>
              <li><p><span><strong>Inefficient PPC Campaigns</strong> – The current advertising initiatives were inadequately organized, featuring excessive keywords, sporadic bid modifications, and poor budget distribution, resulting in squandered expenditure and subpar results.</span></p></li>
              <li><p><span><strong>Poor Organic Ranking</strong> – The product maintained an average position of 33, hindering its ability to achieve search exposure and rival leading listings.</span></p></li>
            </ul>
          </div>
          <div className='image-section'>
            <div className='image-section-left'>
              <div className='image-section-left-1'>
                <img src={page1image1} alt="Logo" />
                <h2>Poor Organic Ranking</h2>
              </div>
              <div className='image-section-left-2'>
                <img src={page1image3} alt="Logo" />
                <h2>Low CTR & CVR</h2>
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
              <ul><li><p><strong>Supply Consistency</strong> – Established a demand-driven replenishment framework to eliminate unavailability and sustain steady transaction momentum, guaranteeing continuous product access.</p></li></ul>
              <ul><li><p><strong>Product Page Enhancement</strong> – Upgraded headlines, features, visuals, and Enhanced Content with keyword-dense descriptions and compelling components to boost interaction and purchases.</p></li></ul>
              <ul><li><p><strong>Advertising Restructuring</strong> – Redesigned campaign initiatives by:</p></li>
                <ul><p>• Halting underperforming search terms and concentrating on high-converting queries.</p>
                  <p>• Executing a bid refinement approach to manage expenditure and enhance ROI.</p>
                  <p>• Redistributing funds to top-performing initiatives for optimal profitability.</p></ul></ul>
              <ul><li><p><strong>Purchase Rate Enhancement (CRO)</strong> – Improved product placement, pricing tactics, and promotional offers to make the proposition more appealing to prospective customers.</p></li></ul>
              <ul><li><p><strong>Position Advancement Strategy</strong> – Prioritized natural ranking elevation by enhancing advertising framework, sharpening keyword indexing, and channeling outside visitors to amplify search discoverability.</p></li></ul>
            </div>
          </div>
        </div>
      </div> 

      {/* Results and achievments */}
      <div id="challenges-section-3-update-9">
        <div id="challenges-3-update-9">
          <div id='challenge-content-3-update-9'>
            <h3>Outcomes & Milestones</h3>
            <p>Sales Expansion – Climbed from $374,665 to $538,561 monthly.</p>
            <ul style={{marginLeft: '0px'}}>
              <p><span><strong>Unit Transactions</strong> – Grew from 15,000 to 22,000 monthly.</span></p>
              <p><span><strong>Ad Efficiency</strong> – Halted non-performing search terms, eliminated misaligned targeting, refined page frontend & backend, and reorganized budgets.</span></p>
              <p><span><strong>Click-Through & Conversion Enhancement</strong> – Click-through advanced from 0.25% to 1.20%, alongside an elevated purchase rate.</span></p>
              <p><span><strong>Position Advancement</strong> – Average search position progressed from 33 to 14.</span></p>
              <p><span><strong>Supply Optimization</strong> – Executed an efficient replenishment strategy, minimizing unavailability incidents.</span></p>
            </ul>
          </div>
          <div id='image-section-results-update-9'>
            <img src={page9Result} alt="Logo" />        
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage1;