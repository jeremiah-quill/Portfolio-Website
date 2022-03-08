import React, { useState } from "react";
import FadeUp from "../animations/FadeUp";
import { Link } from "react-router-dom";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import projectData from "../content/content.js";
import Project from "../components/Project";

const Home = () => {
	const [featuredProjects, setFeaturedProjects] = useState([
		projectData[0],
		projectData[1],
		projectData[2],
	]);

	return (
		<div className="main-container">
			<section className="section-1">
				<div className="section-container">
					<FadeUp duration={1000} triggerOnce={true} fraction={1}>
						<h1 className="section-title">
							I'm Jeremiah, a front end developer
						</h1>
					</FadeUp>
				</div>
			</section>
			<section className="section-2">
				<div className="section-container">
					<FadeUp duration={1000} triggerOnce={true} fraction={1}>
						<h1 className="section-title">
							I'm always learning new technologies
						</h1>
					</FadeUp>
					<ul className="skill-list">
						<Fade
							delay={1000}
							cascade={true}
							damping={0.25}
							triggerOnce
							direction="up"
							duration={500}
							fraction={1}
						>
							<li className="pill">HTML</li>
							<li className="pill">CSS</li>
							<li className="pill">Javascript</li>
							<li className="pill">React</li>
							<li className="pill">React Transition Group</li>
							<li className="pill">React Router</li>
							<li className="pill">Mobile Design</li>
							<li className="pill">NodeJS</li>
							<li className="pill">MongoDB</li>
							<li className="pill">Heroku</li>
							<li className="pill">Express</li>
							<li className="pill">GraphQL</li>
							<li className="pill">Apollo Client</li>
						</Fade>
					</ul>
				</div>
			</section>
			<section className="section-3">
				<div className="section-container">
					<FadeUp duration={1000} triggerOnce={true} fraction={1}>
						<h1 className="section-title">
							Here are some of the things I've made
						</h1>
					</FadeUp>
					<ul className="project-list">
						<Fade
							triggerOnce={true}
							cascade={true}
							damping={0.25}
							triggerOnce
							direction="up"
							duration={500}
							fraction={0.5}
							delay={500}
						>
							{featuredProjects.map((project, idx) => (
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
					<div className="flex-center-container">
						<Fade delay={1000} triggerOnce fraction={1}>
							<AttentionSeeker
								effect="tada"
								triggerOnce
								delay={0}
								fraction={1}
							>
								<Link to={"/work"} className="btn secondary">
									View all
								</Link>
							</AttentionSeeker>
						</Fade>
					</div>
				</div>
			</section>
			<section className="section-8">
				<div className="section-container">
					<FadeUp triggerOnce duration={1000} fraction={1}>
						<h1 className="section-title">Contact me</h1>
					</FadeUp>
					<form className="contact-form">
						<div className="input-group">
							<Fade
								cascade={true}
								damping={0.25}
								triggerOnce
								direction="up"
								duration={500}
								delay={750}
								fraction={1}
							>
								<label>First Name</label>
								<input
									className="underline-input"
									placeholder="John"
									type="text"
								/>
							</Fade>
						</div>

						<div className="input-group">
							<Fade
								cascade={true}
								damping={0.25}
								triggerOnce
								direction="up"
								duration={500}
								fraction={1}
								delay={1000}
							>
								<label>Last Name</label>
								<input
									className="underline-input"
									placeholder="Smith"
									type="text"
								/>
							</Fade>
						</div>

						<div className="input-group">
							<Fade
								cascade={true}
								damping={0.25}
								triggerOnce
								direction="up"
								duration={500}
								fraction={1}
								delay={1250}
							>
								<label>Email</label>
								<input
									className="underline-input"
									placeholder="tech-person@tech.com"
									type="email"
								/>
							</Fade>
						</div>
						<div className="input-group">
							<Fade
								cascade={true}
								damping={0.25}
								triggerOnce
								direction="up"
								duration={500}
								fraction={1}
								delay={1500}
							>
								<label>Message</label>
								<textarea
									className="underline-input"
									placeholder="let's make something cool together!"
								></textarea>
							</Fade>
						</div>
						<div className="flex-center-container">
							<Fade direction="up" delay={1750} fraction={1} triggerOnce>
								<input className="btn secondary input-submit" type="submit" />
							</Fade>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Home;
