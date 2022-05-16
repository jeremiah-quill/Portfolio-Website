import React, { useState } from 'react';
import projectData from '../content/content.js';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Socials from '../components/Socials';
import { motion } from 'framer-motion';
import { pageFade, pageFadeTransition } from '../animations/variants';
import useProgressiveImg from '../hooks/useProgressiveImg.js';

const Home = () => {
  const [src, { blur }] = useProgressiveImg(
    './images/bio-img-compress_small.png',
    './images/bio-img-compress.png'
  );

  const [featuredProjects, setFeaturedProjects] = useState([
    projectData[0],
    projectData[1],
    projectData[2],
  ]);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageFade}
      transition={pageFadeTransition}
      className="main-container">
      <div className="inner-container">
        <div className="section-container">
          <h1 className="section-title main-section-title">I'm Jeremiah Quill</h1>
          <h2 className="sub-title">Front-end developer</h2>
          <Socials />

          <div className="bio-with-image">
            <img
              className="bio-img"
              alt="Jeremiah"
              src={src}
              style={{
                filter: blur ? 'blur(20px)' : 'none',
                transition: 'filter 0.3s ease-out',
              }}
            />
            <p className="bio">
              I'm currently a freelance full stack developer with a wide range of skills and a
              passion for learning. I am mostly self-taught but I don't let it hold me back from
              reaching my potential as a creator on the web. When learning on my own became
              overwhelming, as it can in the ever-changing world of web development, I enrolled and
              graduated from a full stack bootcamp offered by University of Pennsylvania.
              <br></br>
              <br></br>
              My background is in finanace and accounting, specifically in the corporate real estate
              industry, which has given me invaluable experience as a professional. I am organized,
              work well on my own or with others, and enjoy solving problems.
              <br></br>
              <br></br>
              As a father and husband, I want to make my family proud. It's why I decided to take
              the road less traveled and build a new career in the first place. It's why I continue
              to grind every day to improve as a developer. I want to prove to myself and set an
              example for my son that at 30, it's not too late to re-invent yourself and find
              success in your passions.
              <br></br>
              <br></br>
              I'm currently available for{' '}
              <span className="accent-orange-text">freelance opportunities</span>,{' '}
              <span className="accent-orange-text">contract roles</span>, or{' '}
              <span className="accent-orange-text">full time positions</span>. Please reach out @{' '}
              <span className="accent-orange-text">jcq5010@gmail.com</span>, I would love to hear
              from you!
            </p>
          </div>
        </div>
        <div className="section-container">
          <h1 className="section-title">I'm constantly adding to my toolbox of skills</h1>
          <div className="skills-container">
            <p className="skills-description">
              The modern web is always changing, so I am always learning. I enjoy fiddling with
              different tools across the web and finding the right fits for my development style,
              but I am also versatile. If a job is best served with a certain set of technologies,
              then I will make sure to take the time and dive deep when necessary.
              <br></br>
              <br></br>
              I'm currently teaching myself <span className="important-text">Gatsby</span>,{' '}
              <span className="important-text">Figma</span>, and{' '}
              <span className="important-text">Tailwind</span>.
            </p>
            <div>
              <h3 className="what-im-good-at">What I'm good at</h3>
              <ul className="skill-list">
                <li className="pill">HTML</li>
                <li className="pill">CSS</li>
                <li className="pill">Javascript</li>
                <li className="pill">React</li>
                <li className="pill">Framer Motion</li>
                <li className="pill">Sass</li>
                <li className="pill">React Transition Group</li>
                <li className="pill">React Router</li>
                <li className="pill">Mobile Design</li>
                <li className="pill">NodeJS</li>
                <li className="pill">MongoDB</li>
                <li className="pill">Heroku</li>
                <li className="pill">Netlify</li>
                <li className="pill">Express</li>
                <li className="pill">GraphQL</li>
                <li className="pill">Apollo Client</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-container">
          <h1 className="section-title">Take a look at my featured work</h1>
          <ul className="project-list">
            {featuredProjects.map((project, idx) => (
              <Project
                caseStudyUrl={project.caseStudyUrl}
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
          </ul>
          <div className="flex justify-center">
            <p>
              Or checkout my{` `}
              <a
                className="text-orange-accent font-bold hover:underline"
                href="https://github.com/jeremiah-quill"
                target="_blank"
                rel="noopener">
                Github.
              </a>
            </p>
          </div>
        </div>
        <Contact />
      </div>
    </motion.div>
  );
};

export default Home;
