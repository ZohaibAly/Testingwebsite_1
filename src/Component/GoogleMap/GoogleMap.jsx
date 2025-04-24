import React, { useEffect, useRef, useState } from 'react';
import './GoogleMap.css';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Your address
  const address = "7628 103rd St Jacksonville, FL 32210";
  
  // Replace with your actual Google Maps API key
  const API_KEY = "AIzaSyDmIq3KEK4MExzXN5eeY4t6l__daR7PgB4";

  useEffect(() => {
    // Add the Google Maps script to the page
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;

    // Initialize the geocoder
    const geocoder = new window.google.maps.Geocoder();

    // Convert address to coordinates
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        
        // Create the map
        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 16,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl: true,
          zoomControl: true
        });

        // Add a marker
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
          animation: window.google.maps.Animation.DROP
        });

        // Add info window with address
        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div style="padding: 10px;"><strong>${address}</strong></div>`
        });
        
        // Open info window when marker is clicked
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
        
        // Open info window by default
        infoWindow.open(map, marker);
      } else {
        console.error('Geocoding failed due to: ' + status);
        alert('Could not find the address on the map. Please check the address and try again.');
      }
    });
  }, [mapLoaded, address]);

  return (
    <div className="google-map-container">
      <div className="google-map" ref={mapRef}></div>
    </div>
  );
};

export default GoogleMap;