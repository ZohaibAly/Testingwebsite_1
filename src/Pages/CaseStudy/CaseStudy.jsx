import React from 'react';
import './CaseStudy.css';
import BreadCrumb from '../../Component/BreadcrumbBanner/BreadcrumbBanner';

function CaseStudy({ breadCrumbTitle, PageComponent }) {
  return (
    <div className="CaseStudy">
        <BreadCrumb currentPage={breadCrumbTitle}/>
        {PageComponent && <PageComponent/>}
       
      
    </div>
  )
}

export default CaseStudy;