import React, { useState } from 'react';
import Navbar from './Component/NavbarComponent/NavbarComponent';
import BrandLogosComp from './Component/Home/BrandCarouselComp/BrandCarouselComp';
import './App.css';
import AmazonHeroComponent from './Component/Home/AmazonHeroComp/AmazonHeroComp';
import CaseStudy from './Component/Home/CaseStudyComp/CaseStudyComp';
import SuccessCard from './Component/Home/SuccessCard/SuccessCard';
import Cardimage1 from './assets/image-card-1.png';
import Cardimage2 from './assets/image-card-2.png';
import Cardimage3 from './assets/image-card-3.png';
import Cardimage4 from './assets/image-card-4.png';
import Cardimage5 from './assets/image-card-5.png';

function App() {
  // Define filter categories
  const categoryButtons = [
    { id: 'ctr', label: 'CTR%/CVR% Optimization' },
    { id: 'amazon', label: 'Amazon PPC' },
    { id: 'hijacker', label: 'Hijacker Removal' },
    { id: 'designs', label: 'Designs' },
    { id: 'listings', label: 'Listings SEO & Optimization' }
  ];
  
  // Case studies data with all variants for each image
  const caseStudyData = [
    // Default/CTR variants
    {
      id: 1,
      image: Cardimage1,
      growth: '+957.2%',
      category: 'Grocery',
      description: '7X Revenue Growth by Overcoming Compliance & Inventory Challenges',
      tags: ['ctr'],
    },
    {
      id: 2,
      image: Cardimage2,
      growth: '+577%',
      category: 'Supplements',
      description: '400% Increase in Sales and Profitability For Supplements Brand',
      tags: ['ctr'],
    },
    
    // Amazon PPC variants
    {
      id: 3,
      image: Cardimage1, // Same image as id 1
      growth: '+577%',
      category: 'Supplements',
      description: '400% Increase in Sales and Profitability For Supplements Brand',
      tags: ['amazon'],
    },
    {
      id: 4,
      image: Cardimage2, // Same image as id 2
      growth: '+781.7%',
      category: 'Grocery',
      description: '6X YoY Growth for Food Brand Through A to Z Management',
      tags: ['amazon'],
    },
    
    // Hijacker removal variants
    {
      id: 5,
      image: Cardimage1, // Same image as id 1
      growth: '3x',
      category: 'Babycare',
      description: '3X Revenue Growth by Implementing Amazon Transparency Program for Supplement Brand',
      tags: ['hijacker'],
    },
    {
      id: 6,
      image: Cardimage2, // Same image as id 2
      growth: '2x',
      category: 'Healthcare',
      description: "2X Sales Growth – Revitalizing a brand's Lozenges on Amazon",
      tags: ['hijacker'],
    },
    
    // Designs variants
    {
      id: 7,
      image: Cardimage1, // Same image as id 1
      growth: '+43.8%',
      category: 'Supplements',
      description: "Scaling a brand's Elderberry Supplement on Amazon",
      tags: ['designs'],
    },
    {
      id: 8,
      image: Cardimage2, // Same image as id 2
      growth: '+2x',
      category: 'Babycare',
      description: "2X Sales Growth – Scaling a brand's Vitamin D Drops on Amazon",
      tags: ['designs'],
    },
    
    // Listings SEO variants
    {
      id: 9,
      image: Cardimage1, // Same image as id 1
      growth: '+57%',
      category: 'Supplements',
      description: "57% Revenue Growth – Scaling a brand's Vitamin C & Zinc on Amazon",
      tags: ['listings'],
    },
    {
      id: 10,
      image: Cardimage2, // Same image as id 2
      growth: '+2.5x',
      category: 'Multivitamins',
      description: "2.5X Sales Growth – Scaling a brand's Bariatric Multivitamin 45mg 90ct on Amazon",
      tags: ['listings'],
    }
  ];

  // State to track active filter
  const [activeFilter, setActiveFilter] = useState('ctr'); // Default to first filter

  // Get unique image URLs (we'll always show the same set of images)
  const uniqueImages = [Cardimage1, Cardimage2]; // We're using the same 2 images consistently
  
  // Find case studies for each unique image based on the active filter
  const getContentForImage = (imageUrl) => {
    // Try to find a case study with this image and matching tag
    const matchingItem = caseStudyData.find(
      item => item.image === imageUrl && item.tags.includes(activeFilter)
    );
    
    // If no match found, return the first item with this image
    return matchingItem || caseStudyData.find(item => item.image === imageUrl);
  };

  // Get content for each image based on the active filter
  const displayedItems = uniqueImages.map(imageUrl => getContentForImage(imageUrl));
  
  return (
    <div className="App">
      <Navbar />
      <AmazonHeroComponent />
      <BrandLogosComp />
      <CaseStudy />
      {/* Case Studies Section */}
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
          <button className="view-all-btn" onClick={() => setActiveFilter('ctr')}>
            View All Case Studies
          </button>
        </div>
      </div>
      
     
    </div>
  );
}

export default App;