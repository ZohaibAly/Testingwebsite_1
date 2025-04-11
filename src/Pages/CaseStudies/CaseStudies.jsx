import React from 'react';
import './CaseStudies.css';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import BreadCrumb from '../../Component/BreadcrumbBanner/BreadcrumbBanner';

function CaseStudies() {
    return (
        <div className="CaseStudies">
            <BreadCrumb/>
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default CaseStudies;
