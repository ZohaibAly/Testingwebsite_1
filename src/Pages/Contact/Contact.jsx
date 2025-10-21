import React from 'react';
import './Contact.css';
import FreeStoreComp from '../../Component/FreeStore/FreeStore';
import BreadcrumbBanner from '../../Component/BreadcrumbBanner/BreadcrumbBanner';
 import ContactFormComp from '../../Component/ContactFormComp/ContactFormComp';
function Contact() {
    return (
        <div className="Contact">
            <BreadcrumbBanner/>
            <ContactFormComp/>
            <FreeStoreComp/>
        </div>
    );
}

export default Contact;
