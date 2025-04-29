import React from 'react';
import './CaseStudy.css';
import BreadCrumb from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';

function CaseStudy({ breadCrumbTitle, PageComponent }) {
  return (
    <div className="CaseStudy">
        <BreadCrumb currentPage={breadCrumbTitle}/>
        {PageComponent && <PageComponent/>}
        <Testmonial/>
        <FreeStoreComp/>
    </div>
  )
}

export default CaseStudy;