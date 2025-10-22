import React from 'react';
import './BeforeAfter.css';

import BeforeAfterShowCase from '../../Component/BeforeAfterShowcase/BeforeAfterShowcase';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
function BeforeAfter() {
    return (
        <div className="BeforeAfter">
            <BreadcrumbBanner/>
            <BeforeAfterShowCase/>

    
        </div>
    );
}

export default BeforeAfter;
