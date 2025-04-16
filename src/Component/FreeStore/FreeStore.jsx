import React from 'react';
import { Link } from 'react-router-dom';
import './FreeStore.css';

const FreeStore = () => {
    return (
        <div className='FreeStore-main'>
            <div className='FreeStore-text'>
                <h2>Ready To Earn 5x More?</h2>
            </div>
            <div className="FreeStore-btn">
            <Link to="/contact"><button className='free-store-btn'>Free Store Audit</button></Link>
            </div>
        </div>
    );
}

export default FreeStore;
