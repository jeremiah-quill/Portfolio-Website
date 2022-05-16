import React from 'react';
import { Link } from 'react-router-dom';

function Project({ caseStudyUrl, imgSrc, alt, title, description, stack }) {
  return (
    <Link to={`/${caseStudyUrl}`}>
      <li className={`project featured`}>
        <div className={`image-container featured`}>
          <img src={imgSrc} alt={alt} />
        </div>
        <h2 className="project-title">{title}</h2>
        <p>{description}</p>
        <p className="mt-3">Stack: {stack}</p>
      </li>
    </Link>
  );
}

export default Project;
