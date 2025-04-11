import React from 'react';
import './CaseStudies.css';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import CSSeection from '../../Component/CaseStudies/CaseStudies'

function CaseStudies() {
    return (
        <div className="CaseStudies">
            <CSSeection />
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default CaseStudies;
