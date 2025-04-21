import React from 'react';
import './FAQ.css';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import FAQSection from '../../Component/FAQ/FAQ';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
function FAQ() {
    return (
        <div className="FAQ">
            <BreadcrumbBanner/>
            <FAQSection />
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default FAQ;
