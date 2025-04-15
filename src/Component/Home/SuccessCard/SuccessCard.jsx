import React from 'react';
import Arrowup from '../../../assets/Card-Arrow-up.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
          <div className='img'>
          <img src={Arrowup} alt="Card ArrowUp" />
          </div>
         <div className="growth-percentage">
         <span >{growth}</span>
         </div>
        </div>
       
        <h3 className="card-category">{category}</h3>
        <p className="card-description">{description}</p>
        <button className="view-case-btn">
          View Case Studies <span className="Card-btn-circle">
          <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
        
      </div>
    </div>
    
  );
};
export default SuccessCard;