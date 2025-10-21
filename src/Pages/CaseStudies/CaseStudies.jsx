import React from 'react';
import './CaseStudies.css';

import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import CSSeection from '../../Component/CaseStudies/CaseStudies'
import BreadCrumb from '../../Component/BreadcrumbBanner/BreadcrumbBanner';

function CaseStudies() {
    return (
        <div className="CaseStudies">
            <BreadCrumb/>
            <CSSeection />
     
            <FreeStoreComp/>
        </div>
    );
}

export default CaseStudies;
