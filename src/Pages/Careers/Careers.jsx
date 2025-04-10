import React from 'react';
import './Careers.css';
import Testmonial from '../../Component/Home/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';

function Careers() {
    return (
        <div className="Careers">
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default Careers;
