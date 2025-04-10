import React from 'react';
import './BeforeAfter.css';
import Testmonial from '../../Component/Home/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';

function BeforeAfter() {
    return (
        <div className="BeforeAfter">
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default BeforeAfter;
