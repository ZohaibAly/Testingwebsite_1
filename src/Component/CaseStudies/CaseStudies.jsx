// import React from 'react';
// import './CaseStudies.css';
// import { Link } from 'react-router-dom';
// import image1 from '../../assets/casestudies-1.png';
// import image2 from '../../assets/casestudies-2.png';
// import image3 from '../../assets/casestudies-3.png';
// import image4 from '../../assets/casestudies-4.png';
// import image5 from '../../assets/casestudies-5.png';
// import image6 from '../../assets/casestudies-6.png';
// import image7 from '../../assets/casestudies-7.png';
// import image8 from '../../assets/casestudies-8.png';
// import image9 from '../../assets/casestudies-9.png';


// const CaseStudies = () => {
//     return(
//         <div className='casestudies-main'>
//             {/* 1st */}
//             <div className="casestudies-item">
//                 <div className="casestudiesimg">
//                 <img src={image1} alt="Case Study" />
//                 </div>
//                 <div className="casestudies-content">
//                     <div className='heading-text'>
//                         <h3>Supplements Multivitamins</h3>
//                     </div>
//                     <div className='para-text'>
//                         <h4>Strategic Growth for Bariatric Multivitamins Brand</h4>
//                     </div>
//                     <div className='button-all'>
//                             <button>Sales</button>
//                             <button>UX & Design</button>
//                             <button>Marketing</button>
//                             <button>Product Management</button>
//                     </div>
//                     <div className='para-down'>
//                         <span>
//                         2.5X Sales Growth – Scaling a brand’s Bariatric Multivitamin 45mg 90ct on Amazon</span>
//                     </div>
//                     <div className='btn-last'>
//                     <Link to="#">
//                             <button>View Case Study</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* 2nd */}
//             <div className="casestudies-item">
//                 <div className="casestudies-content">
//                     <div className='heading-text'>
//                         <h3>Health & Personal Care</h3>
//                     </div>
//                     <div className='para-text'>
//                         <h4>Strategic Growth for Health & Personal Care Brand</h4>
//                     </div>
//                     <div className='button-all'>
//                             <button>Sales</button>
//                             <button>UX & Design</button>
//                             <button>Marketing</button>
//                             <button>Product Management</button>
//                     </div>
//                     <div className='para-down'>
//                         <span>
//                         2X Sales Growth – Revitalizing a brand’s Lozenges on Amazon</span>
//                     </div>
//                     <div className='btn-last'>
//                     <Link to="#">
//                             <button>View Case Study</button>
//                         </Link>
//                     </div>
//                 </div>                
//                 <div className="casestudiesimg">
//                 <img src={image2} alt="Case Study" />
//                 </div>
//             </div>

//             {/* 3rd */}
//             <div className="casestudies-item">
//                 <div className="casestudiesimg">
//                 <img src={image3} alt="Case Study" />
//                 </div>
//                 <div className="casestudies-content">
//                     <div className='heading-text'>
//                         <h3>Baby Products & Supplements</h3>
//                     </div>
//                     <div className='para-text'>
//                         <h4>Strategic Growth for Baby Products & Supplements Brand</h4>
//                     </div>
//                     <div className='button-all'>
//                             <button>Sales</button>
//                             <button>UX & Design</button>
//                             <button>Marketing</button>
//                             <button>Product Management</button>
//                     </div>
//                     <div className='para-down'>
//                         <span>
//                         Case Study: 2X Sales Growth – Scaling a brand’s Vitamin D Drops on Amazon</span>
//                     </div>
//                     <div className='btn-last'>
//                     <Link to="#">
//                             <button>View Case Study</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* 4rth */}
//             <div className="casestudies-item">
//                 <div className="casestudies-content">
//                     <div className='heading-text'>
//                         <h3>Baby Products & Supplements</h3>
//                     </div>
//                     <div className='para-text'>
//                         <h4>Strategic Growth and Hijacker Removal for Baby Products & Supplements Brand</h4>
//                     </div>
//                     <div className='button-all'>
//                             <button>Sales</button>
//                             <button>UX & Design</button>
//                             <button>Marketing</button>
//                             <button>Product Management</button>
//                     </div>
//                     <div className='para-down'>
//                         <span>
//                         3X Revenue Growth by Implementing Amazon Transparency Program for Supplement Brand</span>
//                     </div>
//                     <div className='btn-last'>
//                     <Link to="#">
//                             <button>View Case Study</button>
//                         </Link>
//                     </div>
//                 </div>                
//                 <div className="casestudiesimg">
//                 <img src={image4} alt="Case Study" />
//                 </div>
//             </div>
            
//             {/* 5th */}

//             <div className="casestudies-item">
//                 <div className="casestudiesimg">
//                 <img src={image5} alt="Case Study" />
//                 </div>
//                 <div className="casestudies-content">
//                     <div className='heading-text'>
//                         <h3>Supplements</h3>
//                     </div>
//                     <div className='para-text'>
//                         <h4>Strategic Growth for Supplements Brand</h4>
//                     </div>
//                     <div className='button-all'>
//                             <button>Sales</button>
//                             <button>UX & Design</button>
//                             <button>Marketing</button>
//                             <button>Product Management</button>
//                     </div>
//                     <div className='para-down'>
//                         <span>
//                         400% Increase in Sales and Profitability For Supplements Brand</span>
//                     </div>
//                     <div className='btn-last'>
//                     <Link to="#">
//                             <button>View Case Study</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* 6th */}
//             <div className="casestudies-item">
//                 <div className="casestudies-content">
//                     <div className='heading-text'>
//                         <h3>Supplements</h3>
//                     </div>
//                     <div className='para-text'>
//                         <h4>Strategic Growth for Supplements Brand</h4>
//                     </div>
//                     <div className='button-all'>
//                             <button>Sales</button>
//                             <button>UX & Design</button>
//                             <button>Marketing</button>
//                             <button>Product Management</button>
//                     </div>
//                     <div className='para-down'>
//                         <span>
//                         57% Revenue Growth – Scaling a brand’s Vitamin C & Zinc on Amazon</span>
//                     </div>
//                     <div className='btn-last'>
//                     <Link to="#">
//                             <button>View Case Study</button>
//                         </Link>
//                     </div>
//                 </div>                
//                 <div className="casestudiesimg">
//                 <img src={image6} alt="Case Study" />
//                 </div>
//             </div>

//             {/* 7th */}
//             <div className="casestudies-item">
//                 <div className="casestudiesimg">
//                 <img src={image7} alt="Case Study" />
//                 </div>
//                 <div className="casestudies-content">
//                     <div className='heading-text'>
//                         <h3>Grocery & Gourmet Food</h3>
//                     </div>
//                     <div className='para-text'>
//                         <h4>Strategic Growth and Hijacker Removal for Grocery & Gourmet Food Brand</h4>
//                     </div>
//                     <div className='button-all'>
//                             <button>Sales</button>
//                             <button>UX & Design</button>
//                             <button>Marketing</button>
//                             <button>Product Management</button>
//                     </div>
//                     <div className='para-down'>
//                         <span>
//                         6X YoY Growth for Food Brand Through A to Z Management</span>
//                     </div>
//                     <div className='btn-last'>
//                     <Link to="#">
//                             <button>View Case Study</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* 8th */}
//             <div className="casestudies-item">
//                 <div className="casestudies-content">
//                     <div className='heading-text'>
//                         <h3>Grocery & Gourmet Food</h3>
//                     </div>
//                     <div className='para-text'>
//                         <h4>Strategic Growth for Grocery & Gourmet Food Brand</h4>
//                     </div>
//                     <div className='button-all'>
//                             <button>Sales</button>
//                             <button>UX & Design</button>
//                             <button>Marketing</button>
//                             <button>Product Management</button>
//                     </div>
//                     <div className='para-down'>
//                         <span>
//                         7X Revenue Growth by Overcoming Compliance & Inventory Challenges</span>
//                     </div>
//                     <div className='btn-last'>
//                     <Link to="#">
//                             <button>View Case Study</button>
//                         </Link>
//                     </div>
//                 </div>                
//                 <div className="casestudiesimg">
//                 <img src={image8} alt="Case Study" />
//                 </div>
//             </div>

//             {/* 9th */}
//             <div className="casestudies-item">
//                 <div className="casestudiesimg">
//                 <img src={image9} alt="Case Study" />
//                 </div>
//                 <div className="casestudies-content">
//                     <div className='heading-text'>
//                         <h3>Supplements</h3>
//                     </div>
//                     <div className='para-text'>
//                         <h4>Strategic Growth for Supplements Brand</h4>
//                     </div>
//                     <div className='button-all'>
//                             <button>Sales</button>
//                             <button>UX & Design</button>
//                             <button>Marketing</button>
//                             <button>Product Management</button>
//                     </div>
//                     <div className='para-down'>
//                         <span>
//                         Scaling a brand’s Elderberry Supplement on Amazon</span>
//                     </div>
//                     <div className='btn-last'>
//                     <Link to="#">
//                             <button>View Case Study</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <Link className='lm-btn' to="#">
//                  <button className="px-4 py-2 bg-blue-500 text-white rounded">
//                    Load More
//                  </button>
//             </Link>
//         </div>
        
//     )
// }

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
  { id: 1, image: image1, title: "Supplements Multivitamins", subtitle: "Strategic Growth for Bariatric Multivitamins Brand", result: "2.5X Sales Growth – Scaling a brand’s Bariatric Multivitamin 45mg 90ct on Amazon" },
  { id: 2, image: image2, title: "Health & Personal Care", subtitle: "Strategic Growth for Health & Personal Care Brand", result: "2X Sales Growth – Revitalizing a brand’s Lozenges on Amazon" },
  { id: 3, image: image3, title: "Baby Products & Supplements", subtitle: "Strategic Growth for Baby Products & Supplements Brand", result: "2X Sales Growth – Scaling a brand’s Vitamin D Drops on Amazon" },
  { id: 4, image: image4, title: "Baby Products & Supplements", subtitle: "Strategic Growth and Hijacker Removal for Baby Products & Supplements Brand", result: "3X Revenue Growth by Implementing Amazon Transparency Program for Supplement Brand" },
  { id: 5, image: image5, title: "Supplements", subtitle: "Strategic Growth for Supplements Brand", result: "400% Increase in Sales and Profitability For Supplements Brand" },
  { id: 6, image: image6, title: "Supplements", subtitle: "Strategic Growth for Supplements Brand", result: "57% Revenue Growth – Scaling a brand’s Vitamin C & Zinc on Amazon" },
  { id: 7, image: image7, title: "Grocery & Gourmet Food", subtitle: "Strategic Growth and Hijacker Removal for Grocery & Gourmet Food Brand", result: "6X YoY Growth for Food Brand Through A to Z Management" },
  { id: 8, image: image8, title: "Grocery & Gourmet Food", subtitle: "Strategic Growth for Grocery & Gourmet Food Brand", result: "7X Revenue Growth by Overcoming Compliance & Inventory Challenges" },
  { id: 9, image: image9, title: "Supplements", subtitle: "Strategic Growth for Supplements Brand", result: "Scaling a brand’s Elderberry Supplement on Amazon" },
];

const CaseStudies = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 items

  const loadMore = () => {
    setVisibleCount(caseStudiesData.length); // Show all
  };

  return (
    <div className='casestudies-main'>
      {caseStudiesData.slice(0, visibleCount).map((item, index) => (
        <div className="casestudies-item" key={item.id}>
          {/* Alternate image and content placement */}
          {index % 2 === 0 ? (
            <>
              <div className="casestudiesimg"><img src={item.image} alt="Case Study" /></div>
              <div className="casestudies-content">
                <div className='heading-text'><h3>{item.title}</h3></div>
                <div className='para-text'><h4>{item.subtitle}</h4></div>
                <div className='button-all'>
                  <button>Sales</button>
                  <button>UX & Design</button>
                  <button>Marketing</button>
                  <button>Product Management</button>
                </div>
                <div className='para-down'><span>{item.result}</span></div>
                <div className='btn-last'><Link to="#"><button>View Case Study</button></Link></div>
              </div>
            </>
          ) : (
            <>
              <div className="casestudies-content">
                <div className='heading-text'><h3>{item.title}</h3></div>
                <div className='para-text'><h4>{item.subtitle}</h4></div>
                <div className='button-all'>
                  <button>Sales</button>
                  <button>UX & Design</button>
                  <button>Marketing</button>
                  <button>Product Management</button>
                </div>
                <div className='para-down'><span>{item.result}</span></div>
                <div className='btn-last'><Link to="#"><button>View Case Study</button></Link></div>
              </div>
              <div className="casestudiesimg"><img src={item.image} alt="Case Study" /></div>
            </>
          )}
        </div>
      ))}

      {/* Load More button */}
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
  );
};

export default CaseStudies;
