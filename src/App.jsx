// import React from 'react';
import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Component/STT';
import Navbar from './Component/NavbarComponent/NavbarComponent';


import FooterComp from './Component/Footer/Footer';

const JobDetailPage = lazy(() => import('./Component/JobDetailPage/JobDetailPage'));
const ApplicationForm = lazy(() => import('./Component/ApplicationForm/ApplicationForm'));
const Homepage = lazy(() => import('./Pages/Home/Home'));
const ServicesPage = lazy(() => import('./Pages/Services/Services'));
const CaseStudiesPage = lazy(() => import('./Pages/CaseStudies/CaseStudies'));
const BeforeAfterPage = lazy(() => import('./Pages/BeforeAfter/BeforeAfter'));  
const ContactPage = lazy(() => import('./Pages/Contact/Contact'));
const BlogPage = lazy(() => import('./Pages/Blog/Blog'));
const FAQPage = lazy(() => import('./Pages/FAQ/FAQ'));
const CareersPage = lazy(() => import('./Pages/Careers/Careers'));
const CaseStudy = lazy(() => import('./Pages/CaseStudy/CaseStudy'));

import Space from './Component/Space/Space';

const Page1comp = lazy(() => import('./Component/AllPagesofCaseStudies/Page1CaseStudies/Page1CaseStudies'));
const Page2comp = lazy(() => import('./Component/AllPagesofCaseStudies/Page2CaseStudies/Page2CaseStudies'));
const Page3comp = lazy(() => import('./Component/AllPagesofCaseStudies/Page3CaseStudies/Page3CaseStudies'));
const Page4comp = lazy(() => import('./Component/AllPagesofCaseStudies/Page4CaseStudies/Page4CaseStudies'));
const Page5comp = lazy(() => import('./Component/AllPagesofCaseStudies/Page5CaseStudies/Page5CaseStudies'));
const Page6comp = lazy(() => import('./Component/AllPagesofCaseStudies/Page6CaseStudies/Page6CaseStudies'));
const Page7comp = lazy(() => import('./Component/AllPagesofCaseStudies/Page7CaseStudies/Page7CaseStudies'));
const Page8comp = lazy(() => import('./Component/AllPagesofCaseStudies/Page8CaseStudies/Page8CaseStudies'));
const Page9comp = lazy(() => import('./Component/AllPagesofCaseStudies/Page9CaseStudies/Page9CaseStudies'));
const Loading = () => <div>Loading...</div>;
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Space />
        <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/job/:jobId" element={<JobDetailPage />} />
          <Route path="/careers/apply/:jobId" element={<ApplicationForm />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/frequently-asked-questions" element={<FAQPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/before-and-after" element={<BeforeAfterPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-study-2-5x-sales-growth-scaling-a-brands-bariatric-multivitamin-45mg-90ct-on-amazon" element={<CaseStudy breadCrumbTitle="Case Study: 2.5X Sales Growth – Scaling a brand’s Bariatric Multivitamin 45mg 90ct on Amazon" PageComponent={Page1comp}  />} />
          <Route path="/case-study-2x-sales-growth-revitalizing-a-brands-lozenges-on-amazon" element={<CaseStudy breadCrumbTitle="Case Study: 2X Sales Growth – Revitalizing a brand’s Lozenges on Amazon"  PageComponent={Page2comp}/>} />
          <Route path="/case-study-2x-sales-growth-scaling-a-brands-vitamin-d-drops-on-amazon" element={<CaseStudy breadCrumbTitle="Case Study: 2X Sales Growth – Scaling a brand’s Vitamin D Drops on Amazon"  PageComponent={Page3comp} />} />
          <Route path="/case-study-3x-revenue-growth-by-implementing-amazon-transparency-program-for-supplement-brand" element={<CaseStudy breadCrumbTitle="Case Study: 3X Revenue Growth by Implementing Amazon Transparency Program for Supplement Brand" PageComponent={Page4comp}/>} />
          <Route path="/case-study-400-increase-in-sales-and-profitability-for-supplements-brand" element={<CaseStudy breadCrumbTitle="Case Study: 400% Increase in Sales and Profitability For Supplements Brand" PageComponent={Page5comp}/>} />
          <Route path="/case-study-57-revenue-growth-scaling-a-brands-vitamin-c-zinc-on-amazon" element={<CaseStudy breadCrumbTitle="Case Study: 57% Revenue Growth – Scaling a brand’s Vitamin C & Zinc on Amazon" PageComponent={Page6comp}  />} />
          <Route path="/case-study-6x-yoy-growth-for-food-brand-through-a-to-z-management" element={<CaseStudy breadCrumbTitle="Case Study: 6X YoY Growth for Food Brand Through A to Z Management" PageComponent={Page7comp}/>} />
          <Route path="/case-study-7x-revenue-growth-by-overcoming-compliance-inventory-challenges" element={<CaseStudy breadCrumbTitle="Case Study: 7X Revenue Growth by Overcoming Compliance & Inventory Challenges" PageComponent={Page8comp}/>} />
          <Route path="/case-study-scaling-a-brands-elderberry-supplement-on-amazon" element={<CaseStudy breadCrumbTitle="Case Study: Scaling a brand’s Elderberry Supplement on Amazon" PageComponent={Page9comp}/>} />
        </Routes>
        </Suspense>    
        <FooterComp/>     
      </div>
    </Router>
  );
}

export default App;