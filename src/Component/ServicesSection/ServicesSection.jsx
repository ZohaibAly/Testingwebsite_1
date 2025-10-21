import React from "react";
import { Link } from 'react-router-dom';
import "./ServicesSection.css";
import SerImage1 from '../../assets/Services-image1.png';
import SerImage2 from '../../assets/Services-image2.png';
import SerImage3 from '../../assets/Services-image3.png'; 
import SerImage4 from '../../assets/Services-image4.png';
import SerImage5 from '../../assets/Services-image5.png';
import SerImage6 from '../../assets/Services-image6.png';

const ServicesSection = () => {
    return (
        <div className="services-component">
            {/* Heading Section */}
            <div className="services-component__TOP">
                <div className="services-component__upper-container">
                    <h2 className="services-component__title">What Can We Do For Your Brand?</h2>
                    <h1 className="services-component__subtitle">
                    From Strategy to Sales, We Drive <br /> Results That Matter!
                    </h1>
                </div>

                {/* Services Section */}
                <section className="services-component__services-section">
                    <div className="services-component__cards-container">
                        <div className="services-component__card">
                            <h2>Marketplace Advertising</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage1} alt="Amazon PPC Management" className="services-component__card-image" />
                            </div>
                            <p>
                                Launch targeted campaigns that place your products where shoppers search, maximizing ROI through smart bidding and strategic ad placements.
                            </p>
                        </div>

                        <div className="services-component__card">
                            <h2>Catalog Optimization</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage2} alt="E-commerce Growth" className="services-component__card-image" />
                            </div>
                            <p>
                                 Elevate product discoverability with search-optimized titles, feature bullets, and A+ Brand Stories that rank higher and convert faster.
                            </p>
                        </div>

                        <div className="services-component__card">
                            <h2>Visual Content</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage3} alt="Shopify Optimization" className="services-component__card-image" />
                            </div>
                            <p>
                                Create scroll-stopping infographics, lifestyle photos, and demo videos that answer questions visually and reduce hesitation at checkout.
                            </p>
                        </div>

                        <div className="services-component__card">
                            <h2>Engagement Enhancement</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage4} alt="Shopify Optimization" className="services-component__card-image" />
                            </div>
                            <p>
                                Increase impression-to-click ratios with attention-grabbing main images, benefit-focused copy, and strategic badge utilization.
                            </p>
                        </div>

                        <div className="services-component__card">
                            <h2>Conversion Amplification</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage5} alt="Shopify Optimization" className="services-component__card-image" />
                            </div>
                            <p>
                                Turn browsers into buyers through persuasive messaging, trust-building social proof, and friction-free purchasing experiences.
                            </p>
                        </div>

                        <div className="services-component__card">
                            <h2>Channel Oversight</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage6} alt="Shopify Optimization" className="services-component__card-image" />
                            </div>
                            <p>
                                Maintain seller health with proactive monitoring, case management, stock level optimization, and automated workflow systems.
                            </p>
                        </div>
                    </div>
                    
                        <div className="services-component__btn">
                        <Link to="/contact-us"><button>Contact Us Now</button></Link>
                            
                        </div>
                    
                </section>
            </div>
        </div>
    );
};

export default ServicesSection;
