import React from 'react';
import './FAQ.css';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import FAQSection from '../../Component/FAQ/FAQ';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
function FAQ() {
    return (
        <div className="FAQ">
            <BreadcrumbBanner/>
            <FAQSection />
      
            <FreeStoreComp/>
        </div>
    );
}

export default FAQ;
