import React from 'react';
import './JobListing.css';
import { Link, useNavigate } from 'react-router-dom';
import { jobsData } from '../Data/JobsData';
import careerimage from '../../assets/Career-image-commerceKind.png';

const JobCard = ({ job }) => {
    const navigate = useNavigate();

    const handleApplyClick = () => {
        navigate(`/careers/job/${job.id}`);
    };

    return (
        <div className="jobcard-container">
            <h3 className="jobcard-title">{job.title}</h3>
            
            <div className="jobcard-info">
                <div className="jobcard-company-logo">
                    <img src={careerimage} alt="CommerceKind Logo" />
                </div>
                
                <div className="jobcard-tags">
                    <span className="jobcard-tag jobcard-tag-time">{job.schedule}</span>
                    <span className="jobcard-tag jobcard-tag-days">{job.days}</span>
                    <span className="jobcard-tag jobcard-tag-location">{job.location}</span>
                </div>
            </div>

            <div className='jobcard-upperbtn'>
                <button className="jobcard-apply-button" onClick={handleApplyClick}>
                    Apply Now
                </button>
            </div>
        </div>
    );
};

const JobListingPage = () => {
    return (
        <div className="joblistingpage-container">
            <div className="joblistingpage-header">
                <p className="joblistingpage-hiring-tag">We're Hiring!</p>
                <h1 className="joblistingpage-main-heading">Join The Dynamic Team Of CommerceKind Today!</h1>
            </div>
            
            <div className="joblistingpage-jobs-grid">
                {jobsData.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
            
            <div className="joblistingpage-button-container">
                <Link to="https://www.linkedin.com/company/commercekindllc/" className="joblistingpage-linkedin-button">
                    Explore More On LinkedIn
                </Link>
            </div>
        </div>
    );
};

export default JobListingPage;