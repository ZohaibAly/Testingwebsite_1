import React, { useState } from 'react';
import './FAQ.css';

const FAQi = ({ faqData }) => {
    const [openItem, setOpenItem] = useState(null);

    const toggleAccordion = (id) => {
        setOpenItem((prevOpenItem) =>
            prevOpenItem === id ? null : id
        );
    };

    return (
        <div className='FAQ-main'>
            
            <div className="Blurred-ellipse"></div>
            <div className="FAQ-main-text">
                <h2 className='FAQ-main-heading'>
                    <span>Got Questions?</span> We've Got Answers!
                </h2>
                <p className='FAQ-main-p'>
                    We handle the complexities of Amazon so you can focus on growth.
                    From strategy to execution, our expert team is here to maximize your success.
                </p>
            </div>
            
            {/* FAQ Accordion section */}
            <div className="FAQ-accordion">
                {faqData && faqData.map((item) => (
                    <div key={item.id} className="FAQ-accordion-item">
                        <div className={`FAQ-accordion-header ${openItem === item.id ? 'active' : ''}`}
                            onClick={() => toggleAccordion(item.id)}
                        >
                            <h3>{item.question}</h3>
                            <span className="FAQ-accordion-icon">
                                {openItem === item.id ? '-' : '+'}
                            </span>
                        </div>
                        
                        <div className={`FAQ-accordion-content ${openItem === item.id ? 'active' : ''}`}>
                            <div className="FAQ-accordion-content-inner">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQi;