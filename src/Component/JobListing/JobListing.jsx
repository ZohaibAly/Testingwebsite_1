import React from 'react';
import './JobListing.css';
import { Link } from 'react-router-dom';
import careerimage from '../../assets/Career-image-commerceKind.png';
const JobCard = ({ title }) => {
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

      <button className="apply-button">
        Apply Now
      </button>
    </div>
  );
};

const JobListingPage = () => {
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
          <JobCard key={index} title={title} />
        ))}
      </div>
      <div className="button-container">
      <Link to="https://linkedin.com/company/commercekind" className="linkedin-button">   Explore More On LinkedIn</Link>

      </div>
    </div>
  );
};

export default JobListingPage;