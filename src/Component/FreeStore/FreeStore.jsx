import React from 'react';
import { Link } from 'react-router-dom';
import './FreeStore.css';

const FreeStore = () => {
    return (
        <div className='FreeStore-main Goodle-map'>
            <div className='FreeStore-text'>
               <h2>Prepared To Generate 5x Revenue?</h2>
            </div>
            <div className="FreeStore-btn">
            <Link to="/contact-us"><button className='free-store-btn'> Business Analysis</button></Link>
            </div>
        </div>
    );
}

export default FreeStore;
