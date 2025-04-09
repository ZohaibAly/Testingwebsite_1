import React, { useState } from 'react';
import './TestimonialSection.css';

// Import your client testimonial images for the video carousel
import clientFullFixed1 from '../../../assets/clientFullFixed1.png';
import clientFullFixed2 from '../../../assets/clientFullFixed2.png';
import clientFullFixed3 from '../../../assets/clientFullFixed3.png';

import LessSign from '../../../assets/less-sign.png';
import GreaterSign from '../../../assets/greater-sign.png';
// Import Trustpilot testimonial images
import Testimonial1 from '../../../assets/Testimonial-1-CommerceKind.png';
import Testimonial2 from '../../../assets/Testimonial-2-CommerceKind.png';
import Testimonial3 from '../../../assets/Testimonial-3-CommerceKind.png';
import Testimonial4 from '../../../assets/Testimonial-4-CommerceKind.png';

// YouTube video IDs from the URLs you provided
const videoIds = [
  'bN79w77eKa0', // clientFullFixed1
  'y8gopVJ0Z2M', // clientFullFixed2
  'v11K2tANqEQ'  // clientFullFixed3
];

const TestimonialsSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // References for video carousel
  const videoThumbnails = [
    clientFullFixed1,
    clientFullFixed2,
    clientFullFixed3
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

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Don't Just Take Our Word for It –</h2>
          <h2>Hear What Our Clients Have to Say!</h2>
        </div>
        
        <div className="testimonials-content">
      
          <div className="testimonials-left">
            <img src={Testimonial3} alt="Trustpilot Review" />
            <img src={Testimonial4} alt="Trustpilot Review" />
            <img src={Testimonial1} alt="Trustpilot Review" />
            <img src={Testimonial2} alt="Trustpilot Review" />
          </div>
          
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
<img src={LessSign}/>
</button>
<button onClick={nextVideo} className="nav-right">
<img src={GreaterSign}/>
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
            <button className="close-modal" onClick={closeModal}>×</button>
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