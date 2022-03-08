import React, { useState } from "react";
import Project from "../components/Project";
import FadeUp from "../animations/FadeUp";
import { Fade } from "react-awesome-reveal";
import projectData from "../content/content.js";
import Modal from "../components/Modal";

function Work() {
	const [isModal, setIsModal] = useState(false);

	return (
		<section className="section-3">
			<Modal isModal={isModal} setIsModal={setIsModal} />

			<div className="section-container page-container">
				<FadeUp duration={1000} triggerOnce={true} fraction={1}>
					<h1 className="section-title">
						Here are some of the things I've made
					</h1>
				</FadeUp>
				<ul className="project-list">
					<Fade
						cascade={true}
						damping={0.25}
						triggerOnce
						direction="up"
						duration={500}
						// delay={750}
					>
						{projectData.map((project, idx) => (
							<Project
								key={idx}
								imgSrc={project.imgSrc}
								alt={project.alt}
								title={project.title}
								description={project.description}
								stack={project.stack}
								liveLink={project.liveLink}
								codeLink={project.codeLink}
								isFeatured={project.isFeatured}
								featuredImgs={project.featuredImgs}
								featuredText1={project.featuredText1}
								featuredText2={project.featuredText2}
							/>
						))}
					</Fade>
				</ul>
			</div>
		</section>
	);
}

export default Work;
