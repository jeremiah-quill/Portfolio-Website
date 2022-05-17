import React from 'react';
import { Link } from 'react-router-dom';

function Project({ project }) {
  const { caseStudyUrl, imgSrc, alt, title, description, stack } = project;

  const techStack = stack.map((tech, idx) => {
    if (idx === stack.length - 1) {
      return `${tech}`;
    } else return `${tech}, `;
  });

  return (
    <Link to={`/${caseStudyUrl}`}>
      <li className={`project featured h-full`}>
        <div>
          <div className={`image-container featured`}>
            <img src={imgSrc} alt={alt} />
          </div>
          <h2 className="project-title text-center">{title}</h2>
          <p className="text-black text-base">{description}</p>
        </div>
        <div className="mt-5">
          <h3 className="m-auto text-black">Stack:</h3>
          <ul className="text-black text-sm">{techStack}</ul>
        </div>
      </li>
    </Link>
  );
}

export default Project;
