import React from 'react';
import './FAQ.css';
import FAQi from './FAQi';
 
function FAQ() {
    // Define the FAQ data in App.jsx
  const faqData = [
    {
      id: 1,
      question: "What does JPT Amazon Solutions' Complete Brand Oversight entail?",
      answer: "JPT Amazon Solutions' Complete Brand Oversight represents an all-encompassing approach delivered by our agency, addressing every facet of your marketplace presence, including catalog enhancement, inventory coordination, and operational logistics, guaranteeing optimal exposure and revenue expansion for your business."
    },
    {
      id: 2,
      question: "How does JPT Amazon Solutions accelerate my marketplace revenue?",
      answer: "JPT Amazon Solutions excels in delivering specialized offerings including sponsored advertising oversight, catalog refinement, market analysis, and identity development, all engineered to amplify your platform performance through enhanced discoverability, elevated engagement rates, and optimized workflows."
    },
    {
      id: 3,
      question: "What comprises Sponsored Advertising Oversight?",
      answer: "Sponsored Advertising Oversight encompasses developing and supervising analytics-powered promotional initiatives on the marketplace to amplify your profitability metrics. Our experts refine your promotions to guarantee they connect with targeted consumers efficiently."
    },
    {
      id: 4,
      question: "How do you refine catalog entries?",
      answer: "We refine catalog entries through implementing search algorithm strategies to amplify discoverability and boost engagement metrics. This encompasses developing persuasive headlines, merchandise descriptions, and leveraging premium visuals."
    },
    {
      id: 5,
      question: "What comprises your market analysis methodology?",
      answer: "Our market analysis methodology involves discovering high-interest, minimal-rivalry merchandise that corresponds with your enterprise objectives. We evaluate industry patterns and buyer preferences to suggest optimal possibilities for your venture."
    },
    {
      id: 6,
      question: "Can you support merchandise introductions?",
      answer: "Absolutely, we deliver tactical merchandise introduction offerings that encompass organizing and implementing initiatives to present your items to the marketplace successfully, guaranteeing they achieve optimal exposure and revenue momentum."
    },
    {
      id: 7,
      question: "What does the Inventory Coordination offering include?",
      answer: "Our Inventory Coordination offering concentrates on optimizing your workflows to enhance productivity. This encompasses overseeing stock levels, distribution networks, and vendor connections to guarantee prompt merchandise accessibility and fulfillment."
    },
    {
      id: 8,
      question: "Do you provide tailored marketplace offerings aligned with my requirements?",
      answer: "Definitely! Whether you require sponsored advertising oversight, search optimization, catalog development, stock management, or identity safeguarding, we deliver personalized marketplace offerings to match your precise requirements. Our professionals customize approaches based on your enterprise objectives, guaranteeing focused resolutions that generate outcomes."
    },
    {
      id:9,
      question: "How do I begin partnering with JPT Amazon Solutions?",
      answer: "To begin partnering with JPT Amazon Solutions, simply reach out through our platform. Our professionals will explore your requirements and create a customized roadmap to assist you in maximizing your enterprise's complete capabilities on the marketplace."
    }
  ];


    return (
        <div className="FAQ">
            <FAQi faqData={faqData}/>
        </div>
    );
}
 
export default FAQ;