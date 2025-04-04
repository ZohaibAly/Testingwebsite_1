import React, { useState } from 'react';
import './OfferGrid.css';
// Import your images here
import Services1 from '../../../assets/Services-image1.png';
import Services2 from '../../../assets/Services-image2.png';
import Services3 from '../../../assets/Services-image3.png';
import Services4 from '../../../assets/Services-image4.png';
import Services5 from '../../../assets/Services-image5.png';
import Services6 from '../../../assets/Services-image6.png';
const OffersGrid = () => {
  const [hoveredOffer, setHoveredOffer] = useState(null);

  

  const offers = [
    {
      id: 'amazon-ppc',
      title: 'Amazon PPC',
      image: Services1, 
    },
    {
      id: 'listings-seo',
      title: 'Listings SEO',
      image: Services2,
    },
    {
      id: 'listings-creatives',
      title: 'Listings Creatives',
      image: Services3,
    },
    {
      id: 'ctr-improvement',
      title: 'CTR%',
      subtitle: 'Improvement',
      image: Services4,
    },
    {
      id: 'cvr-improvement',
      title: 'CVR%',
      subtitle: 'Improvement',
      image: Services5,
    },
    {
      id: 'platform-management',
      title: 'Platform',
      subtitle: 'Management',
      image: Services6,
    },
  ];

  return (
    <section className="offers-grid">
      <div className="offers-grid__container">
        <div className="offers-grid__header">
          <h3 className="offers-grid__subtitle">How We Help You</h3>
          <h2 className="offers-grid__title">Our Services</h2>
        </div>

        <div className="offers-grid__items">
          {offers.map((offer) => (
            <a 
              href="#" 
              key={offer.id} 
              className={`offers-grid__item ${hoveredOffer === offer.id ? 'offers-grid__item--hovered' : ''}`}
              onMouseEnter={() => setHoveredOffer(offer.id)}
              onMouseLeave={() => setHoveredOffer(null)}
            >
              <div className="offers-grid__icon">
                <img src={offer.image} alt={offer.title} />
              </div>
              <div className="offers-grid__text">
                <h4>{offer.title}</h4>
                {offer.subtitle && <h4>{offer.subtitle}</h4>}
              </div>
            </a>
          ))}
        </div>

        <div className="offers-grid__divider"></div>

        <div className="offers-grid__action">
          <a href="#" className="offers-grid__button">View All Services</a>
        </div>
      </div>
    </section>
  );
};

export default OffersGrid;