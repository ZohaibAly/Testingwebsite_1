import React from 'react';
import './Page6CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import Ellipse from '../../../assets/Ellipse.png';
import MaskGroup from '../../../assets/Mask-group.png';
import strategies from '../../../assets/Strategies-image.png';
import Page6Result from '../../../assets/page6BeforeAfter.png';


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
                
                <p className="page1casestudies-description"> Before our intervention, the product faced multiple growth obstacles.
                </p>
                
                <p className="page1casestudies-challenges">
                Challenges: Low sales, inventory issues, low CVR% & CTR%, inefficient PPC campaign structuring, poor rankings, irrelevant keyword targeting, inefficient budget utilization, and uncontrolled ad spend.
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
                  <p><span> <strong>Revenue Struggles</strong> –Monthly revenue was limited to $28,000 with only 1,250 units sold, far below the brand's potential.</span></p>
                  <p><span> <strong>Inventory Mismanagement</strong> – Stock reserves did not align with the sales pace, leading to frequent stockouts and long periods of unavailability, disrupting sales momentum.</span></p>
                  <p><span> <strong>Low CTR & CVR</strong> – The product's CTR was only 0.13%, and the conversion rate remained low, indicating that the listing and ads were not engaging or converting shoppers effectively.</span></p>
                  <p><span> <strong>Inefficient PPC Campaigns</strong>  – The existing ad campaigns were poorly structured, with too many keywords, irregular bid adjustments, and inefficient budget allocation, leading to wasted ad spend and poor performance.
                  </span></p>
                  <p><span> <strong>Poor Organic Ranking</strong> – The product had an average ranking position of 72, making it difficult to gain visibility in search results and compete with top-performing listings.
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
                  <h3>Strategies & Solutions Implemented</h3>
                  <div>
    <p><strong>Inventory Stability</strong> – Introduced a data-driven inventory management system based on sales trends and demand forecasting. This ensured stock levels were aligned with sales velocity, eliminating long stockout periods.
    </p>
   
    
   <p> <strong>Listing Optimization</strong> – Enhanced product listing with SEO-driven titles, keyword-rich bullet points, high-quality images, and A+ Content to improve CTR and CVR.
   </p>
  
    
    <p><strong>PPC Overhaul</strong>  – Restructured PPC campaigns by:</p>
    <ul>
        <li><p><span>Refining keyword targeting to focus on high-converting and relevant terms. </span></p></li>
        <li><p><span>Optimizing bids to reduce wasted ad spend and improve ACOS.</span></p></li>
        <li><p><span>Balancing campaign budgets for maximum profitability and efficiency. </span></p></li>
    </ul>
    <p><strong>Conversion Rate Optimization (CRO)</strong>  – Improved product positioning, pricing strategy, and promotional offers to enhance purchase intent and increase conversions.
    </p>
    <p><strong>Ranking Improvement Strategy</strong>  – Focused on organic ranking growth through an optimized PPC structure, strategic keyword indexing, and driving external traffic to the listing.</p>
</div>
                </div>
                
              </div>
             </div> 

        {/* Results and achievments */}
            <div className="challenges-section-3">
              <div className="challenges-3">
                <div className='challenge-content-3'>
                  <h3>Results & Achivements</h3>
                
                      <p><strong>Revenue Growth </strong><span> – Increased monthly revenue from $28,000 to $43,900, with unit sales rising from 1,250 to 2,000 per month. </span></p>
                      <p><strong>Inventory Optimization</strong><span> – Implemented a structured restock plan, significantly reducing stockout occurrences and maintaining consistent availability.
                      </span></p>
                      <p><strong>PPC Efficiency</strong><span> – Paused non-performing keywords, removed irrelevant targeting, and redirected campaigns toward highly relevant keywords, reaching the right audience.

                      </span></p>
                      <p><strong>Conversion Boost</strong><span> – CTR improved from 0.13% to 0.80%, alongside an increase in conversion rate due to enhanced listing optimization, backend keyword indexing, and ad relevance.
                      </span></p>
                      <p><strong>Ranking Improvement</strong><span> – The product's average ranking position improved from 72 to 29, greatly enhancing organic visibility.
                      </span></p>
                      <p><strong>Better Budget Utilization</strong><span> – Allocated PPC budgets more effectively and optimized bids based on keyword performance, leading to higher ROAS and controlled ad spend.
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