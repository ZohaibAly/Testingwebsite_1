import React from 'react';
import './JobListing.css';
import { Link, useNavigate } from 'react-router-dom';
import { jobsData } from '../Data/JobsData';
import careerimage from '../../assets/Career-image-commerceKind.png';

const JobCard = ({job}) => {
    const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate(`/careers/job/${job.id}`);
  };

  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      
      <div className="job-info">
        <div className="company-logo">
          <img src={careerimage} alt="CommerceKind Logo" />
        </div>
        
        <div className="job-tags">
          <span className="tag tag-time">{job.schedule}</span>
          <span className="tag tag-days">{job.days}</span>
          <span className="tag tag-location">{job.location}</span>
        </div>
      </div>

      <div className='upperbtn'>
        <button className="apply-button" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

const JobListingPage = () => {
  return (
    <div className="job-listing-container">
      <div className="header">
        <p className="hiring-tag">We're Hiring!</p>
        <h1 className="main-heading">Join The Dynamic Team Of CommerceKind Today!</h1>
      </div>
      
      <div className="jobs-grid">
        {jobsData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      
      <div className="button-container">
        <Link to="https://www.linkedin.com/company/commercekindllc/" className="linkedin-button">
          Explore More On LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default JobListingPage;