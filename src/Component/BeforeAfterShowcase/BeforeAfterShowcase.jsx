import React, { useEffect, useRef } from 'react';
import './BeforeAfterShowcase.css';

// Import your images here
import caseStudy1 from '../../assets/Case-Study-1.png';
import caseStudy2 from '../../assets/Case-Study-2.png';
import caseStudy3 from '../../assets/Case-Study-3.png';
import caseStudy4 from '../../assets/Case-Study-4.png';
import caseStudy5 from '../../assets/Case-Study-5.png';

const BeforeAfterShowcase = () => {
  const sectionRefs = useRef({});

  const showcaseData = [
    {
      title: "Supplements",
      image: caseStudy1
    },
    {
      title: "Health & Personal Care",
      image: caseStudy2
    },
    {
      title: "Grocery & Gourmet Food",
      image: caseStudy3
    },
    {
      title: "Baby Products & Supplements",
      image: caseStudy4
    },
    {
      title: "Grocery & Gourmet Food",
      image: caseStudy5
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15 }
    );

    // Store current value of refs in the effect scope
    const currentRefs = sectionRefs.current;
    
    Object.values(currentRefs).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      // Use the stored value in cleanup function
      Object.values(currentRefs).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="showcase-container">
      <div className="showcase-study-heading">
        <h2>Proof Over Promises: <span>Results</span> You Can See</h2>
      </div>
      
      {showcaseData.map((item, index) => (
        <section 
          key={index}
          ref={(el) => (sectionRefs.current[`section-${index}`] = el)}
          className="showcase-section"
        >
          <div className="showcase-content">
            <div className="showcase-title">
              <span className="brand-of">Brand Of</span>
              <h2>{item.title}</h2>
            </div>
            
            <div className="showcase-image-container">
              <img 
                src={item.image} 
                alt={`${item.title} results`} 
                className="showcase-image"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BeforeAfterShowcase;