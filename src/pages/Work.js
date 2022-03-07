import React, { useState } from "react";
import Project from "../components/Project";
import FadeUp from "../animations/FadeUp";
// import "../styles/index.css";
import { Fade } from "react-awesome-reveal";
// import { StaticImage } from "gatsby-plugin-image";
import projectData from "../content/content.js";
import Modal from "../components/Modal";
// import JSONData from "../../content/data.json";

function Work() {
	const [isModal, setIsModal] = useState(false);
	console.log(projectData)

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
								featuredImg1={project.featuredImg1}
								featuredImg2={project.featuredImg2}
								featuredImg3={project.featuredImg3}
								featuredText1={project.featuredText1}
								featuredText2={project.featuredText2}
								
							/>
						))}
						{/* <li className="project">
								<button className="expand" onClick={() => setIsModal(true)}>
									Expand
								</button>

								<div className="image-container">
									<StaticImage
										src="../images/flow-with-megmo.png"
										alt="flow with megmo screenshot"
									/>
								</div>
								<h2 className="project-title">Flow with Megmo</h2>
								<p>
									A full stack marketing page + scheduling tool for an online
									yoga instructor. Production site launched February 2022.
								</p>
								<p>
									Stack: React, Mongo, Express, Node, GraphQL, Heroku, HTML, and
									CSS
								</p>
								<div className="project-link-container">
									<a
										className="project-link primary"
										href="http://www.flowwithmegmo.com/"
										target="_blank"
										rel="noreferrer"
									>
										View Live
									</a>
									<a
										className="project-link"
										href="https://github.com/jeremiah-quill/flow-with-megmo"
										target="_blank"
										rel="noreferrer"
									>
										View Github
									</a>
								</div>
							</li>
							<li className="project">
								<div className="expand">Expand</div>

								<div className="image-container">
									<StaticImage
										src="../images/wishlist.png"
										alt="wishlist screenshot"
									/>
								</div>
								<h2 className="project-title">Wishlist</h2>
								<p>
									Manage your secret santa exchanges in one place. Create
									wishlists to share with others so they know what to get you.
								</p>
								<p>
									Stack: Javascript, MySQL, Express, Node, Heroku, HTML, and CSS
								</p>
								<div className="project-link-container">
									<a
										className="project-link primary"
										href="https://wishlistmanager.herokuapp.com/"
										target="_blank"
										rel="noreferrer"
									>
										View Live
									</a>
									<a
										className="project-link"
										href="https://github.com/jeremiah-quill/gift-exchange-manager"
										target="_blank"
										rel="noreferrer"
									>
										View Github
									</a>
								</div>
							</li>
							<li className="project">
								<div className="expand">Expand</div>
								<div className="image-container">
									<StaticImage
										src="../images/playlists.png"
										alt="flow with megmo screenshot"
									/>
								</div>
								<h2 className="project-title">Playlists</h2>
								<p>
									A tool for creating randomized Spotify playlists on the fly.
									Utilizes Spotify API with implicit grant flow to access user's
									spotify playlists.
								</p>
								<p>Stack: React, MaterialUI, HTML, and CSS</p>
								<div className="project-link-container">
									<a
										className="project-link primary"
										href="https://jeremiah-quill.github.io/spotify-playlists/"
										target="_blank"
										rel="noreferrer"
									>
										View Live
									</a>
									<a
										className="project-link"
										href="https://github.com/jeremiah-quill/spotify-playlists"
										target="_blank"
										rel="noreferrer"
									>
										View Github
									</a>
								</div>
							</li>
							<li className="project">
								<div className="image-container">
									<StaticImage
										src="../images/hero-helper.png"
										alt="hero helper screenshot"
									/>
								</div>
								<h2 className="project-title">Hero Helper</h2>
								<p>
									Mock up a landing page within seconds without writing a single
									line of code. Incorporates Unsplash API for searching of
									quality images.
								</p>
								<p>Stack: Javascript, HTML, and CSS</p>
								<div className="project-link-container">
									<a
										className="project-link primary"
										href="https://jeremiah-quill.github.io/hero-helper/"
										target="_blank"
										rel="noreferrer"
									>
										View Live
									</a>
									<a
										className="project-link"
										href="https://github.com/jeremiah-quill/hero-helper"
										target="_blank"
										rel="noreferrer"
									>
										View Github
									</a>
								</div>
							</li>
							<li className="project">
								<div className="image-container">
									<StaticImage
										src="../images/recipe-rundown.png"
										alt="recipe rundown screenshot"
									/>
								</div>
								<h2 className="project-title">Recipe Rundown</h2>
								<p>
									A social CRUD web app for creating, sharing, and discovering
									recipes.
								</p>
								<p>Stack: Javascript, Express, Mongo, Node, HTML, and CSS</p>
								<div className="project-link-container">
									<a
										className="project-link primary"
										href="http://www.reciperundown.com/"
										target="_blank"
										rel="noreferrer"
									>
										View Live
									</a>
									<a
										className="project-link"
										href="https://github.com/jeremiah-quill/recipe-rundown"
										target="_blank"
										rel="noreferrer"
									>
										View Github
									</a>
								</div>
							</li>
							<li className="project">
								<div className="image-container">
									<StaticImage
										src="../images/room-homepage.png"
										alt="room homepage screenshot"
									/>
								</div>
								<h2 className="project-title">E-commerce Homepage</h2>
								<p>
									A mock up of an e-commerce landing page. Created to practice
									my React and CSS skills by accurately reproducing a JPG design
									with mobile responsiveness.
								</p>
								<p>Stack: React, HTML, and CSS</p>
								<div className="project-link-container">
									<a
										className="project-link primary"
										href="https://jeremiah-quill.github.io/room-homepage/"
										target="_blank"
										rel="noreferrer"
									>
										View Live
									</a>
									<a
										className="project-link"
										href="https://github.com/jeremiah-quill/room-homepage"
										target="_blank"
										rel="noreferrer"
									>
										View Github
									</a>
								</div>
							</li>
							<li className="project">
								<div className="image-container">
									<StaticImage
										src="../images/e-commerce-product.png"
										alt="recipe rundown screenshot"
									/>
								</div>
								<h2 className="project-title">E-Commerce Product</h2>
								<p>
									A mock up of an e-commerce product page with limited
									functionality. Created to practice my React and CSS skills by
									accurately reproducing a JPG design.
								</p>
								<p>Stack: React, HTML, and CSS</p>
								<div className="project-link-container">
									<a
										className="project-link primary"
										href="https://jeremiah-quill.github.io/react-product-page/"
										target="_blank"
										rel="noreferrer"
									>
										View Live
									</a>
									<a
										className="project-link"
										href="https://github.com/jeremiah-quill/react-product-page"
										target="_blank"
										rel="noreferrer"
									>
										View Github
									</a>
								</div>
							</li>
							<li className="project">
								<div className="image-container">
									<StaticImage
										src="../images/manage.png"
										alt="manage screenshot"
									/>
								</div>
								<h2 className="project-title">SaaS Landing Page</h2>
								<p>
									A mock up of a SaaS product landing page. Created to practice
									my CSS (specifically layout and responsiveness) skills by
									accurately reproducing a JPG design.
								</p>
								<p>Stack: HTML, and CSS</p>
								<div className="project-link-container">
									<a
										className="project-link primary"
										href="https://jeremiah-quill.github.io/manage-landing-page/"
										target="_blank"
										rel="noreferrer"
									>
										View Live
									</a>
									<a
										className="project-link"
										href="https://github.com/jeremiah-quill/manage-landing-page"
										target="_blank"
										rel="noreferrer"
									>
										View Github
									</a>
								</div>
							</li> */}
					</Fade>
				</ul>
			</div>
		</section>
	);
}

export default Work;
