import React from 'react';
import './Page2CaseStudies.css';

// Import images 
import page1image1 from '../../../assets/page1image1.png';
import page1image2 from '../../../assets/page1image2.png';
import page1image3 from '../../../assets/page1image3.png';
import page1image4 from '../../../assets/page1image4.png';
import Ellipse from '../../../assets/Ellipse.png';
import MaskGroup from '../../../assets/Mask-group.png';
import strategies from '../../../assets/Strategies-image.png';
import results from '../../../assets/Result-image.png';


const CaseStudiesPage1 = () => {
  return (

<div className='CaseStudiesPage1-comp'>

        {/* Brand Overview */}
        <div className="page1casestudies-Page1-top-brand">
          

          <div className="page1casestudies-brand-overview-section">
            <div className='page1casestudies-background-ellipse'>
                <img src={Ellipse} alt="" />
            </div>
            <h1 className="page1casestudies-main-title">Strategic Growth for Health & Personal Care Brand Case Study</h1>
            
            <div className="page1casestudies-overview-content">
              <div className="page1casestudies-left-content">
                <h2 className="page1casestudies-section-title">Brand Overview</h2>
                <p className="page1casestudies-subtitle">Health & Personal Care</p>
                
                <p className="page1casestudies-description">When we took over, this brand's Lozenges faced multiple barriers to growth.</p>
                
                <p className="page1casestudies-challenges">
                Challenges: Revenue stagnation, weak listings, high ACoS, unstructured PPC, no review system, and limited brand awareness.
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
                  <p><span> <strong>Revenue Stagnation</strong> – Sales had plateaued despite consistent orders.</span></p>
                  <p><span> <strong>Weak Listings</strong> – Poor SEO, unoptimized images, and weak A+ Content were limiting conversions.                  </span></p>
                  <p><span> <strong>High ACoS & Inefficient PPC</strong> – ACoS was at 51.2% due to unstructured campaigns and ineffective keyword targeting.                  </span></p>
                  <p><span> <strong>Lack of Review Management</strong> – No system in place to gather or manage customer feedback.                  </span></p>
                  <p><span> <strong>Limited Brand Awareness</strong> – Minimal visibility efforts beyond a basic storefront.</span></p>
                </div>
                <div className='image-section'>
                  <div className='image-section-left'>
                    <div className='image-section-left-1'>
                    <img src={page1image1} alt="Logo" />
                    <h2>Revenue Stagnation</h2>
                    </div>
                    <div className='image-section-left-2'>
                    <img src={page1image3} alt="Logo" />
                      <h2>Lack of Review Management</h2>
                    </div>
                  </div>
                  <div className='image-section-right'>            
                  <div className='image-section-right-1'>
                  <img src={page1image2} alt="Logo" />
                  <h2>High ACoS & Inefficient PPC </h2>
                  </div>
                    <div className='image-section-right-2'>
                    <img src={page1image4} alt="Logo" />
                    <h2>Limited Brand Awareness</h2>
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
                  <p>To drive sustainable growth, we executed a data-driven, multi-phase strategy:</p>
                  <div>
    <strong><p>1. Listing Optimization</p></strong>
    <ul>
        <li><p><span>Enhanced titles, bullet points, and descriptions with customer-focused copy.</span></p></li>
        <li><p><span>Upgraded images and A+ Content for better engagement and conversion.</span></p></li>
    </ul>
    
    <strong><p>2. PPC Campaign Revamp</p></strong>
    <ul>
        <li><p><span>Implemented structured keyword targeting and bid optimization.</span></p></li>
        <li><p><span>Reduced wasted ad spend and optimized ACoS from 51.2% to 23.5%.</span></p></li>
    </ul>
    
    <strong><p>3. Review Management System</p></strong>
    <ul>
        <li><p><span>Set up an automated follow-up system to increase customer engagement.</span></p></li>
        <li><p><span>Encouraged organic review generation to improve social proof.</span></p></li>
    </ul>
    
    <strong><p>4. Brand Awareness Boost</p></strong>
    <ul>
        <li><p><span>Enhanced Amazon Storefront for a more compelling brand presence.</span></p></li>
        <li><p><span>Launched off-Amazon marketing efforts to drive additional traffic.</span></p></li>
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
                  <p>Our strategic interventions led to measurable success:</p>
                  <ul>
                      <li><p><span>Revenue Growth – Sales surged with optimized listings and PPC improvements.</span></p></li>
                      <li><p><span>Conversion Boost – Higher-quality content and better targeting led to a stronger CVR.</span></p></li>
                      <li><p><span>PPC Efficiency – ACoS dropped from 51.2% to 23.5%, significantly improving ad profitability. </span></p></li>
                      <li><p><span> Stronger Customer Trust – Proactive review management maintained high ratings and credibility. </span></p></li>
                      <li><p><span>Increased Brand Visibility – Strengthened presence both on Amazon and through external channels.</span></p></li>  
                  </ul> 
                  <strong><p className='bottom-p'>Through structured optimization and data-driven strategies, Optivida Lozenges transformed from a stagnant listing to a high-performing, scalable product on Amazon.</p></strong>

                </div>
                <div className='image-section-results'>
              <img src={results} alt="Logo" />        
                </div>
              </div>
            </div>
    
</div>
  );
};

export default CaseStudiesPage1;