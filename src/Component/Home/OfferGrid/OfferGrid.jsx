import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OfferGrid.css';

// Import your images here
import Services1 from '../../../assets/Services-image1.png';
import Services2 from '../../../assets/Services-image2.png';
import Services3 from '../../../assets/Services-image3.png';
import Services4 from '../../../assets/Services-image4.png';
import Services5 from '../../../assets/Services-image5.png';
import Services6 from '../../../assets/Services-image6.png';

const OffersGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [highlightStyle, setHighlightStyle] = useState({
    display: 'none',
    left: '0px',
    width: '0px'
  });
  
  const itemRefs = useRef([]);

  useEffect(() => {
    if (hoveredIndex !== null && itemRefs.current[hoveredIndex]) {
      const element = itemRefs.current[hoveredIndex];
      const rect = element.getBoundingClientRect();
      const containerRect = element.parentElement.getBoundingClientRect();
      const offsetLeft = rect.left - containerRect.left;
      
      setHighlightStyle({
        display: 'block',
        left: `${offsetLeft}px`,
        width: `${rect.width}px`
      });
    } else {
      setHighlightStyle({
        display: 'none',
        left: '0px',
        width: '0px'
      });
    }
  }, [hoveredIndex]);

  const offers = [
    {
      id: 'marketplace-advertising',
      title: 'Marketplace Advertising',
      image: Services1, 
    },
    {
      id: 'catalog-optimization',
      title: 'Catalog Optimization',
      image: Services2,
    },
    {
      id: 'visual-content',
      title: 'Visual Content',
      image: Services3,
    },
    {
      id: 'engagement-boost',
      title: 'Engagement Rate',
      subtitle: 'Enhancement',
      image: Services4,
    },
    {
      id: 'conversion-boost',
      title: 'Conversion Rate',
      subtitle: 'Amplification',
      image: Services5,
    },
    {
      id: 'channel-oversight',
      title: 'Channel',
      subtitle: 'Oversight',
      image: Services6,
    },
  ];
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="offers-grid">
      <div className="offers-grid__container">
        <div className="offers-grid__header">
          <h3 className="offers-grid__subtitle">What We Deliver</h3>
          <h2 className="offers-grid__title">Our Solutions</h2>
        </div>

        <div className="offers-grid__items">
          {offers.map((offer, index) => (
            <div 
              key={offer.id}
              className={`offers-grid__item ${hoveredIndex === index ? 'offers-grid__item--active' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              ref={el => itemRefs.current[index] = el}
            >
              <div className="offers-grid__icon">
                <img src={offer.image} alt={offer.title} />
              </div>
              <div className="offers-grid__text">
                <p>{offer.title}</p>
                <p>{offer.subtitle}</p>
               
              </div>
            </div>
          ))}
        </div>

        <div className="offers-grid__divider-container">
          <div 
            className="offers-grid__divider-highlight" 
            style={highlightStyle}
          />
        </div>

        <div className="offers-grid__action">
        <Link to="/services" className="offers-grid__button" >View All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default OffersGrid;