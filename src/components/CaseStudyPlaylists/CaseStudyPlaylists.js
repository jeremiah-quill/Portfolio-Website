import React from 'react';
import { motion } from 'framer-motion';
import { pageFade, pageFadeTransition } from '../../animations/variants';
import useProgressiveImg from '../../hooks/useProgressiveImg';

const CaseStudyPlaylists = () => {
  const [src, { blur }] = useProgressiveImg(
    './images/case_studies/pp/pp_hero_small.png',
    './images/case_studies/pp/pp_hero.png'
  );

  const project = {
    technologies: ['React', 'MaterialUI'],
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageFade}
      transition={pageFadeTransition}>
      <div className="bg-blue-800 text-center py-32">
        <motion.h1 className="text-4xl mb-3">Playlist Palette</motion.h1>
        <h2 className="text-xl">Spotify Playlist Randomizer</h2>
        <div className="mt-10 flex justify-center gap-5">
          <a
            rel="noreferrer"
            href="https://jeremiah-quill.github.io/spotify-playlists/"
            target="_blank"
            className="bg-black text-white py-2 px-5 rounded">
            Live
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/jeremiah-quill/spotify-playlists"
            target="_blank"
            className="bg-black text-white py-2 px-5 rounded">
            Repo
          </a>
        </div>
      </div>
      <div className="p-5 max-w-screen-lg m-auto flex flex-col gap-40 my-20">
        <div style={{ aspectRatio: '1.6', filter: blur ? 'blur(20px)' : 'none' }}>
          <img
            className="rounded"
            alt="playlist palette"
            src={src}
            style={{
              filter: blur ? 'blur(20px)' : 'none',
              transition: 'filter 0.3s ease-out',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Summary</h3>
          <p>
            Playlist Palette is an app built with React that curates randomized playlists. I came up
            with the idea because I organize all of my playlists by similar music type (lofi beats,
            house, blues, etc.) and would often find myself wanting to combine multiple playlists
            into one for a specific occasion. This tool gives users the ability to select from their
            pre-existing playlists, choose how many songs to use, generated a playlist based on
            these conditions, and finally export the newly generated playlist to Spotify.
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
            <li>Spotify integration</li>
            <li>3rd party authentication</li>
          </ul>
        </div>
        <div>
          <h4 className="text-center mb-5 text-2xl">Feature Spotlight: Spotify integration</h4>
          <p>
            The biggest challenge in making this app was learning the Spotify API and how to apply
            it to my specific goals. Because the app is able to view and add to user's playlists,
            Spotify requires an access token that is generated once the user logs in and agrees to
            give the app access. Once the user has logged in and I've fetched their Spotify account
            information, I then use that information to fetch their most recent 20 playlists. Each
            playlist's songs are accessed through an endpoint returned in the playlist object,
            however, the tracks were paginated using a "next" endpoint. I had to recursively fetch
            this next tracks endpoint until there was no next page to fetch.
          </p>
        </div>
        <div>
          <img
            alt="playlist palette"
            className="rounded mb-5"
            src="./images/case_studies/pp/pp_login.gif"
          />
          <p className="text-xs text-left m-auto px-5">
            Spotify user authentication flow which approves access to read and write to user's
            playlists.
          </p>
        </div>
        <div>
          <img
            alt="playlist palette"
            className="rounded mb-5"
            src="./images/case_studies/pp/pp_new_playlist.gif"
          />
          <p className="text-xs text-left m-auto px-5">
            Add playlists to the "palette", drag inputs to the desired levels, and export your
            playlist to Spotify. Your playlists are refreshed and you will see your new mix in the
            sidebar.
          </p>
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Key Takeaways</h3>
          <ul className="flex flex-col gap-5 mt-10 px-5">
            <li>
              <h4 className="mb-3 text-center text-lg text-orange-accent italic">
                External APIs can shape complexity
              </h4>
              <p>
                Sometimes developer's are at the mercy of the external data source they are using.
                For example rather than including each track and it's details in an array on each
                playlist object, the Spotify API is setup so I had to make subsequent API calls for
                each track. To build any kind of comprehensive feature using Spotify requires
                enormous amounts of API calls which can become expensive.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyPlaylists;
