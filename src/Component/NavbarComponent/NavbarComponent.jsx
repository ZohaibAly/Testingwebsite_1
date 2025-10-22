import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/Logo-HD-JPT.png';
import './NavbarComponent.css';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='parent'>
      <div className='child1'>
        <div className='p1'>
          <div className='email-container'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>yeshua@jptamzsolutions.com</span>
          </div>
          <div className='divider'>|</div>
          <div className='phone-container'>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <span>(555) 942-1765</span>
          </div>
        </div>
        <div className='p2'>
          <div className='links'>
            <Link to="/blog">Blog</Link>
            <Link to="/frequently-asked-questions">FAQs</Link>
     
          </div>
          <div className='divider'>|</div>
          <div className='socials'>
            <a href="https://www.facebook.com/CommercekindLLC/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/commercekindllc/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/company/commercekindllc/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
          </div>
        </div>
      </div>
      <div className='child2'>
        <div className='logo'>
          <Link to="/"><img src={Logo} alt="CommerceKind Logo" /></Link>
        </div>
        <div className='navigation'>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/All-Transformation">All Transformations</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact-us">Contact</Link>
        </div>
        <div className='actions'>
          {/* <div className='search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div> */}
         <Link to="/contact-us">
         <button className='try-button'>Get Started</button>
            </Link>

        </div>
        <div className='hamburger-icon' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-header'>
          <div className='close-icon' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div className='mobile-navigation'>
          <Link to="/case-studies" onClick={toggleMenu} className='nav-links'>Case Studies</Link>
          <Link to="/All-Transformation" onClick={toggleMenu} className='nav-links'>See All Transformations</Link>
          <Link to="/services" onClick={toggleMenu} className='nav-links'>Services</Link>
          <Link to="/contact-us" onClick={toggleMenu} className='nav-links'>Contact</Link>
        </div>
        <div className='mobile-top-links'>
          <Link to="/blog" onClick={toggleMenu} className='nav-links'>Blog</Link>
          <Link to="/frequently-asked-questions" onClick={toggleMenu} className='nav-links'>FAQs</Link>
        </div>
        <div className='mobile-socials'>
          <a href="https://www.facebook.com/CommercekindLLC/" onClick={toggleMenu} className='nav-links'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/commercekindllc/" onClick={toggleMenu} className='nav-links'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/commercekindllc/" onClick={toggleMenu} className='nav-links'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" onClick={toggleMenu} className='nav-links'>
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
        <div className='mobile-actions'>
          <button className='try-button' onClick={toggleMenu}>Try Free</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;