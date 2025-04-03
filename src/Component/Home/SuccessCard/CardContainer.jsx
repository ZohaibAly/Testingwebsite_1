import React, { useState } from 'react';
import SuccessCard from '../SuccessCard/SuccessCard';
import './CardContainer.css';
const CaseStudiesContainer = (props) => {
    const { caseStudyData, categoryButtons } = props;
 // State to track active filter
 const [activeFilter, setActiveFilter] = useState('ctr'); // Default to first filter

 // Get displayed items based on active filter
 const getDisplayedItems = () => {
   // For Designs filter, return empty array (no cards)
   if (activeFilter === 'designs') {
     return [];
   }
   
   // For CTR filter, return 3 specific cards
   if (activeFilter === 'ctr') {
     return caseStudyData.filter(item => item.tags.includes('ctr'));
   }
   
   // For Amazon PPC, get the 2 cards with Amazon tag
   if (activeFilter === 'amazon') {
     return caseStudyData.filter(item => item.tags.includes('amazon'));
   }
   
   // For Hijacker Removal and Listings SEO, use same images as Amazon but different content
   const amazonCards = caseStudyData.filter(item => item.tags.includes('amazon'));
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
           <span className="case-studies-tag">Case Study</span>
           <h2>My Case Studies</h2>
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
           />
         ))}
       </div>

       <div className="view-all-container">
         <button className="Card-viewallbtn" onClick={() => setActiveFilter('ctr')}>
           View All Case Studies
         </button>
       </div>
     </div>

 );
};
export default CaseStudiesContainer;

