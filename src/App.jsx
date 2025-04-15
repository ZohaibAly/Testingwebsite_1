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
          <Route path="/case-study-2-5x-sales-growth-scaling-a-brands-bariatric-multivitamin-45mg-90ct-on-amazon" element={<CaseStudy title="Page 1" content="This is page 1" color="red" />} />
          <Route path="/case-study-2x-sales-growth-revitalizing-a-brands-lozenges-on-amazon" element={<CaseStudy title="Page 2" content="This is page 2" color="blue" />} />
          <Route path="/case-study-2x-sales-growth-scaling-a-brands-vitamin-d-drops-on-amazon" element={<CaseStudy title="Page 3" content="This is page 3" color="green" />} />
          <Route path="/case-study-3x-revenue-growth-by-implementing-amazon-transparency-program-for-supplement-brand" element={<CaseStudy title="Page 4" content="This is page 4" color="orange" />} />
          <Route path="/case-study-400-increase-in-sales-and-profitability-for-supplements-brand" element={<CaseStudy title="Page 5" content="This is page 5" color="purple" />} />
          <Route path="/case-study-57-revenue-growth-scaling-a-brands-vitamin-c-zinc-on-amazon" element={<CaseStudy title="Page 6" content="This is page 6" color="teal" />} />
          <Route path="/case-study-6x-yoy-growth-for-food-brand-through-a-to-z-management" element={<CaseStudy title="Page 7" content="This is page 7" color="pink" />} />
          <Route path="/case-study-7x-revenue-growth-by-overcoming-compliance-inventory-challenges" element={<CaseStudy title="Page 8" content="This is page 8" color="gray" />} />
          <Route path="/case-study-scaling-a-brands-elderberry-supplement-on-amazon" element={<CaseStudy title="Page 9" content="This is page 9" color="brown" />} />
        </Routes>
        <FooterComp/>
      </div>
    </Router>
  );
}

export default App;