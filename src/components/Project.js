import React from "react";
import { useModalContext } from "../contexts/ModalContext";
import FeaturedContent from "./FeaturedContent";

function Project({
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

	return (
		<li className="project">
			{isFeatured ? (
				<button
					className="expand"
					onClick={() =>
						configureModal(
							<FeaturedContent
								featuredImgs={featuredImgs}
								featuredText1={featuredText1}
								featuredText2={featuredText2}
							/>
						)
					}
				>
					Details
				</button>
			) : (
				""
			)}
			<div className="image-container">
				<img src={imgSrc} alt={alt} />
			</div>
			<h2 className="project-title">{title}</h2>

			<p>{description}</p>
			<p>Stack: {stack}</p>
			<div className="project-link-container">
				<a className="project-link primary" href={liveLink} target="_blank">
					View Live
				</a>
				<a className="project-link" href={codeLink} target="_blank">
					View Github
				</a>
			</div>
		</li>
	);
}

export default Project;
