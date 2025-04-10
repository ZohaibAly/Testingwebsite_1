import React from 'react';
import './CaseStudies.css';
import Testmonial from '../../Component/Home/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';

function CaseStudies() {
    return (
        <div className="CaseStudies">
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default CaseStudies;
