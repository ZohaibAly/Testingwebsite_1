import React from 'react';
import Navbar from './Component/NavbarComponent/NavbarComponent';
import BrandLogosComp from './Component/Home/BrandCarouselComp/BrandCarouselComp';
import './App.css';
import AmazonHeroComponent from './Component/Home/AmazonHeroComp/AmazonHeroComp';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AmazonHeroComponent />
      <BrandLogosComp/>
     
    </div>
  );
}

export default App;