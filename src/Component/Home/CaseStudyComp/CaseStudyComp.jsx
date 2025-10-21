import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CaseStudyComp.css';

// Import all case study images
import caseStudy1 from '../../../assets/Case-Study-1.png';
import caseStudy2 from '../../../assets/Case-Study-2.png';
import caseStudy3 from '../../../assets/Case-Study-3.png';
import caseStudy4 from '../../../assets/Case-Study-4.png';
import caseStudy5 from '../../../assets/Case-Study-5.png';

// Import arrow icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CaseStudySlider = () => {
  const caseStudies = [
    { id: 1, image: caseStudy1, alt: "Case Study 1" },
    { id: 2, image: caseStudy2, alt: "Case Study 2" },
    { id: 3, image: caseStudy3, alt: "Case Study 3" },
    { id: 4, image: caseStudy4, alt: "Case Study 4" },
    { id: 5, image: caseStudy5, alt: "Case Study 5" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  // Reset animation class after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 800); // Match with animation duration
    
    return () => clearTimeout(timer);
  }, [animationClass]);

  const goToPrevious = () => {
    setAnimationClass('slide-from-left');
    const newIndex = currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setAnimationClass('slide-from-right');
    const newIndex = currentIndex === caseStudies.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="case-study-container">
      <div className="case-study-heading">
       <h2>Evidence Beyond Words: <span>Outcomes</span> You Can Trust</h2>
      </div>
      
      <div className="case-study-content">
        <div className="case-study-image">
          <img 
            src={caseStudies[currentIndex].image} 
            alt={caseStudies[currentIndex].alt}
            className={animationClass}
          />
        </div>
        
        <div className="case-study-navigation">
     <Link to="/All-Transformation"><button className="view-all-btn">See All Transformations</button></Link>
         
          
          <div className="case-study-arrows">
            <button type="button" className="arrow-btn" onClick={goToPrevious}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button type="button" className="arrow-btn" onClick={goToNext}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySlider;