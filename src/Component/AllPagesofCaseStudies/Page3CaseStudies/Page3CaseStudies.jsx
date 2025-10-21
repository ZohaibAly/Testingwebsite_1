import React from 'react';
import '../Page1CaseStudies/Page1CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import MaskGroup from '../../../assets/Mask-image.png';
import strategies from '../../../assets/Strategies.png';
import Page3results from '../../../assets/ResultPage3.png';


const CaseStudiesPage1 = () => {
  return (

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
          
            <h1 className="page1casestudies-main-title">Baby Products & Supplements Brand: A Strategic Expansion Case Study</h1>
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">About the Brand</h2>
                <p className="page1casestudies-subtitle">Supplements & Baby Products</p>
                
                <p className="page1casestudies-description">Upon our engagement, the product encountered multiple obstacles that limited its expansion capability.</p>
                
                <p className="page1casestudies-challenges">
                Obstacles: Underperforming revenue, insufficient market recognition, elevated advertising costs, and untapped campaign opportunities.
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
                  <p><span> <strong>Revenue Stagnation</strong> – Sales performance flatlined at $33,765.84, missing an organized expansion strategy.</span></p>
                  <p><span> <strong>Stockouts & Inventory Gaps </strong> – No significant supply disruptions, yet operational enhancements were required.</span></p>
                  <p><span> <strong>Weak Listings & Low Conversions</strong> – Suboptimal search optimization, imagery, and Enhanced Content yielded a 10% conversion rate.</span></p>
                  <p><span> <strong>High ACoS, Low PPC ROI</strong> – Campaign inefficiencies produced an ACoS of 30%.</span></p>
                  <p><span> <strong>No Brand Awareness</strong> – Absence of natural traffic and platform visibility.</span></p>
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
                  <h3>Solutions & Tactics We Deployed</h3>
                  <p>To tackle these obstacles, we executed a phased approach to enhance product pages, refine advertising campaigns, and amplify market presence:</p>
                  <div>
    <strong><p>Phase 1: Supply Chain Consistency</p></strong>
    <ul>
        <li><p><span>Enhanced prediction and scheduling to maintain product availability while avoiding excess inventory.</span></p></li>
        <li><p><span>Streamlined warehousing and distribution tactics to minimize avoidable expenses.</span></p></li>
    </ul>
    
    <strong><p>Phase 2: Product Page Enhancement</p></strong>
    <ul>
        <li><p><span>Upgraded search optimization, visuals, and Enhanced Content to draw and convert shoppers.</span></p></li>
        <li><p><span>Concentrated on keyword-enriched headlines and descriptions to boost natural rankings.</span></p></li>
    </ul>
    
    <strong><p>Phase 3: Advertising Campaign Overhaul</p></strong>
    <ul>
        <li><p><span>Organized campaigns with refined keyword selection and customer segmentation.</span></p></li>
        <li><p><span>Adjusted bidding to elevate CTR to 10% and eliminate wasteful expenditure.</span></p></li>
        <li><p><span>Managed ACoS while doubling advertising revenue with identical budget allocation.</span></p></li>
    </ul>
    
    <strong><p>Phase 4: Revenue Expansion & Market Visibility</p></strong>
    <ul>
        <li><p><span>Emphasized exposure through advertising campaigns rather than depending on pricing reductions or excessive deals.</span></p></li>
        <li><p><span>Redesigned the Brand Store to elevate the browsing experience and capture additional branded queries.</span></p></li>
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
                  <p>Our tactical implementations produced remarkable achievements:</p>
                  <ul>
                      <li><p><span>Sales Expansion – Revenue climbed from $33,765.84 to $65,285.55.</span></p></li>
                      <li><p><span>Supply Efficiency – Accomplished enhanced performance and expenditure reductions.</span></p></li>
                      <li><p><span>Ad Performance – ACoS decreased from 30% to 12%, while advertising sales doubled with equivalent spending.</span></p></li>
                      <li><p><span>Conversion Enhancement – CVR advanced from 10% to 28%, generating increased sales.</span></p></li>
                      <li><p><span>Customer Feedback – Slight variation, yet secured additional testimonials that boosted credibility.</span></p></li>  
                      <li><p><span>Market Recognition – Elevated natural traffic and branded queries, fortifying sustained expansion.</span></p></li>  
                  </ul> 
                  <strong><p className='bottom-p'> 
                  Via focused refinement and strategic advertising enhancements, we evolved Wellements' Vitamin D Drops into a thriving product with sustainable momentum on Amazon.</p></strong>

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