import React from 'react';
import "./Page7CaseStudies.css"
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import Ellipse from '../../../assets/Ellipse.png';
import MaskGroup from '../../../assets/Mask-image.png';
import strategies from '../../../assets/Strategies.png';
import page7Result from '../../../assets/ResultPage7.png';


const CaseStudiesPage1 = () => {
return(

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
            <div className='page1casestudies-background-ellipse'>
                <img src={Ellipse} alt="" />
            </div>
            <h1 className="page1casestudies-main-title">Grocery & Gourmet Food Brand: Strategic Expansion and Unauthorized Seller Elimination Case Study</h1>
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">About the Brand</h2>
                <p className="page1casestudies-subtitle">Gourmet Food & Grocery</p>
                
                <p className="page1casestudies-description">Upon assuming the brand's regulatory and defense approach, several significant concerns were jeopardizing its platform performance.</p>
                
                <p className="page1casestudies-challenges">
                Services: Regulatory Oversight, Supply Refinement, Brand Defense, Product Page Enhancement
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
                  <p><span> <strong>Product Policy Compliance Warning:</strong>Issued following buyer grievances regarding outdated stock.</span></p>
                  <p><span> <strong>Amazon Investigation & Listing at Risk:</strong>Amazon detected outdated items and transferred them to unsellable status, risking page suspension.</span></p>
                  <p><span> <strong>Inventory Management Issues:</strong>Postponed handling during peak season resulted in items being flagged as outdated upon arrival.</span></p>
                  <p><span> <strong>Hijacker Problem:</strong> Unlicensed merchants posting the merchandise, affecting revenue and brand authority.</span></p>
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
                  <h3>Solutions & Tactics We Deployed</h3>
                    <div>
                        <p>To address these concerns, we executed an organized regulatory, supply, and brand defense framework, guaranteeing sustained stability and expansion.</p>
                            <ul>
                                <ul className='inner-ul'>
                                <p><strong>Phase 1: Regulatory Resolution</strong></p>
                                <ul>
                                <p>• Provided current product photographs with extended expiration dates to confirm stock quality and restore the page.</p>
                                <p>• Collaborated directly with Amazon's regulatory division to maintain policy conformity.</p>
                                </ul>
                                </ul>
                            </ul>
                            <ul>
                                <ul className='inner-ul'>
                                <p><strong>Phase 2: Forward-Thinking Supply Control</strong></p>
                                <ul>
                                <p>• Dispatched new inventory in advance of major shopping periods to avoid low-stock situations.</p>
                                <p>• Enhanced fulfillment center handling speed to prevent expiration-driven removals.</p>
                                </ul>
                                </ul>
                            </ul>
                            <ul>
                                <ul className='inner-ul'>
                                <p><strong>Phase 3: Amazon Case Tracking & Unauthorized Seller Elimination</strong></p>
                                <ul>
                                <p>• Supplied required evidence to eliminate unauthorized merchants and restore complete listing authority.</p>
                                <p>• Participated in Amazon Brand Defense Initiatives to block future unlicensed postings.</p>
                                </ul>
                                </ul>
                            </ul>
                            <ul>
                                <ul className='inner-ul'>
                                <p><strong>Phase 4: Product Page Enhancement & Promotional Tactics</strong></p>
                                <ul>
                                <p>• Upgraded the page with seasonal keywords, Enhanced Content, and high-converting visuals.</p>
                                <p>• Initiated Discount Codes, Subscription Programs, and Price Reductions to elevate conversion performance.</p>
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
                  <h3>Outcomes & Milestones</h3>
                  <p>After an organized intervention, we accomplished exceptional achievements:</p>
                  <ul>
                      <li><p>6X Revenue Expansion – Sales multiplied through tactical supply and brand authority measures.</p></li>
                      <li><p>Unauthorized Seller Elimination – Successfully removed all unlicensed merchants, reclaiming total Buy Box authority.</p></li>
                      <li><p>Profitability Enhancement – Refined advertising efficiency and strengthened profit margins via strategic expenditure.</p></li>
                      <li><p>Reinforced Brand Defense – Maintained sustained regulatory adherence and supply oversight for continued expansion.</p></li>
                  </ul> 
                  <p id='bottom-result-p'><strong>This evolution demonstrates the significance of forward-thinking regulatory oversight, supply control, and brand defense in expanding an Amazon enterprise prosperously.</strong></p>
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