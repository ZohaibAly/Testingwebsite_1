// ContactForm.jsx
import React, { useState, useRef, useEffect } from 'react';
import './ContactFormComp.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// Custom dropdown component
const CustomDropdown = ({ options, value, onChange, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="dropdown custom-dropdown" ref={dropdownRef}>
      <select 
        style={{ display: 'none' }} 
        name={name} 
        value={value}
        onChange={() => {}}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      
      {/* Custom dropdown display */}
      <div 
        className="select-display" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
      </div>
      
      {/* Dropdown options */}
      {isOpen && (
        <div className="select-options">
          {options.map(opt => (
            <div
              key={opt.value}
              className={`select-option ${value === opt.value ? 'selected' : ''}`}
              onClick={() => {
                onChange({ target: { name, value: opt.value } });
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ContactFormComp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    helpWith: '',
    amazonStatus: 'Not On Amazon Yet',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      helpWith: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here 
  };

  // Amazon status options for the dropdown
  const amazonStatusOptions = [
    { value: 'Not On Amazon Yet', label: 'Not On Amazon Yet' },
    { value: 'under $10,000', label: 'under $10,000' },
    { value: '100,000-$500,000', label: '100,000-$500,000' },
    { value: '$500,000-$1,000,000', label: '$500,000-$1,000,000' },
    { value: 'over $1,000,000', label: 'over $1,000,000' }

  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get In Touch With Amazon Experts</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Say something to start a live chat!</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span>(659) 209-3973</span>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span>info@commercekind.com</span>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span>7628 103rd St Jacksonville, FL 32210</span>
            </div>
          </div>

          <div className="social-icons">
            <div className="social-icon facebook">
            <Link to="https://www.facebook.com/CommercekindLLC/"><FontAwesomeIcon icon={faFacebook} /></Link>
            </div>
            <div className="social-icon twitter">
            <Link to="#"><FontAwesomeIcon icon={faXTwitter} /></Link>

            </div>
            <div className="social-icon instagram">
            <Link to="https://www.instagram.com/commercekindllc/"><FontAwesomeIcon icon={faInstagram} /></Link>
            
            </div>
            <div className="social-icon linkedin">
            <Link to="https://www.linkedin.com/company/commercekindllc/"><FontAwesomeIcon icon={faLinkedin} /></Link>
      
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+1 (123) 456 7890"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>I Need Help With</label>
              <div className="radio-options">
                <div className="radio-option">
                  <input
                    type="radio"
                    id="storeAudit"
                    name="helpWith"
                    checked={formData.helpWith === 'Store Audit'}
                    onChange={() => handleRadioChange('Store Audit')}
                  />
                  <label htmlFor="storeAudit">Store Audit</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="listingsCreative"
                    name="helpWith"
                    checked={formData.helpWith === 'Listings Creative'}
                    onChange={() => handleRadioChange('Listings Creative')}
                  />
                  <label htmlFor="listingsCreative">Listings Creative</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="ppc"
                    name="helpWith"
                    checked={formData.helpWith === 'PPC'}
                    onChange={() => handleRadioChange('PPC')}
                  />
                  <label htmlFor="ppc">PPC</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="others"
                    name="helpWith"
                    checked={formData.helpWith === 'Others'}
                    onChange={() => handleRadioChange('Others')}
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
            </div>

            <div className="form-group">
              {/* Replace the native select with CustomDropdown */}
              <CustomDropdown
                options={amazonStatusOptions}
                value={formData.amazonStatus}
                onChange={handleChange}
                name="amazonStatus"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormComp;