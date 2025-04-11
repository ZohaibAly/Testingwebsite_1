import React from 'react';
import './BeforeAfter.css';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import BeforeAfterShowCase from '../../Component/BeforeAfterShowcase/BeforeAfterShowcase';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
function BeforeAfter() {
    return (
        <div className="BeforeAfter">
            <BreadcrumbBanner/>
            <BeforeAfterShowCase/>
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default BeforeAfter;
