import React from 'react';
import './BrandCarouselComp.css';

import logo1 from '../../../assets/Brand Logos 1.png';
import logo2 from '../../../assets/Brand Logos 2.png';
import logo3 from '../../../assets/Brand Logos 3.png';
import logo4 from '../../../assets/Brand Logos 4.png';
import logo5 from '../../../assets/Brand Logos 5.png';
import logo6 from '../../../assets/Brand Logos 6.png';
import logo7 from '../../../assets/Brand Logos 7.png';
import logo8 from '../../../assets/Brand Logos 8.png';
import logo9 from '../../../assets/Brand Logos 9.png';
import logo10 from '../../../assets/Brand Logos 10.png';
import logo11 from '../../../assets/Brand Logos 11.png';
import logo12 from '../../../assets/Brand Logos 12.png';

const BrandCarouselComponent = () => {
  const logos = [
    { src: logo1, alt: 'Brand Logo 1' },
    { src: logo2, alt: 'Brand Logo 2' },
    { src: logo3, alt: 'Brand Logo 3' },
    { src: logo4, alt: 'Brand Logo 4' },
    { src: logo5, alt: 'Brand Logo 5' },
    { src: logo6, alt: 'Brand Logo 6' },
    { src: logo7, alt: 'Brand Logo 7' },
    { src: logo8, alt: 'Brand Logo 8' },
    { src: logo9, alt: 'Brand Logo 9' },
    { src: logo10, alt: 'Brand Logo 10' },
    { src: logo11, alt: 'Brand Logo 11' },
    { src: logo12, alt: 'Brand Logo 12' },
  ];

  return (
    <div className="brand-carousel-container">
      <div className="brand-carousel-heading">
        <h2>Trusted by <span>Hundreds</span> of Brands & FBA Sellers on Amazon</h2>
      </div>
      
      <div className="brand-carousel-wrapper">
        <div className="brand-logo-track">
          {/* Display logos twice for seamless looping */}
          {logos.map((logo, index) => (
            <div className="brand-logo" key={`logo-${index}`}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div className="brand-logo" key={`logo-repeat-${index}`}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarouselComponent;