import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobsData } from "../Data/JobsData";
import "./ApplicationForm.css";
import bannerBg from "../../assets/SubPage-Banner-CommerceKind.png";
import { FiArrowLeft, FiFile, FiCheck, FiAlertCircle } from "react-icons/fi";
import Select from "react-select";
import pkFlag from "../../assets/pakistan.png";
import caFlag from "../../assets/canada.png";
import irFlag from "../../assets/ireland.png";
import inFlag from "../../assets/indiaFlag.png";
import BnFlag from "../../assets/Bangladesh.png";
import usFlag from "../../assets/united-states.png";
import ukFlag from "../../assets/flag.png";
import gmFlag from "../../assets/germany.png";
import ausFlag from "../../assets/australia.png";
import uaeFlag from "../../assets/united-arab-emirates.png";
import jpFlag from "../../assets/japan.png";

const countryOptions = [
  {
    value: "+92",
    label: "PK (+92)",
    flag: pkFlag,
  },
  {
    value: "+1",
    label: "US (+1)",
    flag: usFlag,
  },
  {
    value: "+91",
    label: "IN (+91)",
    flag: inFlag,
  },
  {
    value: "+44",
    label: "UK (+44)",
    flag: ukFlag,
  },
  {
    value: "+61",
    label: "AU (+61)",
    flag: ausFlag,
  },
  {
    value: "+1",
    label: "CA (+1)",
    flag: caFlag,
  },
  {
    value: "+81",
    label: "JP (+81)",
    flag: jpFlag,
  },
  {
    value: "+49",
    label: "Gm(+49)",
    flag: gmFlag,
  },
  {
    value: "+353",
    label: "IR(+353)",
    flag: irFlag,
  },
];

const ApplicationForm = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    headline: "",
    phone: "",
    address: "",
    photo: null,
    education: [],
    experience: [],
    summary: "",
    resume: null,
    coverLetter: "",
    currentSalary: "",
    expectedSalary: "",
    experienceYears: "",
    otherBenefits: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Find the specific job data
  const job = jobsData.find((job) => job.id === parseInt(jobId));

  // If job not found, redirect to careers
  if (!job) {
    navigate("/careers");
    return null;
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // Clear form functionality
  const handleClearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      headline: "",
      phone: "",
      address: "",
      photo: null,
      education: [],
      experience: [],
      summary: "",
      resume: null,
      coverLetter: "",
      currentSalary: "",
      expectedSalary: "",
      experienceYears: "",
      otherBenefits: "",
    });
    setErrors({});
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // File upload functionality
  const handleFileUpload = async (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);

      try {
        // Simulate file processing delay
        setTimeout(() => {
          // Store the file
          setFormData((prev) => ({
            ...prev,
            [fileType]: file,
          }));

          // Show success message
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000);

          setUploading(false);
        }, 500);
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploading(false);
      }
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Form is valid, submit
      alert("Application submitted successfully!");
      navigate(`/careers/job/${jobId}`);
    } else {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }
    }
  };

  const goBackToJob = () => {
    navigate(`/careers/job/${jobId}`);
  };

  return (
    <div className="applicationform-container">
      {/* Success Message */}
      {showSuccess && (
        <div className="applicationform-success-banner">
          <FiCheck className="applicationform-success-icon" />
          File uploaded successfully!
        </div>
      )}

      {/* Header */}
      <div
        className="applicationform-header"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="applicationform-header-content">
          <div className="applicationform-company-badge">
            CommerceKind | Full time
          </div>
          <h1 className="applicationform-main-title">{job.title}</h1>
          <div className="applicationform-location-posted">
            {job.location} | Posted on {job.postedDate || "Recently"}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="applicationform-content">
        {/* Back Button */}
        <div className="applicationform-form-header">
          <button onClick={goBackToJob} className="applicationform-back-button">
            <FiArrowLeft className="applicationform-back-icon" />
            Back to Job Details
          </button>
        </div>

        {/* Application Form */}
        <div className="applicationform-form-container">
          <div className="applicationform-required-text">* Required fields</div>

          {/* Personal Information Section */}
          <div className="applicationform-form-section">
            <div className="applicationform-section-header">
              <h2 className="applicationform-section-title">
                Personal information
              </h2>
              <button
                className="applicationform-clear-btn"
                onClick={handleClearForm}
              >
                Clear
              </button>
            </div>

            <div className="applicationform-form-row">
              <div className="applicationform-form-group">
                <label className="applicationform-form-label">
                  * First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className={`applicationform-form-input ${
                    errors.firstName ? "applicationform-input-error" : ""
                  }`}
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                />
                {errors.firstName && (
                  <div className="applicationform-error-message">
                    <FiAlertCircle className="applicationform-error-icon" />
                    {errors.firstName}
                  </div>
                )}
              </div>
              <div className="applicationform-form-group">
                <label className="applicationform-form-label">
                  * Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className={`applicationform-form-input ${
                    errors.lastName ? "applicationform-input-error" : ""
                  }`}
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                />
                {errors.lastName && (
                  <div className="applicationform-error-message">
                    <FiAlertCircle className="applicationform-error-icon" />
                    {errors.lastName}
                  </div>
                )}
              </div>
            </div>

            <div className="applicationform-form-group">
              <label className="applicationform-form-label">* Email</label>
              <input
                type="email"
                name="email"
                className={`applicationform-form-input ${
                  errors.email ? "applicationform-input-error" : ""
                }`}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {errors.email && (
                <div className="applicationform-error-message">
                  <FiAlertCircle className="applicationform-error-icon" />
                  {errors.email}
                </div>
              )}
            </div>

            <div className="applicationform-form-group">
              <label className="applicationform-form-label">* Phone</label>
              <div className="applicationform-phone-input-group">
                <Select
                  className="applicationform-country-code"
                  options={countryOptions}
                  defaultValue={countryOptions[0]}
                  isSearchable={false} 
                  isClearable={false} 
                  isDisabled={false}
                  getOptionLabel={(e) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <img src={e.flag} alt={e.label} width={12} />
                      {e.label}
                    </div>
                  )}
                />
                <input
                  type="tel"
                  name="phone"
                  className={`applicationform-form-input applicationform-phone-number ${
                    errors.phone ? "applicationform-input-error" : ""
                  }`}
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
              {errors.phone && (
                <div className="applicationform-error-message">
                  <FiAlertCircle className="applicationform-error-icon" />
                  {errors.phone}
                </div>
              )}
            </div>

            <div className="applicationform-form-group">
              <label className="applicationform-form-label">* Resume</label>
              <div
                className={`applicationform-file-upload-area ${
                  errors.resume ? "applicationform-upload-error" : ""
                } ${formData.resume ? "applicationform-upload-success" : ""} ${
                  uploading ? "applicationform-uploading" : ""
                }`}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => handleFileUpload(e, "resume")}
                  accept=".pdf,.doc,.docx,.odt,.rtf"
                  style={{ display: "none" }}
                />
                {uploading ? (
                  <div className="applicationform-upload-loading">
                    <div className="applicationform-upload-spinner"></div>
                    <div className="applicationform-upload-text">
                      Uploading file...
                    </div>
                  </div>
                ) : formData.resume ? (
                  <div className="applicationform-upload-success-content">
                    <FiCheck className="applicationform-upload-success-icon" />
                    <div className="applicationform-upload-text">
                      <strong>{formData.resume.name}</strong>
                      <br />
                      <span className="applicationform-upload-subtext">
                        File uploaded successfully
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="applicationform-upload-icon">
                      <FiFile />
                    </div>
                    <div className="applicationform-upload-text">
                      <span className="applicationform-upload-link">
                        Upload a file
                      </span>{" "}
                      or drag and drop here
                    </div>
                  </>
                )}
              </div>
              {errors.resume && (
                <div className="applicationform-error-message">
                  <FiAlertCircle className="applicationform-error-icon" />
                  {errors.resume}
                </div>
              )}
            </div>

            <div className="applicationform-form-group">
              <label className="applicationform-form-label">
                Cover Letter{" "}
                <span className="applicationform-optional">(optional)</span>
              </label>
              <textarea
                className="applicationform-form-textarea"
                rows="6"
                value={formData.coverLetter}
                onChange={(e) =>
                  handleInputChange("coverLetter", e.target.value)
                }
                placeholder="Tell us why you're interested in this position..."
              />
            </div>

            <div className="applicationform-form-group">
              <label className="applicationform-form-label">
                Years of Experience
              </label>
              <select
                className="applicationform-form-select"
                value={formData.experienceYears}
                onChange={(e) =>
                  handleInputChange("experienceYears", e.target.value)
                }
              >
                <option value="">Select experience level</option>
                <option value="0-1">0-1 years</option>
                <option value="2-3">2-3 years</option>
                <option value="4-5">4-5 years</option>
                <option value="6+">6+ years</option>
              </select>
            </div>

            <div className="applicationform-form-group">
              <label className="applicationform-form-label">
                Expected Salary{" "}
                <span className="applicationform-optional">(optional)</span>
              </label>
              <input
                type="text"
                className="applicationform-form-input"
                value={formData.expectedSalary}
                onChange={(e) =>
                  handleInputChange("expectedSalary", e.target.value)
                }
                placeholder="e.g: 20,000"
              />
            </div>
          </div>

          {/* Submit Section */}
          <div className="applicationform-submit-section">
            <button
              className="applicationform-submit-btn"
              onClick={handleSubmit}
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
