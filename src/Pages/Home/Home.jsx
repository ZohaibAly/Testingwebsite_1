import React, { lazy, Suspense } from 'react';
import BrandLogosComp from '../../Component/Home/BrandCarouselComp/BrandCarouselComp';
import './Home.css';
import AmazonHeroComponent from '../../Component/Home/AmazonHeroComp/AmazonHeroComp';

const CaseStudy = lazy(() => import('../../Component/Home/CaseStudyComp/CaseStudyComp'));
const CaseStudiesContainer = lazy(() => import('../../Component/Home/SuccessCard/CardContainer'));
const Business = lazy(() => import('../../Component/Home/BusinessMatrics/BusinessMatrics'));
const OffersGrid = lazy(() => import('../../Component/Home/OfferGrid/OfferGrid'));
const FAQSection = lazy(() => import('../../Component/FAQ/FAQ'));
const FreeStoreComp = lazy(() => import('../../Component/FreeStore/FreeStore'));


import Cardimage1 from '../../assets/image-card-1.jpg';
import Cardimage2 from '../../assets/image-card-2.jpg';
import Cardimage3 from '../../assets/image-card-3.jpg';
import Cardimage4 from '../../assets/image-card-4.jpg';
import Cardimage5 from '../../assets/image-card-5.jpg';

function Home() {
  // Define filter categories
  const categoryButtons = [
       { id: 'conversion', label: 'Engagement & Sales Rate Enhancement' },
    { id: 'sponsored', label: 'Marketplace Sponsored Ads' },
    { id: 'protection', label: 'Unauthorized Seller Elimination' },
    { id: 'catalog', label: 'Product Page Search & Refinement' }
  ];
  
  // Case studies data with all variants for each image
  const caseStudyData = [
    // Default/CTR variants
    {
      id: 1,
      image: Cardimage2,
      growth: '+850.3%',
      category: 'Food & Beverage',
      description: 'Nine-Fold Performance Amplification Via Strategic Regulatory Navigation & Inventory Orchestration',
      permalink: "/case-study-2-5x-sales-growth-scaling-a-brands-bariatric-multivitamin-45mg-90ct-on-amazon",
      tags: ['conversion'],
    },
    {
      id: 2,
      image: Cardimage5,
      growth: '+623%',
      category: 'Nutritional Products',
      description: 'Quadruple Performance Elevation With Profitability Enhancement For Health Enterprise',
      permalink: "/case-study-400-increase-in-sales-and-profitability-for-supplements-brand",
      tags: ['conversion'],
    },
    {
      id: 3,
      image: Cardimage4,
      growth: '2.3x',
      category: 'Medical Supplies',
      description: "Double-Digit Performance Surge – Transforming Enterprise's Throat Comfort Solutions Via Platform Strategy",
      permalink: "/case-study-2x-sales-growth-revitalizing-a-brands-lozenges-on-amazon",
      tags: ['conversion'],
    },
    
    // Amazon PPC variants
    {
      id: 4,
      image: Cardimage3, // Same image as id 1
     growth: '+48.2%',
      category: 'Nutritional Products',
      description: "Amplifying Enterprise's Botanical Immunity Formula Through Platform Domination",

      permalink: "/case-study-scaling-a-brands-elderberry-supplement-on-amazon",
      tags: ['sponsored'],
    },
    {
      id: 5,
      image: Cardimage1, // Same image as id 2
 growth: '+64%',
      category: 'Nutritional Products',
      description: 'Sixty-Four Percent Performance Leap – Propelling Enterprise Defense Nutrient Blend Via Marketplace Tactics',

      permalink: "/case-study-57-revenue-growth-scaling-a-brands-vitamin-c-zinc-on-amazon",
      tags: ['sponsored'],
    },
    
    // Hijacker removal variants
    {
      id: 6,
      image: Cardimage1, // Same image as id 1
     growth: '3.4x',
      category: 'Infant Care',
      description: 'Triple-Digit Performance Explosion Via Platform Verification Framework For Health Enterprise',

      permalink: "/case-study-3x-revenue-growth-by-implementing-amazon-transparency-program-for-supplement-brand",
      tags: ['protection'],
    },
    {
      id: 7,
      image: Cardimage2, // Same image as id 2
 growth: '892.5%',
      category: 'Food & Beverage',
      description: "Eight-Fold Year-Over-Year Trajectory For Edible Enterprise Via Comprehensive Operational Mastery",

      permalink: "/case-study-6x-yoy-growth-for-food-brand-through-a-to-z-management",
      tags: ['protection'],
    },
    
   
    
    // Listings SEO variants
    {
      id: 10,
      image: Cardimage1, // Same image as id 1
      growth: '+2.7x',
      category: 'Wellness Formulas',
      description: "Triple-Near Performance Explosion – Accelerating Enterprise's Post-Surgical Nutrition Complex Via Platform Optimization",

      permalink: "/case-study-2-5x-sales-growth-scaling-a-brands-bariatric-multivitamin-45mg-90ct-on-amazon",
      tags: ['catalog'],
    },
    {
      id: 11,
      image: Cardimage2, // Same image as id 2
      growth: '+2.1x',
      category: 'Infant Care',
      description: "Dual-Fold Performance Amplification – Maximizing Enterprise's Baby Vitamin Solution Through Marketplace Dominance",
      permalink: "/case-study-2x-sales-growth-scaling-a-brands-vitamin-d-drops-on-amazon",
      tags: ['catalog'],
    }
  ];

  return (
    <div className="HomePage">
      <AmazonHeroComponent />
   <BrandLogosComp />   

      <Suspense fallback={<div>Loading...</div>}>
        <CaseStudy />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <CaseStudiesContainer 
        caseStudyData={caseStudyData}
        categoryButtons={categoryButtons}
      />
       </Suspense>
       <Suspense fallback={<div>Loading...</div>}>
      <Business/>
      </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <OffersGrid/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <FAQSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <FreeStoreComp/>
      </Suspense>
    </div>
  );
    
}

export default Home;