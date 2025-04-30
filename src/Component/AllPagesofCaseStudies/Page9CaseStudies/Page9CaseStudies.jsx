import React from 'react';
import './Page9CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import Ellipse from '../../../assets/Ellipse.png';
import MaskGroup from '../../../assets/Mask-group.png';
import strategies from '../../../assets/Strategies-image.png';
import page9Result from '../../../assets/Page9ResultImage.png';


const CaseStudiesPage1 = () => {
  return(
    <div className='CaseStudiesPage1-comp'>

      {/* Brand Overview */}
      <div className="page1casestudies-Page1-top-brand">
        <div className="page1casestudies-brand-overview-section">
          <div className='page1casestudies-background-ellipse'>
            <img src={Ellipse} alt="" />
          </div>
          <h1 className="page1casestudies-main-title">Strategic Growth for Supplements Brand Case Study</h1>
          <div className="page1casestudies-overview-content">
            <div className="page1casestudies-left-content">
              <h2 className="page1casestudies-section-title">Brand Overview</h2>
              <p className="page1casestudies-subtitle">Supplements</p>
              
              <p className="page1casestudies-description">Before our intervention, the product faced multiple growth obstacles.</p>
              
              <p className="page1casestudies-challenges">
                Challenges: Revenue stagnation, stockouts, low CTR & CVR, inefficient PPC, poor rankings.
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
            <ul style={{marginLeft: '50px'}}>
              <li><p><span><strong>Revenue Struggles</strong> – Monthly revenue was limited to $374,665 with 15,000 units sold, far below the brand's potential.</span></p></li>
              <li><p><span><strong>Inventory Mismanagement</strong> – Stock reserves did not align with sales pace, leading to frequent stockouts and long periods of unavailability, disrupting sales momentum.</span></p></li>
              <li><p><span><strong>Low CTR & CVR</strong> – The product's CTR was only 0.25%, and conversion rates remained low, indicating ineffective listings and ad engagement.</span></p></li>
              <li><p><span><strong>Inefficient PPC Campaigns</strong> – The existing ad campaigns were poorly structured, with too many keywords, irregular bid adjustments, and inefficient budget allocation, leading to wasted ad spend and poor performance.</span></p></li>
              <li><p><span><strong>Poor Organic Ranking</strong> – The product had an average ranking position of 33, making it difficult to gain visibility in search results and compete with top-performing listings.</span></p></li>
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
            <h3>Strategies & Solutions Implemented</h3>
            <div>
              <ul><li><p><strong>Inventory Stability</strong> – Developed a demand-based restocking plan to prevent stockouts and maintain a steady sales pace, ensuring consistent availability.</p></li></ul>
              <ul><li><p><strong>Listing Optimization</strong> – Enhanced titles, bullet points, images, and A+ Content with keyword-rich descriptions and persuasive elements to improve engagement and conversions.</p></li></ul>
              <ul><li><p><strong>PPC Revamp</strong> – Restructured ad campaigns by:</p></li>
                <ul><p>• Pausing non-performing keywords and focusing on high-converting search terms.</p>
                  <p>• Implementing a bid optimization strategy to control ad spend and improve ROI.</p>
                  <p>• Reallocating budgets to the best-performing campaigns for maximum profitability.</p></ul></ul>
              <ul><li><p><strong>Conversion Rate Optimization (CRO)</strong> – Improved product positioning, pricing strategy, and promotions to make the offer more attractive to potential buyers.</p></li></ul>
              <ul><li><p><strong>Ranking Improvement Strategy</strong> – Focused on organic ranking growth by improving PPC structure, refining keyword indexing, and directing external traffic to boost search visibility.</p></li></ul>
            </div>
          </div>
        </div>
      </div> 

      {/* Results and achievments */}
      <div id="challenges-section-3-update-9">
        <div id="challenges-3-update-9">
          <div id='challenge-content-3-update-9'>
            <h3>Results & Achivements</h3>
            <p>Revenue Growth – Increased from $374,665 to $538,561 per month.</p>
            <ul style={{marginLeft: '0px'}}>
              <p><span><strong>Unit Sales</strong> – Increased from 15,000 to 22,000 per month.</span></p>
              <p><span><strong>PPC Efficiency</strong> – Paused non-performing keywords, removed irrelevant targeting, optimized listing frontend & backend, and restructured budgets.</span></p>
              <p><span><strong>CTR & CVR Improvement</strong> – CTR improved from 0.25% to 1.20%, along with a higher conversion rate.</span></p>
              <p><span><strong>Ranking Improvement</strong> – Average ranking position improved from 33 to 14.</span></p>
              <p><span><strong>Inventory Optimization</strong> – Implemented an effective restock plan, reducing stockout occurrences.</span></p>
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