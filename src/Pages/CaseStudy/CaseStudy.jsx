import React from 'react';
import './CaseStudy.css';
import BreadCrumb from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';

function CaseStudy({ breadCrumbTitle, content, color }) {
  return (
    <div className="CaseStudy">
        <BreadCrumb currentPage={breadCrumbTitle}/>
        {content}
        {color}
        <Testmonial/>
        <FreeStoreComp/>
    </div>
  )
}

export default CaseStudy;