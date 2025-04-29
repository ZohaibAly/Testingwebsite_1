import React, { lazy, Suspense } from 'react';
import BrandLogosComp from '../../Component/Home/BrandCarouselComp/BrandCarouselComp';
import './Home.css';
import AmazonHeroComponent from '../../Component/Home/AmazonHeroComp/AmazonHeroComp';

const CaseStudy = lazy(() => import('../../Component/Home/CaseStudyComp/CaseStudyComp'));
const CaseStudiesContainer = lazy(() => import('../../Component/Home/SuccessCard/CardContainer'));
const Business = lazy(() => import('../../Component/Home/BusinessMatrics/BusinessMatrics'));
const OffersGrid = lazy(() => import('../../Component/Home/OfferGrid/OfferGrid'));
const Testmonial = lazy(() => import('../../Component/TestimonialSection/TestimonialSection'));
const FAQSection = lazy(() => import('../../Component/FAQ/FAQ'));
const FreeStoreComp = lazy(() => import('../../Component/FreeStore/FreeStore'));


import Cardimage1 from '../../assets/image-card-1.png';
import Cardimage2 from '../../assets/image-card-2.png';
import Cardimage3 from '../../assets/image-card-3.png';
import Cardimage4 from '../../assets/image-card-4.png';
import Cardimage5 from '../../assets/image-card-5.png';

function Home() {
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
      permalink: "/case-study-2-5x-sales-growth-scaling-a-brands-bariatric-multivitamin-45mg-90ct-on-amazon",
      tags: ['ctr'],
    },
    {
      id: 2,
      image: Cardimage5,
      growth: '+577%',
      category: 'Supplements',
      description: '400% Increase in Sales and Profitability For Supplements Brand',
      permalink: "/case-study-400-increase-in-sales-and-profitability-for-supplements-brand",
      tags: ['ctr'],
    },
    {
      id: 3,
      image: Cardimage4,
      growth: '2x',
      category: 'Healthcare',
      description: "2X Sales Growth – Revitalizing a brand's Lozenges on Amazon",
      permalink: "/case-study-2x-sales-growth-revitalizing-a-brands-lozenges-on-amazon",
      tags: ['ctr'],
    },
    
    // Amazon PPC variants
    {
      id: 4,
      image: Cardimage3, // Same image as id 1
      growth: '+43.8%',
      category: 'Supplements',
      description: "Scaling a brand's Elderberry Supplement on Amazon",
      permalink: "/case-study-scaling-a-brands-elderberry-supplement-on-amazon",
      tags: ['amazon'],
    },
    {
      id: 5,
      image: Cardimage1, // Same image as id 2
      growth: '+57%',
      category: 'Supplements',
      description: '57% Revenue Growth – Scaling a brand’s Vitamin C & Zinc on Amazon',
      permalink: "/case-study-57-revenue-growth-scaling-a-brands-vitamin-c-zinc-on-amazon",
      tags: ['amazon'],
    },
    
    // Hijacker removal variants
    {
      id: 6,
      image: Cardimage1, // Same image as id 1
      growth: '3x',
      category: 'Babycare',
      description: '3X Revenue Growth by Implementing Amazon Transparency Program for Supplement Brand',
      permalink: "/case-study-3x-revenue-growth-by-implementing-amazon-transparency-program-for-supplement-brand",
      tags: ['hijacker'],
    },
    {
      id: 7,
      image: Cardimage2, // Same image as id 2
      growth: '781.7%',
      category: 'Grocery',
      description: "6X YOY Growth for Food Brand Through A to Z Management",
      permalink: "/case-study-6x-yoy-growth-for-food-brand-through-a-to-z-management",
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
      growth: '+2.5x',
      category: 'Multivitamins',
      description: "2.5X Sales Growth – Scaling a brand’s Bariatric Multivitamin 45mg 90ct on Amazon",
      permalink: "/case-study-2-5x-sales-growth-scaling-a-brands-bariatric-multivitamin-45mg-90ct-on-amazon",
      tags: ['listings'],
    },
    {
      id: 11,
      image: Cardimage2, // Same image as id 2
      growth: '+2x',
      category: 'Babycare',
      description: "2X Sales Growth – Scaling a brand’s Vitamin D Drops on Amazon",
      permalink: "/case-study-2x-sales-growth-scaling-a-brands-vitamin-d-drops-on-amazon",
      tags: ['listings'],
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
    <Testmonial/>  
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