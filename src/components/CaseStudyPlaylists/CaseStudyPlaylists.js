import React from 'react';

const CaseStudyPlaylists = () => {
  const project = {
    technologies: ['React', 'MaterialUI'],
  };

  return (
    <div>
      <div className="bg-blue-800 text-center py-32">
        <h1 className="text-4xl mb-3">Playlist Palette</h1>
        <h2 className="text-xl">Spotify Playlist Randomizer</h2>
        <div className="mt-10 flex justify-center gap-5">
          <button className="bg-black text-white py-2 px-5 rounded">Live</button>
          <button className="bg-black text-white py-2 px-5 rounded">Repo</button>
        </div>
      </div>
      <div className="p-5 max-w-screen-md m-auto flex flex-col gap-20 my-20">
        <div>
          <img className="rounded" src="./images/playlists-featured-2.png" />
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Summary</h3>
          <p>
            Playlist Palette is an app built with React that curates randomized playlists. I came up
            with the idea because I organize all of my playlists by similar music type (lofi beats,
            house, blues, chill hop hop, etc.) and would often find myself wanting to combine
            multiple playlists into one for a specific occasion. This tool gives users the ability
            to select from their pre-existing playlists, choose how many songs to use, generated a
            playlist based on these conditions, and finally export the newly generated playlist to
            Spotify.
          </p>
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Technologies</h3>
          <ul className="flex justify-center w-full flex-wrap gap-5 mb-5">
            {project.technologies.map((tech) => (
              <li className="px-3 py-1 bg-white text-black rounded-3xl">{tech}</li>
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
          <img className="rounded mb-5" src="./images/playlists-featured-1.png" />
          <p className="text-xs text-left m-auto px-5">
            Spotify user authentication flow which approves access to read and write to user's
            playlists.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/playlists.png" />
          <p className="text-xs text-left m-auto px-5">
            On the left of the screen is a bar containing user's playlists. There are 3 playlists
            chosen and the green draggable inputs tell the app how many songs of each playlist to
            include in the newly generated playlist.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/playlists-featured-3.png" />
          <p className="text-xs text-left m-auto px-5">
            Once the user has chosen their playlists and track amounts they can name their playlist
            and export it to Spotify.
          </p>
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Key Takeaways</h3>
          <ul className="flex flex-col gap-5 mt-10 px-5">
            <li>
              <h4 className="mb-3 text-center">External APIs can shape complexity</h4>
              <p>
                When I was first brainstorming the idea for this app I envisioned a much simpler
                development experience and additional features. What I learned once I started
                digging into the Spotify API docs is that sometimes the external data source has
                limitations that hamper some of these features. For example rather than including
                each track and it's details in an array on each playlist object, the API was setup
                so I had to make subsequent API calls for each track. To build any kind of
                comprehensive feature using Spotify requires enormous amounts of API calls which can
                become expensive.
              </p>
            </li>
            <li>
              <h4 className="mb-3 text-center">External APIs can shape complexity</h4>
              <p>
                When I was first brainstorming the idea for this app I envisioned a much simpler
                development experience and additional features. What I learned once I started
                digging into the Spotify API docs is that sometimes the external data source has
                limitations that hamper some of these features. For example rather than including
                each track and it's details in an array on each playlist object, the API was setup
                so I had to make subsequent API calls for each track. To build any kind of
                comprehensive feature using Spotify requires enormous amounts of API calls which can
                become expensive.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPlaylists;

//         I built this app alongside two other developers. We focused on user experience,
//         automation, and mobile responsiveness. I took on a leadership role where I organized
//         planning sessions for us to constantly re-align on the status of features and to make
//         sure our goals were going to be met. Our first meetings were to discuss features and how
//         we would split up the work. I handled the business logic across the front and back ends
//         while my team members handled routing and design. The main features of our app include
//         user authentication, private groups, personal wish lists, and automated email reminders.
