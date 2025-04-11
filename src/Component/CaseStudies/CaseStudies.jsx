import React from 'react';
import './CaseStudies.css';
import { Link } from 'react-router-dom';
import image1 from '../../assets/casestudies-image1.png';
import image2 from '../../assets/casestudies-image1.png';

const CaseStudies = () => {
    return(
        <div className='casestudies-main'>
            <div className="casestudies-item">
                <div className="casestudiesimg">
                <img src={image1} alt="Case Study" />
                </div>
                <div className="casestudies-content">
                    <div className='heading-text'>
                        <h3>Supplements Multivitamins</h3>
                    </div>
                    <div className='para-text'>
                        <h4>Strategic Growth for Bariatric Multivitamins Brand</h4>
                    </div>
                    <div className='buttons-all'>
                        <Link to="#">
                            <button>Sales</button>
                        </Link>
                        <Link to="#">
                            <button>UX & Design</button>
                        </Link>
                        <Link to="#">
                            <button>Marketing</button>
                        </Link>
                        <Link to="#">
                            <button>Product Management</button>
                        </Link>
                        
                    </div>
                    <div className='para-down'>
                        <span>
                        2.5X Sales Growth – Scaling a brand’s Bariatric Multivitamin 45mg 90ct on Amazon</span>
                    </div>
                    <div className='btn-last'>
                    <Link to="#">
                            <button>View Case Study</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies;