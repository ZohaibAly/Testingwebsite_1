import React from 'react';
import './FAQ.css';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import FAQSection from '../../Component/FAQ/FAQ';

function FAQ() {
    return (
        <div className="FAQ">
            <FAQSection />
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default FAQ;
