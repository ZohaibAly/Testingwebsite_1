import React from 'react';
import './CaseStudy.css';
import BreadCrumb from '../../Component/BreadcrumbBanner/BreadcrumbBanner';

import FreeStoreComp from '../../Component/FreeStore/FreeStore';

function CaseStudy({ breadCrumbTitle, PageComponent }) {
  return (
    <div className="CaseStudy">
        <BreadCrumb currentPage={breadCrumbTitle}/>
        {PageComponent && <PageComponent/>}
       
        <FreeStoreComp/>
    </div>
  )
}

export default CaseStudy;