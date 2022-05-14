import React from 'react';
import { Link } from 'react-router-dom';

function Project({ caseStudyUrl, imgSrc, alt, title, description, stack, isFeatured }) {
  return (
    <Link to={`/${caseStudyUrl}`}>
      <li className={`project ${isFeatured ? 'featured' : ''}`}>
        {isFeatured ? <div className="expand">Details</div> : ''}
        <div className={`image-container ${isFeatured ? 'featured' : ''}`}>
          <img src={imgSrc} alt={alt} />
        </div>
        <h2 className="project-title">{title}</h2>

        <p>{description}</p>
        <p>Stack: {stack}</p>
      </li>
    </Link>
  );
}

export default Project;
