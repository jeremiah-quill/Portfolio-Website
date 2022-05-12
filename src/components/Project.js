import React from 'react';
import { useModalContext } from '../contexts/ModalContext';
import { useWidthContext } from '../contexts/WidthContext';
import FeaturedContent from './FeaturedContent';
import { Link } from 'react-router-dom';

function Project({
  caseStudyUrl,
  imgSrc,
  alt,
  title,
  description,
  stack,
  liveLink,
  codeLink,
  featuredImgs,
  featuredText1,
  featuredText2,
  isFeatured,
}) {
  const { configureModal } = useModalContext();

  const handleClick = (e) => {
    if (e.target.classList.contains('project-link')) return;
    if (isFeatured) {
      configureModal(
        <FeaturedContent
          featuredImgs={featuredImgs}
          featuredText1={featuredText1}
          featuredText2={featuredText2}
        />
      );
    }
  };

  return (
    <Link to={`/${caseStudyUrl}`}>
      <li
        // onClick={handleClick}
        className={`project ${isFeatured ? 'featured' : ''}`}>
        {isFeatured ? <div className="expand">Details</div> : ''}
        <div
          // onClick={handleClick}
          className={`image-container ${isFeatured ? 'featured' : ''}`}>
          <img src={imgSrc} alt={alt} />
        </div>
        <h2 className="project-title">{title}</h2>

        <p>{description}</p>
        <p>Stack: {stack}</p>
        {/* <div className="project-link-container">
				<a className="project-link primary" href={liveLink} target="_blank"  rel="noreferrer">
					View Live
				</a>
				<a className="project-link" href={codeLink} target="_blank"  rel="noreferrer">
					View Github
				</a>
			</div> */}
      </li>
    </Link>
  );
}

export default Project;
