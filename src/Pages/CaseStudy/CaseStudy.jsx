import React from 'react';
import './CaseStudy.css';

function CaseStudy({ title, content, color }) {
  return (
    <div>
        {title}
        {content}
        {color}
    </div>
  )
}

export default CaseStudy;