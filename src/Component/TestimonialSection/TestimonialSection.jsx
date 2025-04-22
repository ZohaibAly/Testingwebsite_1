import React, { useState, useEffect, useRef } from "react";
import "./TestimonialSection.css";

// Import your client testimonial images for the video carousel
import clientFullFixed1 from "../../assets/clientFullFixed1.png";
import clientFullFixed2 from "../../assets/clientFullFixed2.png";
import clientFullFixed3 from "../../assets/clientFullFixed3.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
// Import Trustpilot testimonial images
import Testimonial1 from "../../assets/Testimonial-1-CommerceKind.png";
import Testimonial2 from "../../assets/Testimonial-2-CommerceKind.png";
import Testimonial3 from "../../assets/Testimonial-3-CommerceKind.png";
import Testimonial4 from "../../assets/Testimonial-4-CommerceKind.png";

// YouTube video IDs from the URLs you provided
const videoIds = ["bN79w77eKa0", "y8gopVJ0Z2M", "v11K2tANqEQ"];

const TestimonialsSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const testimonialRef = useRef(null);
  const startX = useRef(0);
  const testimonialLinks = [
    "https://www.trustpilot.com/reviews/67a3bbf00965ce2f4b5d22c4",
    "https://www.trustpilot.com/reviews/6789763d9983b2c1d430bc69",
    "https://www.trustpilot.com/reviews/679a9ebcc509578b38d3148c",
    "https://www.trustpilot.com/reviews/678ebd8baadb0c9574960440"
  ];
  
  const testimonials = [Testimonial1, Testimonial2, Testimonial3, Testimonial4];

  // Check if the screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // References for video carousel
  const videoThumbnails = [
    clientFullFixed1,
    clientFullFixed2,
    clientFullFixed3,
  ];

  // Handle navigation for video carousel
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoThumbnails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoThumbnails.length - 1 : prevIndex - 1
    );
  };

  // Open modal with YouTube video
  const openVideoModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle navigation for testimonial carousel (mobile)
  const goToTestimonial = (index) => {
    setCurrentTestimonialIndex(index);
  };

  const nextTestimonial = () => {
    if (currentTestimonialIndex < testimonials.length - 1) {
      setCurrentTestimonialIndex(currentTestimonialIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentTestimonialIndex > 0) {
      setCurrentTestimonialIndex(currentTestimonialIndex - 1);
    }
  };

  // Touch events for swipe
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    
    // If swipe distance is significant, navigate
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next
        nextTestimonial();
      } else {
        // Swipe right, go to prev
        prevTestimonial();
      }
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Don't Just Take Our Word for It –</h2>
          <h2>Hear What Our Clients Have to Say!</h2>
        </div>

        <div className="testimonials-content">
          {!isMobile ? (
            // Desktop view - original layout
            <div className="testimonials-left">
              <div className="testimonials-left-child1">
                <a href="https://www.trustpilot.com/reviews/679a9ebcc509578b38d3148c">
                  <img src={Testimonial3} alt="Trustpilot Review" />
                </a>
                <a href="https://www.trustpilot.com/reviews/678ebd8baadb0c9574960440">
                  <img src={Testimonial4} alt="Trustpilot Review" />
                </a>
              </div>
              <div className="testimonials-left-child2">
                <a href="https://www.trustpilot.com/reviews/67a3bbf00965ce2f4b5d22c4">
                  <img src={Testimonial1} alt="Trustpilot Review" />
                </a>
                <a href="https://www.trustpilot.com/reviews/6789763d9983b2c1d430bc69">
                  <img src={Testimonial2} alt="Trustpilot Review" />
                </a>
              </div>
            </div>
          ) : (
            // Mobile view - carousel with dots
            <div 
              className="testimonials-mobile-carousel"
              ref={testimonialRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="testimonial-slide">
                <a href={testimonialLinks[currentTestimonialIndex]}>
                  <img 
                    src={testimonials[currentTestimonialIndex]} 
                    alt={`Trustpilot Review ${currentTestimonialIndex + 1}`} 
                  />
                </a>
              </div>
              
              <div className="testimonial-nav-buttons">
          
                <div className="testimonial-dots">
                  {testimonials.map((_, index) => (
                    <span 
                      key={index} 
                      className={`testimonial-dot ${currentTestimonialIndex === index ? 'active' : ''}`}
                      onClick={() => goToTestimonial(index)}
                    ></span>
                  ))}
                </div>
               
              </div>
            </div>
          )}

          {/* Video Preview - Right Side */}
          <div className="testimonials-right">
            <div className="video-container">
              <img
                src={videoThumbnails[currentVideoIndex]}
                alt={`Client testimonial ${currentVideoIndex + 1}`}
                onClick={openVideoModal}
                className="client-video-image"
              />
              <div className="navigation-buttons">
                <button onClick={prevVideo} className="nav-left">
                  <FontAwesomeIcon icon={faLessThan} />
                </button>
                <button onClick={nextVideo} className="nav-right">
                  <FontAwesomeIcon icon={faGreaterThan} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="video-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoIds[currentVideoIndex]}?autoplay=1`}
              title="Client Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;