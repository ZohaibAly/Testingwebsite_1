import React from 'react';
import './BeforeAfter.css';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import BeforeAfterShowCase from '../../Component/BeforeAfterShowcase/BeforeAfterShowcase';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
function BeforeAfter() {
    return (
        <div className="BeforeAfter">
            <BreadcrumbBanner/>
            <BeforeAfterShowCase/>

            <FreeStoreComp/>
        </div>
    );
}

export default BeforeAfter;
