// ContactForm.jsx 
import React, { useState, useRef, useEffect } from 'react';
import './ContactFormComp.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// === EmailJS IDs you provided ===
const SERVICE_ID  = 'service_f8kbdvu';
const TEMPLATE_ID = 'template_1pwgw45';
const PUBLIC_KEY  = 'tsWqfkVe9czS_8FXj';

// Custom dropdown component (kept, but not used now)
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
      <select style={{ display: 'none' }} name={name} value={value} onChange={() => {}}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <div className="select-display" onClick={() => setIsOpen(!isOpen)}>
        {value}
      </div>

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
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    helpWith: '', // still present but unused (as requested earlier)
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [loading, setLoading] = useState(false);

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

  // === Only this function changed to actually send the email ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ submitted: false, success: false, message: '' });

    try {
      // Sends all inputs by their `name` attributes via the form ref
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY });

      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });

      // Reset form UI/state
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        helpWith: '',
        message: ''
      });
      if (form.current) form.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        submitted: true,
        success: false,
        message: 'Sorry, something went wrong while sending. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

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
              <span>(732) 451-4720</span>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span>yeshua@jptamzsolutions.com</span>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span>4392 Riverside Ave Tampa, FL 33614</span>
            </div>
          </div>

          <div className="social-icons">
            <div className="social-icon facebook">
              <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
            </div>
            <div className="social-icon twitter">
              <Link to="#"><FontAwesomeIcon icon={faXTwitter} /></Link>
            </div>
            <div className="social-icon instagram">
              <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
            <div className="social-icon linkedin">
              <Link to="https://www.linkedin.com/in/mindy-israel-a8a015390/"><FontAwesomeIcon icon={faLinkedin} /></Link>
            </div>
          </div>
        </div>

        <div className="contact-form">
          {status.submitted && (
            <div className={`form-message ${status.success ? 'success' : 'error'}`}>
              {status.message}
            </div>
          )}

          {!status.success && (
            <form ref={form} onSubmit={handleSubmit}>
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
                    required
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
                    required
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
                    required
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

              {/* "I Need Help With" radios already removed */}
              {/* Amazon Status and its dropdown removed */}

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className='submit-button1'>
                <button type="submit" className="submit-button" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactFormComp;
