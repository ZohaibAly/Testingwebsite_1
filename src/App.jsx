import React from 'react';
import Navbar from './Component/NavbarComponent/NavbarComponent';
import BrandLogosComp from './Component/Home/BrandCarouselComp/BrandCarouselComp';
import './App.css';
import AmazonHeroComponent from './Component/Home/AmazonHeroComp/AmazonHeroComp';
import CaseStudy from './Component/Home/CaseStudyComp/CaseStudyComp';
// import CardStudy from './Component/Home/CardCaseStudy/CardCaseStudy';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AmazonHeroComponent />
      <BrandLogosComp/>
      <CaseStudy/>
      
    </div>
  );
}

export default App;