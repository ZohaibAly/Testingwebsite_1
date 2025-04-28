import React from 'react';
import './GoogleMap.css';

const GoogleMap = () => {
  // Coordinates for the location
  const lat = 37.39094933041195;
  const lng = -122.02503913145092;

  return (
    <div className="google-map-container">
      <iframe
        className="google-map"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${lat},${lng}`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;