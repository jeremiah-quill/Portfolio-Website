const projectData = [
  {
    caseStudyUrl: 'flow-with-megmo',
    imgSrc: './images/flow-with-megmo.png',
    alt: 'flow with megmo screenshot',
    title: 'Flow with Megmo',
    description:
      'A full stack marketing page + scheduling tool for an online yoga instructor. Production site launched February 2022.',
    stack: 'React, Mongo, Express, Node, GraphQL, Heroku, HTML',
    liveLink: 'http://www.flowwithmegmo.com/',
    codeLink: 'https://github.com/jeremiah-quill/flow-with-megmo',
    isFeatured: true,
    featuredImgs: [
      { img: './images/admin-dashboard-view-min.png', idx: 0 },
      { img: './images/fwm-hero-view-min.png', idx: 1 },
      { img: './images/register-class-view-min.png', idx: 2 },
      { img: './images/dashboard-view-min.png', idx: 3 },
      { img: './images/playlist-selection-view-min.png', idx: 4 },
      { img: './images/create-class-view-min.png', idx: 5 },
    ],
    featuredText1:
      "Flow with Megmo is a full stack landing page and web app built for a yoga instructor who is beginning an online yoga studio.  The goal was to build a tool to help manage the process of scheduling, requesting payment, and handling any communications regarding upcoming yoga classes.  She needed her students to be able to sign in as a user and register for class, where they would then be able to view and interact with the client's published schedule.  Requirements included mobile responsiveness, user authentication, an admin dashboard, a production database, and automated customer email communciation.  I built a custom admin dashboard where the yoga teacher is able to create, update, and delete the classes on her schedule through the Zoom API.",
    featuredText2:
      "The app was built with the MERN stack and leverages Apollo/GraphQL to keep the database and UI in sync.  I configured Nodemailer to automate the sending of class links, class updates, and class confirmations to necessary students.  I also incorporated the Spotify API to pull in the client's spotify playlists used during class allowing her students to discover the music that inspired their workouts.  Flow with Megmo is deployed to Heroku and I continue to provide developmental support.",
  },
  {
    caseStudyUrl: 'wishlist',
    imgSrc: './images/wishlist.png',
    alt: 'wishlist app screenshot',
    title: 'Wishlist',
    description:
      'Manage your secret santa exchanges in one place. Create wishlists to share with others so they know what to get you.',
    stack: 'Javascript, MySQL, Express, Node, Heroku, HTML, CSS',
    liveLink: 'https://wishlistmanager.herokuapp.com/',
    codeLink: 'https://github.com/jeremiah-quill/gift-exchange-manager',
    isFeatured: true,
    featuredImgs: [
      { img: './images/wishlist-featured-2.png', idx: 0 },
      { img: './images/wishlist-featured-1.png', idx: 1 },
      { img: './images/wishlist-featured-3.png', idx: 2 },
    ],
    featuredText1:
      'I worked in a team of 3 to design and develop a full stack tool for managing secret santa gift exchanges.  Users are able to sign up or login, create or join a private group, and maintain an updated wishlist of gift ideas.  Once a group is ready, the leader is able to randomize the choosing of secret santas and each person’s wishlist is shared only with their secret santa.  We focused on user experience, automation, and mobile responsiveness.  I took on a leadership role in the team organizing planning sessions, constantly re-aligning on the status of features, and making sure our goals were going to be met.  ',
    featuredText2:
      'The product was built with a Javascript, Express, Node, and MySQL stack.  The front end was built with the handlebars templating engine.  On the technical side I handled the internal javascript logic, the REST API routes and MySQL database queries, and configuring Nodemailer and node-cron for automated email notifications.  I also deployed the finished product to Heroku.  This project was a challenge to complete in less than 2 months but we delivered on all of our goals and produced a quality product.',
  },
  {
    caseStudyUrl: 'playlist-palette',
    imgSrc: './images/playlists.png',
    alt: 'playlist app screenshot',
    title: 'Playlists',
    description:
      "A tool for creating randomized Spotify playlists on the fly.  Utilizes Spotify API with implicit grant flow to access user's spotify playlists.",
    stack: 'React, MaterialUI, HTML, CSS',
    liveLink: 'https://jeremiah-quill.github.io/spotify-playlists/',
    codeLink: 'https://github.com/jeremiah-quill/spotify-playlists',
    isFeatured: true,
    featuredImgs: [
      { img: './images/playlists-featured-2.png', idx: 0 },
      { img: './images/playlists-featured-1.png', idx: 1 },
      { img: './images/playlists-featured-3.png', idx: 2 },
    ],
    featuredText1:
      'I designed and developed a web app for creating randomized playlists in Spotify through the Spotify API.  Users are able to scroll through their spotify playlists and choose which playlists to work with.  A slider appears to control how many songs from each playlist will be pulled into their new creation.  When the user is finished tweaking the sliders to their liking they are able to generate a new playlist which randomly chooses songs from each selection based on the slider values.  This new playlist is added to their official spotify account with the click of a button.',
    featuredText2:
      'This app was built in React and leverages MaterialUI for clean and sleek component design.  Navigating the Spotify API was a big challenge in building this tool and required custom recursion logic to paginate through songs and playlists programmatically.',
  },
  {
    imgSrc: './images/hero-helper.png',
    alt: 'hero helper screenshot',
    title: 'Hero Helper',
    description:
      'Mock up a landing page within seconds without writing a single line of code. Incorporates Unsplash API for searching of quality images.',
    stack: 'Javascript, HTML, CSS',
    liveLink: 'https://jeremiah-quill.github.io/hero-helper/',
    codeLink: 'https://github.com/jeremiah-quill/hero-helper',
  },
  {
    imgSrc: './images/recipe-rundown.png',
    alt: 'recipe rundown screenshot',
    title: 'Recipe Rundown',
    description: 'A social CRUD web app for creating, sharing, and discovering recipes.',
    stack: 'Javascript, Express, Mongo, Node, HTML, CSS',
    liveLink: 'http://www.reciperundown.com/',
    codeLink: 'https://github.com/jeremiah-quill/recipe-rundown',
  },
  {
    imgSrc: './images/room-homepage.png',
    alt: 'room homepage screenshot',
    title: 'E-commerce Homepage',
    description: 'A prototype for a mobile responsive e-commerce landing page.',
    stack: 'React, HTML, CSS',
    liveLink: 'https://jeremiah-quill.github.io/room-homepage/',
    codeLink: 'https://github.com/jeremiah-quill/room-homepage',
  },
  {
    imgSrc: './images/e-commerce-product.png',
    alt: 'e-commerce product page screenshot',
    title: 'E-Commerce Product',
    description: 'A prototype of a mobile responsive e-commerce product page.',
    stack: 'React, HTML, CSS',
    liveLink: 'https://jeremiah-quill.github.io/react-product-page/',
    codeLink: 'https://github.com/jeremiah-quill/react-product-page',
  },
  {
    imgSrc: './images/manage.png',
    alt: 'Manage SaaS product screenshot',
    title: 'SaaS Landing Page',
    description: 'A prototype of a mobile responsive SaaS product landing page.',
    stack: 'HTML, CSS',
    liveLink: 'https://jeremiah-quill.github.io/manage-landing-page/',
    codeLink: 'https://github.com/jeremiah-quill/manage-landing-page',
  },
];

export default projectData;
