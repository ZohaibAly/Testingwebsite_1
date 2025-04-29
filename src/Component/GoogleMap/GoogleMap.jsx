// GoogleMap.jsx
import React from 'react';
import './GoogleMap.css';

const GoogleMap = () => (
  <div id="google-map">
    <iframe
      title="Google Map"
      src="https://maps.google.com/maps?q=132%20Dartmouth%20St%2C%20Boston%2C%20MA%2002116%2C%20USA&output=embed"
      allowFullScreen
      loading="lazy"
    />
  </div>
);

export default GoogleMap;
