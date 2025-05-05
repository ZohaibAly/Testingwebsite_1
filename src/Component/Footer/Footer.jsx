import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import frame1 from '../../assets/Logo-HD-CommerceKind.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
        <div className='Footer-Parent'>
            <div className='Footer-main'>
            <div className='Footerpt-1'>
                <div>
                    <img className='image-1' src={frame1} alt="" />
                </div>
                <p>
                    CommerceKind is your trusted partner for Amazon’s success. We empower businesses to grow their stores and accounts with tailored solutions and proven expertise.
                </p>
                <div className='Footerpt-1-images'>
                  <div className='Footer-1-icons'>  
                  <Link to="https://www.facebook.com/CommercekindLLC/"><FontAwesomeIcon icon={faFacebook} /></Link>
                  </div>
               <div className='Footer-1-icons'>
               <Link to="#"><FontAwesomeIcon icon={faXTwitter}  /></Link>
               </div>
              <div className='Footer-1-icons'>
              <Link to="https://www.instagram.com/commercekindllc/"><FontAwesomeIcon icon={faInstagram} /></Link>
              </div>
              <div className='Footer-1-icons'>
              <Link to="https://www.linkedin.com/company/commercekindllc/"><FontAwesomeIcon icon={faLinkedin} /></Link>
              </div>
               
                </div>
            </div>
            <div className='Footerpt-2'>
                <div className='Company'>
                    <h4>Company</h4>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/case-studies"><p>Case Studies</p></Link>
                    <Link to="/before-and-after"><p>Before and After</p></Link>
                    <Link to="/services"><p>Services</p></Link>
                    <Link to="/contact"><p>Contact</p></Link>
                </div>
                <div className='Quicklink'>
                    <h4>Quick Links</h4>
                    <Link to="/careers"><p>Careers</p></Link>
                    <Link to="/blog"><p>Blog</p></Link>
                    <Link to="/frequently-asked-questions"><p>FAQs</p></Link>
                    <a href="https://www.trustpilot.com/review/commercekind.com" target='_blank'><p>Reviews</p></a>
                </div>
                <div className='Newsletter'>
                    <h4>Others</h4>
                    <a href=""><p>Terms & Conditions</p></a>
                    <a href=""><p>Privacy Policy</p></a>
                </div>
            </div>
            
            <div className='Footerpt-3'>
                <h4>Newsletter</h4>
                <div className="Footer-input-wrapper">
                    <input type="text" placeholder="Enter Your Email" className="input-field" />
                    <button type="button">Subscribe</button>
                </div>
                <h4>Phone: </h4>
                <p>(659) 209-3973</p>
                <h4>Address: </h4>
                <p>7628 103rd St Jacksonville, FL 32210</p>
            </div>
        </div>

 
        </div>
        <div className="Footer-bottom">
        <span className='Footer-bottom-text'>Copyright © 2025 CommerceKind | Powered By <a href="https://develtro.com/">Develtro</a></span>
    </div>
    </div>
    );
}

export default Footer;