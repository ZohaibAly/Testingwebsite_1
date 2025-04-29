import React from 'react';
import './Contact.css';
import Testmonial from '../../Component/TestimonialSection/TestimonialSection';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
 import ContactFormComp from '../../Component/ContactFormComp/ContactFormComp';
 import GoogleMap from '../../Component/GoogleMap/GoogleMap';
function Contact() {
    return (
        <div className="Contact">
            <BreadcrumbBanner/>
            <ContactFormComp/>
            <Testmonial/>
            <GoogleMap/>
            <FreeStoreComp/>
        </div>
    );
}

export default Contact;
