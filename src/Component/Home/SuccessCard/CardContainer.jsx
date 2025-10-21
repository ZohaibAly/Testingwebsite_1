import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuccessCard from '../SuccessCard/SuccessCard';
import './CardContainer.css';
const CaseStudiesContainer = (props) => {
    const { caseStudyData, categoryButtons } = props;
 // State to track active filter
 const [activeFilter, setActiveFilter] = useState('conversion'); // Default to first filter

 // Get displayed items based on active filter
 const getDisplayedItems = () => {

   // For CTR filter, return 3 specific cards
   if (activeFilter === 'conversion') {
     return caseStudyData.filter(item => item.tags.includes('conversion'));
   }
   
   // For Amazon PPC, get the 2 cards with Amazon tag
   if (activeFilter === 'sponsored') {
     return caseStudyData.filter(item => item.tags.includes('sponsored'));
   }
   
   // For Hijacker Removal and Listings SEO, use same images as Amazon but different content
   const amazonCards = caseStudyData.filter(item => item.tags.includes('sponsored'));
   const currentFilterCards = caseStudyData.filter(item => item.tags.includes(activeFilter));
   
   // Return cards with Amazon images but current filter content
   return amazonCards.map((amazonCard, index) => {
     return {
       ...currentFilterCards[index],
       image: amazonCard.image
     };
   });
 };

 // Get current cards to display
 const displayedItems = getDisplayedItems();
 
 return (
 
     <div className="case-studies-section">
       <div className="case-studies-header">
         <div className="case-studies-title">
           <span className="case-studies-tag">Work Showcase</span>
           <h2>Evidence of Impact</h2>
         </div>
         
         <div className="category-filters">
           {categoryButtons.map(category => (
             <button 
               key={category.id}
               className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
               onClick={() => setActiveFilter(category.id)}
             >
               {category.label}
             </button>
           ))}
         </div>
       </div>

       <div className="case-studies-grid">
         {displayedItems.map((item, index) => (
           <SuccessCard
             key={`card-${index}`}
             image={item.image}
             growth={item.growth}
             category={item.category}
             description={item.description}
             permalink={item.permalink}
           />
         ))}
       </div>
      


       <div className="view-all-container">
       <Link to="/case-studies">
       <button className="Card-viewallbtn" >
           View All Case Studies
         </button></Link>
    
       </div>
     </div>

 );
};
export default CaseStudiesContainer;

