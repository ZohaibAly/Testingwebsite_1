import React from 'react';
import './Services.css';
import ServicesSection from '../../Component/ServicesSection/ServicesSection';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';

function Services() {
    return (
        <div className="Services">
            <BreadcrumbBanner/>
            <ServicesSection />
     
        </div>
    );
}

export default Services;
