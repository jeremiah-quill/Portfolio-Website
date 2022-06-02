import React from "react";
import { Link } from "react-router-dom";

function Project({ project }) {
  const { caseStudyUrl, imgSrc, alt, title, description, stack } = project;

  const techStack = stack.map((tech, idx) => {
    if (idx === stack.length - 1) {
      return `${tech}`;
    } else return `${tech}, `;
  });

  return (
    <li
      className={`w-full rounded-xl transition-all p-2 border-4 border-transparent hover:border-orange-accent hover:border-4 lg:w-[50%] lg:mb-10`}>
      <Link to={`/${caseStudyUrl}`}>
        <div>
          <h2 className="text-center text-orange-accent text-xl">{title}</h2>
          <p className="text-white text-sm text-center mb-2">{description}</p>
          <img src={imgSrc} alt={alt} className="aspect-[4/3] rounded-xl w-full" />
        </div>
        <div className="mt-2 text-center">
          <h3 className="m-auto text-white">Stack:</h3>
          <ul className="text-white text-sm">{techStack}</ul>
        </div>
      </Link>
    </li>
  );
}

export default Project;
