import React from 'react';
import './Services.css';
import ServicesSection from '../../Component/ServicesSection/ServicesSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';

function Services() {
    return (
        <div className="Services">
            <BreadcrumbBanner/>
            <ServicesSection />
            <FreeStoreComp/>
        </div>
    );
}

export default Services;
