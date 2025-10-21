import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import './BreadcrumbBanner.css';
import bannerBg from '../../assets/SubPage-Banner-JPT.png';

const BreadcrumbBanner = ({ currentPage }) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState(currentPage);

  // Fallback: If currentPage prop isn't provided, derive it from the URL path
  useEffect(() => {
    if (!currentPage) {
      const pathSegments = location.pathname.split('/').filter(segment => segment);
      if (pathSegments.length > 0) {
        const lastSegment = pathSegments[pathSegments.length - 1];
        // Convert path format to title case (e.g., 'before-and-after' to 'Before And After')
        const formattedTitle = lastSegment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        setPageTitle(formattedTitle);
      } else {
        setPageTitle('Home');
      }
    }
  }, [currentPage, location]);

  return (
    <div className="breadcrumb-banner" style={{ backgroundImage: `url(${bannerBg})` }}>

      <div className="breadcrumb-container">
        <div className="breadcrumb-nav">
          <Link to="/" className="home-link">
            <FontAwesomeIcon icon={faHouseChimney} className="home-icon" />
            <span>Home</span>
            <span className="separator"> &gt; </span>
          </Link>
          {pageTitle && pageTitle !== 'Home' && (
            <>
              <span className="current-page">{pageTitle}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbBanner;