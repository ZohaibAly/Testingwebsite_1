import React from 'react';
import './FAQ.css';
import FAQSection from '../../Component/FAQ/FAQ';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
function FAQ() {
    return (
        <div className="FAQ">
            <BreadcrumbBanner/>
            <FAQSection />
      
   
        </div>
    );
}

export default FAQ;
