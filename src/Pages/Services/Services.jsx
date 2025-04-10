import React from 'react';
import './Services.css';
import ServicesSection from '../../Component/ServicesSection/ServicesSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';

function Services() {
    return (
        <div className="Services">
            <ServicesSection />
            <FreeStoreComp/>
        </div>
    );
}

export default Services;
