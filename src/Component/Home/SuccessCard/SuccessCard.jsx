import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './SuccessCard.css';

const SuccessCard = (props) => {
  const { image, growth, category, description } = props;
  return (
    <div className="success-card">
      <div className="card-image">
        <img src={image} alt={category} />
      </div>
      <div className="card-content">
        <div className="growth-indicator">
          <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
          <span className="growth-percentage">{growth}</span>
        </div>
        <h3 className="card-category">{category}</h3>
        <p className="card-description">{description}</p>
        <button className="view-case-btn">
          View Case Studies <span className="Card-btn-circle">→</span>
        </button>
      </div>
    </div>
  );
};
export default SuccessCard;