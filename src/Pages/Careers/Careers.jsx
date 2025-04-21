import React from 'react';
import './Careers.css';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
import JobList from '../../Component/JobListing/JobListing';
function Careers() {
    return (
        <div className="Careers">
            <BreadcrumbBanner/>
            <JobList/>
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default Careers;
