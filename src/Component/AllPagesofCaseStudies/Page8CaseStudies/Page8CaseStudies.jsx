import React from 'react';
import '../Page1CaseStudies/Page1CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import Ellipse from '../../../assets/Ellipse.png';
import MaskGroup from '../../../assets/Mask-group.png';
import strategies from '../../../assets/Strategies-image.png';
import page8Result from '../../../assets/page8resultimage.png';


const CaseStudiesPage1 = () => {
return(

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
            <div className='page1casestudies-background-ellipse'>
                <img src={Ellipse} alt="" />
            </div>
            <h1 className="page1casestudies-main-title">Strategic Growth for Grocery & Gourmet Food Brand Case Study</h1>
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">Brand Overview</h2>
                <p className="page1casestudies-subtitle">Grocery & Gourmet Food</p>
                
                <p className="page1casestudies-description">When we assumed responsibility for the brand’s compliance and brand protection on Amazon, the product faced several critical challenges.</p>
                
                <p className="page1casestudies-challenges">
                Services: Compliance Management, Inventory Optimization, Listing Optimization, Promotions
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
                  <p><span> <strong>Compliance Issues</strong> – Customer complaints about expired inventory led to product policy compliance warnings.</span></p>
                  <p><span> <strong>Inventory Management</strong> – Delays during Q4 processing resulted in products being marked expired upon delivery.</span></p>
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
                  <h3>Strategies & Solutions Implemented</h3>
                  <div>
    <ul>
    <p>To address these challenges and drive growth, we implemented a comprehensive strategy:</p>
        <li><p><strong>Phase 1: Compliance Resolution</strong></p>
        <ul>
        <p>• Submitted live product images showcasing future expiration dates to verify inventory quality and reinstate the listing.</p>
        <p>• Collaborated closely with Amazon's compliance team to ensure ongoing policy adherence.</p>
        </ul>
        </li>
    </ul>
    <ul>
        <li><p><strong>Phase 2: Proactive Inventory Management</strong></p>
        <ul>
        <p>• Dispatched fresh stock ahead of peak sales events to prevent low-stock situations.</p>
        <p>• Enhanced warehouse processing efficiency to avoid expiration-related issues.</p>
        </ul>
        </li>
    </ul>
    <ul>
        <li><p><strong>Phase 3: Listing Optimization & Promotions</strong></p>
        <ul>
        <p>• Revamped product listings with event-specific keywords, enriched A+ Content, and high-quality images.</p>
        <p>• Launched promotional campaigns, including Coupons, Subscribe & Save, and strategic price adjustments to boost conversion rates.</p>
        </ul>
        </li>
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
                  <p>Our strategic interventions led to remarkable outcomes:</p>
                  <ul>
                      <li><p>7X Sales Growth – Revenue escalated from $29,131.70 in 2023 to $215,068.66 in 2024.</p></li>
                      <li><p>Improved Advertising Efficiency – Real ACoS improved from 23.99% in 2023 to 12.37% in 2024.</p></li>
                      <li><p>Profitability Boost – Net profit surged from $2,403.13 in 2023 to $25,405.25 in 2024.</p></li>
                  </ul> 
                  <p><strong>Through meticulous planning and execution, Sweet Gifting transformed its challenges into opportunities, achieving substantial growth and enhanced brand integrity on Amazon.</strong></p>
                </div>
                <div className='image-section-results'>
              <img src={page8Result} alt="Logo" />        
                </div>
              </div>
            </div>
    
</div>
  );
};

export default CaseStudiesPage1;