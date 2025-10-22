import React from 'react';
import './Contact.css';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
 import ContactFormComp from '../../Component/ContactFormComp/ContactFormComp';
function Contact() {
    return (
        <div className="Contact">
            <BreadcrumbBanner/>
            <ContactFormComp/>
        </div>
    );
}

export default Contact;
