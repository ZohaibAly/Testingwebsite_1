import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/Logo-HD-CommerceKind.png';
import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <div className='parent'>
      <div className='child1'>
        <div className='p1'>
          <div className='email-container'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>info@commercekind.com</span>
          </div>
          <div className='divider'>|</div>
          <div className='phone-container'>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <span>(659) 209-3973</span>
          </div>
        </div>
        <div className='p2'>
          <div className='links'>
            <Link to="/careers">Careers</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/frequently-asked-questions">FAQs</Link>
            <a href="https://www.trustpilot.com/review/commercekind.com" target='_blank'>Reviews</a>
          </div>
          <div className='divider'>|</div>
          <div className='socials'>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
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
          <Link to="/before-after">Before and After</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className='actions'>
          <div className='search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <button className='try-button'>Try Free</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;