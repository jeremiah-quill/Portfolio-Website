import React from 'react';
import projectData from '../content/content.js';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Socials from '../components/Socials';
import { motion } from 'framer-motion';
import { pageFade, pageFadeTransition } from '../animations/variants';
import ProgressiveImg from '../components/ProgressiveImg';

const Home = () => {
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
            <ProgressiveImg
              className="bio-img"
              aspectRatio="1"
              lowQualityImg={'./images/bio-img-compress_small.png'}
              highQualityImg={'./images/bio-img-compress.png'}
            />
            <p className="bio">
              I'm a self-taught deveoper with a wide range of skills across the stack and a passion
              for learning. I recently graduated from a full stack bootcamp offered by UPenn where I
              was able to refine my skills and experience working as part of a team.
              <br></br>
              <br></br>
              My background is in finanace and accounting, specifically in the corporate real estate
              industry, which has given me invaluable experience as a professional. I am organized,
              work well on my own or as part of a team, and understand how to manage to a deadline.
              <br></br>
              <br></br>
              That's my son, Remi, you see over there. He's a cool little dude. I want to show him
              as he grows up that it's never too late to re-invent yourself and find success in your
              passions. That's why I continue to grind every day to improve as a developer.
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
            {projectData.map((project, idx) => (
              <Project project={project} key={idx} />
            ))}
          </ul>
          <div className="flex justify-center mt-5">
            <p>
              Or checkout my{` `}
              <a
                className="text-orange-accent font-bold hover:underline"
                href="https://github.com/jeremiah-quill"
                target="_blank"
                rel="noreferrer">
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
