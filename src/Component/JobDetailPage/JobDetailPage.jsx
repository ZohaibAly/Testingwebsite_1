import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobsData } from '../Data/JobsData';
 import bannerBg from '../../assets/SubPage-Banner-CommerceKind.png';
import './JobDetailPage.css';

const JobDetailPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  // Find the specific job data
  const job = jobsData.find(job => job.id === parseInt(jobId));
  
  // If job not found, redirect to careers
  if (!job) {
    navigate('/careers');
    return null;
  }

  const handleApplyClick = () => {
    navigate(`/careers/apply/${jobId}`);
  };

  return (
    <div className="job-detail-container">
      {/* Header Section */}
      <div className="job-header" style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="job-header-content">
          <div className="company-badge">
            {job.company} | {job.companyType}
          </div>
          <h1 className="job-title">{job.title}</h1>
          <div className="job-meta">
            {job.location} | Posted on {job.postedDate}
          </div>
          
          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn-primary" onClick={handleApplyClick}>
              I am interested
            </button>
            {/* <button className="btn-secondary">
              Share job via email
            </button> */}
          </div>
          
          {/* Share Section */}
          {/* <div className="share-section">
            <p className="share-text">Share this job with your network</p>
            <div className="social-buttons">
              <button className="social-btn">f</button>
              <button className="social-btn">t</button>
              <button className="social-btn">in</button>
              <button className="social-btn">@</button>
              <button className="social-btn">📞</button>
              <button className="social-btn">📋</button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Column - Job Details */}
        <div className="job-details">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <a href="/careers">Job listing</a>
            <span>›</span>
            <span>Job details</span>
          </div>

          {/* About Us Section */}
          <div className="section">
            <h2 className="section-title">About Us</h2>
            <div className="section-content">
              {job.aboutCompany}
            </div>
          </div>

          {/* Job Description */}
          <div className="section">
            <h2 className="section-title">Job Description</h2>
            <ul className="list">
              {job.description.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="section">
            <h2 className="section-title">Requirements</h2>
            <ul className="list">
              {job.requirements.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="section">
            <h2 className="section-title">Benefits</h2>
            <ul className="list">
              {job.benefits.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Interest Button */}
          <button className="interest-btn" onClick={handleApplyClick}>
            I am interested
          </button>
        </div>

        {/* Right Sidebar - Job Information */}
        <div className="job-info-sidebar">
          <h3 className="sidebar-title">Job Information</h3>
          
          <div className="info-item">
            <span className="info-label">Date Opened</span>
            <span className="info-value">{job.dateOpened}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Job Type</span>
            <span className="info-value">{job.jobType}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Industry</span>
            <span className="info-value">{job.industry}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Work Experience</span>
            <span className="info-value">{job.workExperience}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">City</span>
            <span className="info-value">{job.city}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Salary/Province</span>
            <span className="info-value">{job.salaryProvince}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Zip/Postal Code</span>
            <span className="info-value">{job.zipCode}</span>
          </div>

          {job.salary && (
            <div className="info-item">
              <span className="info-label">Salary Range</span>
              <span className="info-value">{job.salary}</span>
            </div>
          )}
        </div>
      </div>

   
    </div>
  );
};

export default JobDetailPage;