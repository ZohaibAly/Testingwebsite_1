import React, { useState } from 'react';
import './JobListing.css';
import { Link } from 'react-router-dom';
import careerimage from '../../assets/Career-image-commerceKind.png';
const JobCard = ({ title, onApplyClick }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{title}</h3>
      
      <div className="job-info">
        <div className="company-logo">
          <img src={careerimage} alt="CommerceKind Logo" />
        </div>
        
        <div className="job-tags">
          <span className="tag tag-time">5PM-2AM</span>
          <span className="tag tag-days">Monday-Friday</span>
          <span className="tag tag-location">Paragon City, Lahore</span>
        </div>
      </div>
<div className='upperbtn'>
<button className="apply-button" onClick={onApplyClick} >
        Apply Now
      </button>
</div>
      
    </div>
  );
};

const JobListingPage = () => {
    const [showModal, setShowModal] = useState(false);
  
    // Simple toggle function
    const toggleModal = () => setShowModal(!showModal);
  // List of job titles
  const jobTitles = [
    "eBay API Developer",
    "Amazon API Developer",
    "Business Development Executive",
    "Amazon PL Brand Manager",
    "Cold Caller Specialist",
    "Amazon Private Label Intern"
  ];

  return (
    <div className="job-listing-container">
      <div className="header">
        <p className="hiring-tag">We're Hiring!</p>
        <h1 className="main-heading">Join The Dynamic Team Of CommerceKind Today!</h1>
      </div>
      
      <div className="jobs-grid">
        {jobTitles.map((title, index) => (
          <JobCard key={index} title={title} onApplyClick={toggleModal}/>
        ))}
      </div>
      <div className="button-container">
      <Link to="https://linkedin.com/company/commercekind" className="linkedin-button">   Explore More On LinkedIn</Link>

      </div>
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className='model-c1'>
            <p>Apply now on <Link to="https://linkedin.com/company/commercekind" className="modal-link" >LinkedIn</Link> or email your resume at   <Link to="mailto:hr@commercekind.com" className="modal-link" >hr@commercekind.com</Link></p>
            </div>
           <div className='model-c2'> 
           <button className="close-button" onClick={toggleModal}>Close</button>
           </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListingPage;