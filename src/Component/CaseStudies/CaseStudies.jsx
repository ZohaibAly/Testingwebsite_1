// export default CaseStudies;
import React, { useState } from 'react';
import './CaseStudies.css';
import { Link } from 'react-router-dom';
import image1 from '../../assets/casestudies-1.png';
import image2 from '../../assets/casestudies-2.png';
import image3 from '../../assets/casestudies-3.png';
import image4 from '../../assets/casestudies-4.png';
import image5 from '../../assets/casestudies-5.png';
import image6 from '../../assets/casestudies-6.png';
import image7 from '../../assets/casestudies-7.png';
import image8 from '../../assets/casestudies-8.png';
import image9 from '../../assets/casestudies-9.png';

const caseStudiesData = [
  { id: 1, permalink: "/case-study-2-5x-sales-growth-scaling-a-brands-bariatric-multivitamin-45mg-90ct-on-amazon", image: image1, title: "Supplements Multivitamins", subtitle: "Transforming Bariatric Nutrition Through Data-Driven Optimization", result: "Achieved 150% Revenue Surge for Specialized 45mg Multivitamin Formula"  },
  { id: 2, permalink: "/case-study-2x-sales-growth-revitalizing-a-brands-lozenges-on-amazon", image: image2, title: "Health & Personal Care", subtitle: "Reviving Market Position with Enhanced Visibility Tactics", 
    result: "Doubled Monthly Performance for Throat Relief Product Line"  },
  { id: 3, permalink: "/case-study-2x-sales-growth-scaling-a-brands-vitamin-d-drops-on-amazon", image: image3, title: "Baby Products & Supplements", subtitle: "Elevating Infant Wellness Solutions with Parent-Focused Messaging", 
    result: "100% Increase in Pediatric Vitamin D Drop Conversions"  },
  { id: 4, permalink: "/case-study-3x-revenue-growth-by-implementing-amazon-transparency-program-for-supplement-brand", image: image4, title: "Baby Products & Supplements", subtitle: "Protecting Brand Integrity While Eliminating Unauthorized Sellers", 
    result: "Tripled Income via Transparency Program and Counterfeit Prevention"  },
  { id: 5, permalink: "/case-study-400-increase-in-sales-and-profitability-for-supplements-brand", image: image5, title: "Supplements", subtitle: "Comprehensive Overhaul Delivering Exponential Market Expansion", 
    result: "5X Profit Multiplication Through Full-Funnel Optimization" },
  { id: 6, permalink: "/case-study-57-revenue-growth-scaling-a-brands-vitamin-c-zinc-on-amazon", image: image6, title: "Supplements", subtitle: "Immunity Category Dominance via Precision Targeting", 
    result: "57% Revenue Lift for Immune Support Combination Formula"  },
  { id: 7, permalink: "/case-study-6x-yoy-growth-for-food-brand-through-a-to-z-management", image: image7, title: "Grocery & Gourmet Food", subtitle: "End-to-End Account Mastery Eliminating Operational Bottlenecks", 
    result: "600% Year over Year Expansion Through Complete Platform Control"  },
  { id: 8, permalink: "/case-study-7x-revenue-growth-by-overcoming-compliance-inventory-challenges", image: image8, title: "Grocery & Gourmet Food", subtitle: "Resolving Regulatory Hurdles to Unlock Untapped Potential", 
    result: "Sevenfold Financial Growth via Compliance and Stock Solutions"  },
  { id: 9, permalink: "/case-study-scaling-a-brands-elderberry-supplement-on-amazon", image: image9, title: "Supplements", subtitle: "Seasonal Wellness Product Amplification Strategy", 
    result: "Elderberry Line Expansion with Enhanced Search Ranking"  },
];

const CaseStudies = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount(caseStudiesData.length); 
  };

  return (
  <>
    <div className="Case-showcase-study-heading" id="showcase-study-heading">
        <h2><span>Case</span> Studies</h2>
      </div>
    <div className='casestudies-main'>     
      {caseStudiesData.slice(0, visibleCount).map((item, index) => (
        <div className="casestudies-item" key={item.id}>
          {index % 2 === 0 ? (
            <>
              <div className="casestudiesimg"><img src={item.image} alt="Case Study" /></div>
              <div className="casestudies-content">
                <div className='heading-text'><h3>{item.title}</h3></div>
                <div className='para-text'><h4>{item.subtitle}</h4></div>
                <div className='button-all'>
                  <button>Sales</button>
                  <button>Marketing</button>
                  <button>Product Management</button>
                </div>
                <div className='para-down'><span>{item.result}</span></div>
                <div className='btn-last'><Link to={item.permalink}><button>View Case Study</button></Link></div>
              </div>
            </>
          ) : (
            <>
              <div className="casestudies-content">
                <div className='heading-text'><h3>{item.title}</h3></div>
                <div className='para-text'><h4>{item.subtitle}</h4></div>
                <div className='button-all'>
                  <button>Sales</button>
                  <button>Marketing</button>
                  <button>Product Management</button>
                </div>
                <div className='para-down'><span>{item.result}</span></div>
                <div className='btn-last'><Link to={item.permalink}><button>View Case Study</button></Link></div>
              </div>
              <div className="casestudiesimg"><img src={item.image} alt="Case Study" /></div>
            </>
          )}
        </div>
      ))}

      {visibleCount < caseStudiesData.length && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link className='lm-btn' to="#">
                  <button onClick={loadMore}>
                    Load More
                  </button>
            </Link>
        </div>
      )}
    </div>
    </>
  );
};

export default CaseStudies;
