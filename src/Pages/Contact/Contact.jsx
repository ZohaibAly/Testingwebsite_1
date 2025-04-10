import React from 'react';
import './Contact.css';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';

function Contact() {
    return (
        <div className="Contact">
            <Testmonial/>
            <FreeStoreComp/>
        </div>
    );
}

export default Contact;
