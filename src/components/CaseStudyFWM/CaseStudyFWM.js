import React from 'react';
import { motion } from 'framer-motion';
import { pageFade, pageFadeTransition } from '../../animations/variants';
import useProgressiveImg from '../../hooks/useProgressiveImg';
import ProgressiveImg from '../ProgressiveImg';

const CaseStudyFWM = () => {
  const [src, { blur }] = useProgressiveImg(
    './images/case_studies/fwm/fwm_hero-small.png',
    './images/case_studies/fwm/fwm_hero.png'
  );

  const project = {
    headerDetails: {
      title: 'Flow with Megmo',
      subtitle: 'Full Stack Marketing Page + Scheduling Tool',
    },
    technologies: [
      'React',
      'Express',
      'NodeJS',
      'Heroku',
      'GraphQL',
      'Apollo',
      'React Router',
      'React Transition Group',
      'MongoDB',
      'Mongoose',
      'Bcrypt',
      'Nodemailer',
    ],
  };

  // title, subtitle, liveLink, codeLink, summary, technologies, notable features, feature spotlight, figures, conclusion, key takeaways

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageFade}
      transition={pageFadeTransition}>
      <div className="bg-blue-800 text-center py-32">
        <motion.h1 className="text-4xl mb-3">Flow with Megmo</motion.h1>
        <h2 className="text-xl">Full Stack Marketing Page + Scheduling Tool</h2>
        <div className="mt-10 flex justify-center gap-5">
          <a
            rel="noreferrer"
            href="http://www.flowwithmegmo.com/"
            target="_blank"
            className="bg-black text-white py-2 px-5 rounded">
            Live
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/jeremiah-quill/flow-with-megmo"
            target="_blank"
            className="bg-black text-white py-2 px-5 rounded">
            Repo
          </a>
        </div>
      </div>
      <div className="p-5 max-w-screen-lg m-auto flex flex-col gap-40 my-20">
        <div>
          {/* <ProgressiveImg
            lowQualityImg={'./images/case_studies/fwm/fwm_hero-low.png'}
            highQualityImg={'./images/case_studies/fwm/fwm_hero.png'}
          /> */}
          <img
            className="rounded"
            alt="flow with megmo"
            src={src}
            style={{
              filter: blur ? 'blur(20px)' : 'none',
              transition: blur ? 'none' : 'filter 0.3s ease-out',
            }}
          />
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Summary</h3>
          <p>
            Flow with Megmo is a full stack landing page and dashboard scheduling tool built in
            React. I built this website from scratch for my wife, a yoga instructor who is beginning
            an online yoga studio. The goal was to build a tool to help manage the process of
            scheduling, requesting payment, and handling any communications regarding upcoming yoga
            classes. She needed her students to be able to sign in as a user and register for class,
            where they would then be able to view and interact with the available schedule.
          </p>
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Technologies</h3>
          <ul className="flex justify-center max-w-xl flex-wrap gap-5 m-auto mb-5">
            {project.technologies.map((tech) => (
              <li key={tech} className="px-3 py-1 bg-white text-black rounded-3xl">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Notable Features</h3>
          <ul className="flex flex-col items-center">
            <li>User authentication</li>
            <li>Admin dashboard</li>
            <li>Student dashboard</li>
            <li>Spotify & Zoom Integrations</li>
            <li>Automated email notifications</li>
            <li>Animated route transitions</li>
            <li>Global modals and toasts</li>
          </ul>
        </div>
        <div>
          <h4 className="text-center mb-5 text-2xl">
            Feature Spotlight: Spotify & Zoom Integrations
          </h4>
          <p>
            Since my wife's classes are hosted through Zoom, the admin dashboard I built allows her
            to interact with the Zoom API to create, delete, and update Zoom meetings. Submitting
            the create class form fires an API call to Zoom which creates a meeting at her selected
            date and time. The newly created Zoom meeting ID and details are added to my Mongo
            database, where GraphQL queries fetch this data to display it on the schedule available
            to students. The other feature I added to the admin dashboard is the ability for my wife
            to add her Spotify playlist to completed classes to share with her students. I fetch my
            wife's Spotify playlists through the Spotify API and display them in a list so she is
            able to choose which playlist she used for each completed class
          </p>
        </div>
        <div>
          <img
            className="rounded mb-5"
            alt="flow with megmo"
            src="./images/case_studies/fwm/fwm_landing.gif"
          />
          <p className="text-xs text-left m-auto px-5">
            The initial landing page contains marketing information and a page transition when
            moving to and from the student dashboard.
          </p>
        </div>
        <div>
          <img
            className="rounded mb-5"
            alt="flow with megmo"
            src="./images/case_studies/fwm/fwm_crud.gif"
          />
          <p className="text-xs text-left m-auto px-5">
            The admin has control over creating, updating, and deleting classes.
          </p>
        </div>
        <div>
          <img
            className="rounded mb-5"
            alt="flow with megmo"
            src="./images/case_studies/fwm/fwm_playlist.gif"
          />
          <p className="text-xs text-left m-auto px-5">
            Students are able to view the Spotify playlist used in previous classes.
          </p>
        </div>
        <div>
          <img
            className="rounded mb-5"
            alt="flow with megmo"
            src="./images/case_studies/fwm/fwm_register_class.gif"
          />
          <p className="text-xs text-left m-auto px-5">
            Students are able to view and register for available classes, and cancel registered
            classes.
          </p>
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Key Takeaways</h3>
          <div>
            <p>
              Overall I am happy with Flow with Megmo. I was able to complete everything on my
              checklist and begin learning some new techniques (page transitions) and technologies
              (graphQL, Apollo) along the way. Even more than the end product itself, I am most
              proud of the lessons I've taken from the experience building it. A few of my
              takeaways:
            </p>
            <ul className="flex flex-col gap-5 mt-10 px-5">
              <li>
                <h4 className="mb-3 text-center text-lg text-orange-accent italic">
                  Have a clear direction for every decision
                </h4>
                <p>
                  The night before my presentation I realized I wanted to separate out the static
                  sections into a landing page and keep the scheduling functionality on a separate
                  dashboard page. I worked all night to entirely overhaul the layout and completed
                  it on time, however, if I had taken the time to properly plan this out from the
                  beginning I think I could have been able to make this decision before building the
                  entire project.
                </p>
              </li>
              <li>
                <h4 className="mb-3 text-center text-lg text-orange-accent italic">
                  Don't underestimate the complexity of state
                </h4>
                <p>
                  When I originally planned out this project I did not expect the state management
                  to become so complex. Turns out keeping a dashboard and database in sync is hard!
                  Utilizing features like Apollo's polling and caching, React's useReducer, or
                  Redux, I could have made my life much easier.
                </p>
              </li>
              <li>
                <h4 className="mb-3 text-center text-lg text-orange-accent italic">
                  Learn a component library or alternate styling solution
                </h4>
                <p>
                  I wrote plain CSS to style the entire landing page and dashboard, and I will
                  probably never do that again. To achieve a cohesive design and layout, I will
                  reach for component libraries like MaterialUI, CSS frameworks like Tailwind, or
                  styling solutions like SASS or Styled Components
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyFWM;
