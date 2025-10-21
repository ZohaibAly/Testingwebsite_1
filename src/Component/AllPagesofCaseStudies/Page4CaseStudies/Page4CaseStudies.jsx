import React from 'react';
import '../Page1CaseStudies/Page1CaseStudies.css';
// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import MaskGroup from '../../../assets/Mask-image.png';
import strategies from '../../../assets/Strategies.png';
import page4Result from '../../../assets/ResultPage4.png';


const CaseStudiesPage1 = () => {
return(

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
           
            <h1 className="page1casestudies-main-title">Baby Products & Supplements Brand: Strategic Expansion and Unauthorized Seller Elimination Case Study</h1>
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">About the Brand</h2>
                <p className="page1casestudies-subtitle">Supplements & Baby Products</p>
                
                <p className="page1casestudies-description">Upon assuming the brand's defense strategy, it encountered significant risks that were drastically affecting revenue and consumer confidence.
                </p>
                
                <p className="page1casestudies-challenges">
                Services: Brand Defense, Amazon Transparency Initiative, Amazon Zero Initiative Implementation
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
                  <p><span> <strong>Widespread Hijackers</strong> – Unlicensed merchants saturating the marketplace with fake and unauthorized merchandise.</span></p>
                  <p><span> <strong>Revenue Drain</strong> – Unauthorized sellers capturing the Buy Box, slashing prices, and diverting sales.</span></p>
                  <p><span> <strong>Customer Complaints & Brand Damage</strong> – Purchasers obtaining substandard or outdated merchandise, resulting in poor feedback and eroding credibility.</span></p>
                  <p><span> <strong>Ineffective Initial Takedown Efforts</strong> – Standard notices and infringement claims proved unsuccessful given the substantial volume of unauthorized sellers.</span></p>
                </div>
                <div className='image-section'>
                  <div className='image-section-left'>
                    <div className='image-section-left-1'>
                    <img src={page1image1} alt="Logo" />
                    <h2>Widespread Hijackers</h2>
                    </div>
                    <div className='image-section-left-2'>
                    <img src={page1image3} alt="Logo" />
                      <h2>Customer Complaints & Brand Damage</h2>
                    </div>
                  </div>
                  <div className='image-section-right'>            
                  <div className='image-section-right-1'>
                  <img src={page1image2} alt="Logo" />
                  <h2>Revenue Drain</h2>
                  </div>
                    <div className='image-section-right-2'>
                    <img src={page1image4} alt="Logo" />
                    <h2>Ineffective Initial Takedown Efforts</h2>
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
                  <p>We initiated a forceful, phased approach that merged legal action, compliance initiatives, and automation to reclaim brand authority.
                  </p>
                  <div>
    <strong><p>Phase 1: Immediate Removal & Legal Action</p></strong>
    <ul>
        <li><p><span>Dispatched legal termination notices to unlicensed merchants, requiring instant delisting.</span></p></li>
        <li><p><span>Submitted intellectual property and policy breach claims with Amazon targeting persistent unauthorized sellers.</span></p></li>
    </ul>
    
    <strong><p>Phase 2: Amazon Transparency Initiative Registration</p></strong>
    <ul>
        <li><p><span>Enrolled all Wellements merchandise under Amazon's Transparency Initiative to block unauthorized postings.</span></p></li>
        <li><p><span>Guaranteed only authenticated, serialized items could be marketed, eliminating counterfeit transactions at origin.</span></p></li>
    </ul>
    
    <strong><p>Phase 3: Amazon Zero Initiative Implementation</p></strong>
    <ul>
        <li><p><span>Participated in the Amazon Zero Initiative to harness automated counterfeit identification.</span></p></li>
        <li><p><span>Activated AI-powered elimination of unauthorized postings, eradicating unauthorized sellers instantaneously.</span></p></li>
    </ul>
    
    <strong><p>Implementation & Enhancement</p></strong>
    <ul>
        <li><p><span>Effectively integrated all merchandise into the Transparency and Zero Initiatives.</span></p></li>
        <li><p><span>Established continuous surveillance to prevent future risks and guarantee sustained defense.</span></p></li>
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
                  <p>After a comprehensive brand defense transformation, we accomplished substantial advancements:</p>
                  <ul>
                      <li><p><span>100% Unauthorized Seller-Free Listings – Every unlicensed merchant was removed, reclaiming brand authority.</span></p></li>
                      <li><p><span>3X Sales Expansion – With pricing authority and Buy Box supremacy, revenue multiplied exponentially.</span></p></li>
                      <li><p><span>Enhanced Brand Credibility – Consumers now obtain exclusively genuine merchandise, producing elevated ratings and recurring transactions.</span></p></li>
                      <li><p><span>Sustained Market Defense – Transparency and Zero Initiative registration guarantee unauthorized seller prevention moving forward.
                      </span></p></li>
                  </ul> 
                  <strong><p className='bottom-p'> 
                  This evolution demonstrates the effectiveness of tactical brand defense, compliance execution, and automation in safeguarding an Amazon brand's prosperity.</p></strong>

                </div>
                <div className='image-section-results'>
              <img src={page4Result} alt="Logo" />        
                </div>
              </div>
            </div>
    
</div>
  );
};

export default CaseStudiesPage1;