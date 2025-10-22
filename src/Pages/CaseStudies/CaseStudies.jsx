import React from 'react';
import './CaseStudies.css';

import CSSeection from '../../Component/CaseStudies/CaseStudies'
import BreadCrumb from '../../Component/BreadcrumbBanner/BreadcrumbBanner';

function CaseStudies() {
    return (
        <div className="CaseStudies">
            <BreadCrumb/>
            <CSSeection />
     
         
        </div>
    );
}

export default CaseStudies;
