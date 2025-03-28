import React, { useState } from 'react';
import './CaseStudyComp.css';

// Import all case study images
import caseStudy1 from '../../../assets/Case-Study-1.png';
import caseStudy2 from '../../../assets/Case-Study-2.png';
import caseStudy3 from '../../../assets/Case-Study-3.png';
import caseStudy4 from '../../../assets/Case-Study-4.png';
import caseStudy5 from '../../../assets/Case-Study-5.png';

// Import arrow icons (alternatively, you can use FontAwesome)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CaseStudySlider = () => {
  // Array of all case study images
  const caseStudies = [
    { id: 1, image: caseStudy1, alt: "Case Study 1" },
    { id: 2, image: caseStudy2, alt: "Case Study 2" },
    { id: 3, image: caseStudy3, alt: "Case Study 3" },
    { id: 4, image: caseStudy4, alt: "Case Study 4" },
    { id: 5, image: caseStudy5, alt: "Case Study 5" }
  ];

  // State to track current case study index (starting with the first one)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle arrow navigation
  const goToPrevious = () => {
    // If at first image, go to last image, otherwise go to previous image
    const newIndex = currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    // If at last image, go to first image, otherwise go to next image
    const newIndex = currentIndex === caseStudies.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="case-study-container">
      <div className="case-study-heading">
        <h2>Proof Over Promises: <span>Results</span> You Can See</h2>
      </div>
      
      <div className="case-study-content">
        <div className="case-study-image">
          <img 
            src={caseStudies[currentIndex].image} 
            alt={caseStudies[currentIndex].alt}
          />
        </div>
        
        <div className="case-study-navigation">
          <button className="view-all-btn">View All Before After</button>
          
          <div className="case-study-arrows">
            <button className="arrow-btn" onClick={goToPrevious}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="arrow-btn" onClick={goToNext}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySlider;