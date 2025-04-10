import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/frequently-asked-questions" element={<FAQPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/before-after" element={<BeforeAfterPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FooterComp/>
      </div>
    </Router>
  );
}

export default App;