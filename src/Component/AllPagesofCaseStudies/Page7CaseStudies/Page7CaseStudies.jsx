import React from 'react';
import "../Page7CaseStudies/Page7CaseStudies.css"
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import Ellipse from '../../../assets/Ellipse.png';
import MaskGroup from '../../../assets/Mask-group.png';
import strategies from '../../../assets/Strategies-image.png';
import page7Result from '../../../assets/page7-result-image.png';


const CaseStudiesPage1 = () => {
return(

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
            <div className='page1casestudies-background-ellipse'>
                <img src={Ellipse} alt="" />
            </div>
            <h1 className="page1casestudies-main-title">Strategic Growth and Hijacker Removal for Grocery & Gourmet Food Brand Case Study</h1>
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">Brand Overview</h2>
                <p className="page1casestudies-subtitle">Grocery & Gourmet Food</p>
                
                <p className="page1casestudies-description">When we took over brand's compliance and protection strategy, multiple critical issues were threatening its success on Amazon.</p>
                
                <p className="page1casestudies-challenges">
                Services: Compliance Management, Inventory Optimization, Brand Protection, Listing Optimization
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
                  <p><span> <strong>Product Policy Compliance Warning:</strong>Received due to customer complaints about expired inventory.</span></p>
                  <p><span> <strong>Amazon Investigation & Listing at Risk:</strong>Amazon identified expired units and moved them to unfulfillable status, threatening listing removal.</span></p>
                  <p><span> <strong>Inventory Management Issues:</strong>Delayed processing during Q4 led to units being marked as expired upon delivery.</span></p>
                  <p><span> <strong>Hijacker Problem:</strong> Unauthorized sellers listing the product, impacting sales and brand control.</span></p>
                </div>
                <div className='image-section'>
                  <div className='image-section-left'>
                    <div className='image-section-left-1'>
                    <img src={page1image1} alt="Logo" />
                    <h2>Product Policy Compliance Warning</h2>
                    </div>
                    <div className='image-section-left-2'>
                    <img src={page1image3} alt="Logo" />
                      <h2>Inventory Management Issues</h2>
                    </div>
                  </div>
                  <div className='image-section-right'>            
                  <div className='image-section-right-1'>
                  <img src={page1image2} alt="Logo" />
                  <h2>Amazon Investigation & Listing at Risk</h2>
                  </div>
                    <div className='image-section-right-2'>
                    <img src={page1image4} alt="Logo" />
                    <h2>Hijacker Problem</h2>
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
                        <p>To resolve these issues, we implemented a structured compliance, inventory, and brand protection strategy, ensuring long-term stability and growth.</p>
                            <ul>
                                <ul className='inner-ul'>
                                <p><strong>Phase 1: Compliance Resolution</strong></p>
                                <ul>
                                <p>• Submitted live product images with future expiry dates to verify inventory quality and reinstate the listing.</p>
                                <p>• Worked closely with Amazon’s compliance team to ensure policy adherence.</p>
                                </ul>
                                </ul>
                            </ul>
                            <ul>
                                <ul className='inner-ul'>
                                <p><strong>Phase 2: Proactive Inventory Management</strong></p>
                                <ul>
                                <p>• Shipped fresh stock ahead of peak sales events to prevent low-stock issues.</p>
                                <p>• Improved warehouse processing efficiency to avoid expiration-related removals.</p>
                                </ul>
                                </ul>
                            </ul>
                            <ul>
                                <ul className='inner-ul'>
                                <p><strong>Phase 3: Amazon Case Follow-Up & Hijacker Removal</strong></p>
                                <ul>
                                <p>• Provided necessary documentation to remove hijackers and regain full control over the listing.</p>
                                <p>• Enrolled in Amazon Brand Protection Programs to prevent future unauthorized listings.</p>
                                </ul>
                                </ul>
                            </ul>
                            <ul>
                                <ul className='inner-ul'>
                                <p><strong>Phase 4: Listing Optimization & Promotions</strong></p>
                                <ul>
                                <p>• Enhanced the listing with event-based keywords, A+ Content, and high-converting images.</p>
                                <p>• Launched Coupons, Subscribe & Save, and Price Cuts to boost conversion rates.</p>
                                </ul>
                                </ul>
                            </ul>
                    </div>
                </div>
                
              </div>
             </div> 

        {/* Results and achievments */}
            <div id="challenges-section-3-update-7">
              <div  id='challenges-3-update-7'>
                <div id='challenge-content-3-update-7'>
                  <h3>Results & Achivements</h3>
                  <p>Following a structured intervention, we achieved outstanding results:</p>
                  <ul>
                      <li><p>6X Sales Growth – Revenue surged due to strategic inventory and brand control measures.</p></li>
                      <li><p>Hijacker Removal – Successfully eliminated all unauthorized sellers, regaining complete Buy Box control.</p></li>
                      <li><p>Profitability Boost – Optimized ACoS and improved profit margins through efficient ad spend.</p></li>
                      <li><p>Stronger Brand Protection – Ensured long-term compliance and inventory management for sustained growth.</p></li>
                  </ul> 
                  <p id='bottom-result-p'><strong>This transformation highlights the impact of proactive compliance management, inventory control, and brand protection in scaling an Amazon business successfully.</strong></p>
                </div>
                <div id='image-section-results-update-7'>
              <img src={page7Result} alt="Logo" />        
                </div>
              </div>
            </div>
    
</div>
  );
};

export default CaseStudiesPage1;