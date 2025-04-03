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
    {
      id: 3,
      image: Cardimage3,
      growth: '2x',
      category: 'Healthcare',
      description: "2X Sales Growth – Revitalizing a brand's Lozenges on Amazon",
      tags: ['ctr'],
    },
    
    // Amazon PPC variants
    {
      id: 4,
      image: Cardimage1, // Same image as id 1
      growth: '+577%',
      category: 'Supplements',
      description: '400% Increase in Sales and Profitability For Supplements Brand',
      tags: ['amazon'],
    },
    {
      id: 5,
      image: Cardimage2, // Same image as id 2
      growth: '+781.7%',
      category: 'Grocery',
      description: '6X YoY Growth for Food Brand Through A to Z Management',
      tags: ['amazon'],
    },
    
    // Hijacker removal variants
    {
      id: 6,
      image: Cardimage1, // Same image as id 1
      growth: '3x',
      category: 'Babycare',
      description: '3X Revenue Growth by Implementing Amazon Transparency Program for Supplement Brand',
      tags: ['hijacker'],
    },
    {
      id: 7,
      image: Cardimage2, // Same image as id 2
      growth: '2x',
      category: 'Healthcare',
      description: "2X Sales Growth – Revitalizing a brand's Lozenges on Amazon",
      tags: ['hijacker'],
    },
    
    // Designs variants
    {
      id: 8,
      image: Cardimage1, // Same image as id 1
      growth: '+43.8%',
      category: 'Supplements',
      description: "Scaling a brand's Elderberry Supplement on Amazon",
      tags: ['designs'],
    },
    {
      id: 9,
      image: Cardimage2, // Same image as id 2
      growth: '+2x',
      category: 'Babycare',
      description: "2X Sales Growth – Scaling a brand's Vitamin D Drops on Amazon",
      tags: ['designs'],
    },
    
    // Listings SEO variants
    {
      id: 10,
      image: Cardimage1, // Same image as id 1
      growth: '+57%',
      category: 'Supplements',
      description: "57% Revenue Growth – Scaling a brand's Vitamin C & Zinc on Amazon",
      tags: ['listings'],
    },
    {
      id: 11,
      image: Cardimage2, // Same image as id 2
      growth: '+2.5x',
      category: 'Multivitamins',
      description: "2.5X Sales Growth – Scaling a brand's Bariatric Multivitamin 45mg 90ct on Amazon",
      tags: ['listings'],
    }
  ];

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