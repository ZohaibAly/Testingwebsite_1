import React from 'react';
import './Careers.css';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
function Careers() {
    return (
        <div className="Careers">
            <BreadcrumbBanner/>
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default Careers;
