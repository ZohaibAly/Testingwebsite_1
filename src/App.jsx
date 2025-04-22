import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Component/STT';
import Navbar from './Component/NavbarComponent/NavbarComponent';
import FooterComp from './Component/Footer/Footer';
import Homepage from './Pages/Home/Home';
import ServicesPage from './Pages/Services/Services';
import CaseStudiesPage from './Pages/CaseStudies/CaseStudies';
import BeforeAfterPage from './Pages/BeforeAfter/BeforeAfter';
import ContactPage from './Pages/Contact/Contact';
import BlogPage from './Pages/Blog/Blog';
import FAQPage from './Pages/FAQ/FAQ';
import CareersPage from './Pages/Careers/Careers';
import Space from './Component/Space/Space';
import page1comp from './Component/Page1CaseStudies/Page1CaseStudies';
import CaseStudy from './Pages/CaseStudy/CaseStudy';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Space />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/frequently-asked-questions" element={<FAQPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/before-and-after" element={<BeforeAfterPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-study-2-5x-sales-growth-scaling-a-brands-bariatric-multivitamin-45mg-90ct-on-amazon" element={<CaseStudy breadCrumbTitle="Case Study: 2.5X Sales Growth – Scaling a brand’s Bariatric Multivitamin 45mg 90ct on Amazon" PageComponent={page1comp}/>} />
          <Route path="/case-study-2x-sales-growth-revitalizing-a-brands-lozenges-on-amazon" element={<CaseStudy breadCrumbTitle="Case Study: 2X Sales Growth – Revitalizing a brand’s Lozenges on Amazon" content="This is page 2" color="blue" />} />
          <Route path="/case-study-2x-sales-growth-scaling-a-brands-vitamin-d-drops-on-amazon" element={<CaseStudy breadCrumbTitle="Case Study: 2X Sales Growth – Scaling a brand’s Vitamin D Drops on Amazon" content="This is page 3" color="green" />} />
          <Route path="/case-study-3x-revenue-growth-by-implementing-amazon-transparency-program-for-supplement-brand" element={<CaseStudy breadCrumbTitle="Case Study: 3X Revenue Growth by Implementing Amazon Transparency Program for Supplement Brand" content="This is page 4" color="orange" />} />
          <Route path="/case-study-400-increase-in-sales-and-profitability-for-supplements-brand" element={<CaseStudy breadCrumbTitle="Case Study: 400% Increase in Sales and Profitability For Supplements Brand" content="This is page 5" color="purple" />} />
          <Route path="/case-study-57-revenue-growth-scaling-a-brands-vitamin-c-zinc-on-amazon" element={<CaseStudy breadCrumbTitle="Case Study: 57% Revenue Growth – Scaling a brand’s Vitamin C & Zinc on Amazon" content="This is page 6" color="teal" />} />
          <Route path="/case-study-6x-yoy-growth-for-food-brand-through-a-to-z-management" element={<CaseStudy breadCrumbTitle="Case Study: 6X YoY Growth for Food Brand Through A to Z Management" content="This is page 7" color="pink" />} />
          <Route path="/case-study-7x-revenue-growth-by-overcoming-compliance-inventory-challenges" element={<CaseStudy breadCrumbTitle="Case Study: 7X Revenue Growth by Overcoming Compliance & Inventory Challenges" content="This is page 8" color="gray" />} />
          <Route path="/case-study-scaling-a-brands-elderberry-supplement-on-amazon" element={<CaseStudy breadCrumbTitle="Case Study: Scaling a brand’s Elderberry Supplement on Amazon" content="This is page 9" color="brown" />} />
        </Routes>
        <FooterComp/>
      </div>
    </Router>
  );
}

export default App;