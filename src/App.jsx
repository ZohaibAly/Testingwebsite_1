import React from 'react';
import Navbar from './Component/NavbarComponent/NavbarComponent';
import BrandLogosComp from './Component/Home/BrandCarouselComp/BrandCarouselComp';
import './App.css';
import AmazonHeroComponent from './Component/Home/AmazonHeroComp/AmazonHeroComp';
import CaseStudy from './Component/Home/CaseStudyComp/CaseStudyComp';
import CaseStudiesContainer from './Component/Home/SuccessCard/CardContainer';
import Business from './Component/Home/BusinessMatrics/BusinessMatrics';
import OffersGrid from './Component/Home/OfferGrid/OfferGrid';
import FooterComp from './Component/Footer/Footer';
import FreeStoreComp from './Component/FreeStore/FreeStore';
import Testmonial from './Component/Home/TestimonialSection/TestimonialSection';
// import Servicespop from './Component/ServicesPage/Services/Services';
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
      image: Cardimage2,
      growth: '+957.2%',
      category: 'Grocery',
      description: '7X Revenue Growth by Overcoming Compliance & Inventory Challenges',
      tags: ['ctr'],
    },
    {
      id: 2,
      image: Cardimage5,
      growth: '+577%',
      category: 'Supplements',
      description: '400% Increase in Sales and Profitability For Supplements Brand',
      tags: ['ctr'],
    },
    {
      id: 3,
      image: Cardimage4,
      growth: '2x',
      category: 'Healthcare',
      description: "2X Sales Growth – Revitalizing a brand's Lozenges on Amazon",
      tags: ['ctr'],
    },
    
    // Amazon PPC variants
    {
      id: 4,
      image: Cardimage3, // Same image as id 1
      growth: '+577%',
      category: 'Supplements',
      description: '400% Increase in Sales and Profitability For Supplements Brand',
      tags: ['amazon'],
    },
    {
      id: 5,
      image: Cardimage1, // Same image as id 2
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

  
  return (
    <div className="App">
      <Navbar />
      <AmazonHeroComponent />
      <BrandLogosComp />
      <CaseStudy />
      <CaseStudiesContainer 
        caseStudyData={caseStudyData}
        categoryButtons={categoryButtons}
      />
      <Business/>
      <OffersGrid/>
      <Testmonial/>
      <FreeStoreComp/>
      <FooterComp/>
      
    </div>
  );
}

export default App;