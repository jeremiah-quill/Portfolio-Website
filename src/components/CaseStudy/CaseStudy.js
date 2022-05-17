import React from 'react';
import { motion } from 'framer-motion';
import { pageFade, pageFadeTransition } from '../../animations/variants';
import ProgressiveImg from '../ProgressiveImg/ProgressiveImg';

const CaseStudy = ({ project }) => {
  const {
    title,
    subtitle,
    liveLink,
    codeLink,
    featuredImgSmall,
    featuredImgBig,
    summary,
    stack,
    notableFeatures,
    featureSpotlight,
    figures,
    keyTakeaways,
  } = project;

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageFade}
      transition={pageFadeTransition}>
      <div className="bg-blue-800 text-center py-32">
        <motion.h1 className="text-4xl mb-3">{title}</motion.h1>
        <h2 className="text-xl">{subtitle}</h2>
        <div className="mt-10 flex justify-center gap-5">
          <a
            rel="noreferrer"
            href={liveLink}
            target="_blank"
            className="bg-black text-white py-2 px-5 rounded">
            Live
          </a>
          <a
            rel="noreferrer"
            href={codeLink}
            target="_blank"
            className="bg-black text-white py-2 px-5 rounded">
            Repo
          </a>
        </div>
      </div>
      <div className="p-5 max-w-screen-lg m-auto flex flex-col gap-40 my-20">
        <div style={{ aspectRatio: '1.6' }}>
          <ProgressiveImg
            aspectRatio="1.6"
            className="rounded"
            lowQualityImg={featuredImgSmall}
            highQualityImg={featuredImgBig}
          />
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Summary</h3>
          <p>{summary}</p>
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Technologies</h3>
          <ul className="flex justify-center max-w-xl flex-wrap gap-5 m-auto mb-5">
            {stack.map((tech) => (
              <li key={tech} className="px-3 py-1 bg-white text-black rounded-3xl">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Notable Features</h3>
          <ul className="flex flex-col items-center">
            {notableFeatures.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-center mb-5 text-2xl">Feature Spotlight: {featureSpotlight.title}</h4>
          <p>{featureSpotlight.content}</p>
        </div>
        {figures.map((figure) => (
          <div>
            <img className="rounded mb-5" alt={title} src={figure.imgUrl} />
            <p className="text-xs text-left m-auto px-5 text-center">{figure.caption}</p>
          </div>
        ))}
        <div>
          <h3 className="text-center mb-5 text-2xl">Key Takeaways</h3>
          <ul className="flex flex-col gap-5 mt-10 px-5">
            {keyTakeaways.map((takeaway) => (
              <li>
                <h4 className="mb-3 text-center text-lg text-orange-accent italic">
                  {takeaway.title}
                </h4>
                <p>{takeaway.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;
