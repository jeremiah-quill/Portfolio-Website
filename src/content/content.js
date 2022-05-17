const projectData = [
  {
    subtitle: 'Full stack marketing page + scheduling tool',
    featuredImgSmall: './images/case_studies/fwm/fwm_hero-small.png',
    featuredImgBig: './images/case_studies/fwm/fwm_hero.png',
    summary:
      'Flow with Megmo is a full stack landing page and dashboard scheduling tool built in React. I built this website from scratch for my wife, a yoga instructor who is beginning an online yoga studio. The goal was to build a tool to help manage the process of scheduling, requesting payment, and handling any communications regarding upcoming yoga classes. She needed her students to be able to sign in as a user and register for class, where they would then be able to view and interact with the available schedule.',
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
    notableFeatures: [
      'User authentication',
      'Admin dashboard',
      'Student dashboard',
      'Spotify & Zoom API Integration',
      'Automated email notifications',
      'Animated route transitions',
      'Global modals and toasts',
    ],
    featureSpotlight: {
      title: 'Spotify & Zoom API Integration',
      content:
        "Since my wife's classes are hosted through Zoom, the admin dashboard I built allows her to interact with the Zoom API to create, delete, and update Zoom meetings. Submitting the create class form fires an API call to Zoom which creates a meeting at her selected date and time. The newly created Zoom meeting ID and details are added to my Mongo database, where GraphQL queries fetch this data to display it on the schedule available to students. The other feature I added to the admin dashboard is the ability for my wife to add her Spotify playlist to completed classes to share with her students. I fetch my wife's Spotify playlists through the Spotify API and display them in a list so she is able to choose which playlist she used for each completed class",
    },
    figures: [
      {
        imgUrl: './images/admin-dashboard-view-min.png',
        caption:
          'The admin dashboard is where my wife has control over her scheduled and completed classes.',
      },
      {
        imgUrl: './images/create-class-view-min.png',
        caption:
          'Selecting and submitting class details through a form within the model context. Submitting this form creates a zoom meeting and adds the class to the public schedule.',
      },
      {
        imgUrl: './images/dashboard-view-min.png',
        caption:
          "On the student dashboard user's can view, sign up for, and cancel classes that appear on the public schedule.",
      },
      {
        imgUrl: './images/register-class-view-min.png',
        caption:
          "After confirming registration for a class, students are shown a custom made QR code which sends them to a payment to my wife's venmo, pre-configured with the corresponding class fee. We decided against using a payment processor to reduce costs due to this being a side hobby for my wife, and rely on the honor system for user's to send payment.",
      },
    ],
    conclusion:
      "Overall I am happy with Flow with Megmo. I was able to complete everything on my checklist and begin learning some new techniques (page transitions) and technologies (graphQL, Apollo) along the way. Even more than the end product itself, I am most proud of the lessons I've taken from the experience building it.",
    keyTakeaways: [
      {
        title: 'Have a clear direction for every decision',
        content:
          'The night before my presentation I realized I wanted to separate out the static sections into a landing page and keep the scheduling functionality on a separate dashboard page. I worked all night to entirely overhaul the layout and completed it on time, however, if I had taken the time to properly plan this out from the beginning I think I could have been able to make this decision before building the entire project.',
      },
      {
        title: "Don't underestimate the complexity of state",
        content:
          "When I originally planned out this project I did not expect the state management to become so complex. Turns out keeping a dashboard and database in sync is hard! Utilizing features like Apollo's polling and caching, React's useReducer, or Redux, I could have made my life much easier.",
      },
      {
        title: 'Learn a component library or alternate styling solution',
        content:
          'I wrote plain CSS to style the entire landing page and dashboard, and I will probably never do that again. To achieve a cohesive design and layout, I will reach for component libraries like MaterialUI, CSS frameworks like Tailwind, or styling solutions like SASS or Styled Components',
      },
    ],
    caseStudyUrl: 'flow-with-megmo',
    imgSrc: './images/flow-with-megmo.png',
    alt: 'flow with megmo screenshot',
    title: 'Flow with Megmo',
    description:
      'A full stack marketing page + scheduling tool for an online yoga instructor. Production site launched February 2022.',
    stack: [
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

    liveLink: 'http://www.flowwithmegmo.com/',
    codeLink: 'https://github.com/jeremiah-quill/flow-with-megmo',
  },
  {
    caseStudyUrl: 'wishlist',
    imgSrc: './images/wishlist.png',
    alt: 'wishlist app screenshot',
    title: 'Wishlist',
    description:
      'Manage your secret santa exchanges in one place. Create wishlists to share with others so they know what to get you.',
    stack: ['Javascript', 'MySQL', 'Express', 'Node', 'Heroku', 'HTML', 'CSS'],
    liveLink: 'https://wishlistmanager.herokuapp.com/',
    codeLink: 'https://github.com/jeremiah-quill/gift-exchange-manager',
  },
  {
    caseStudyUrl: 'playlist-palette',
    imgSrc: './images/playlists.png',
    alt: 'playlist app screenshot',
    title: 'Playlists',
    description:
      "A tool for creating randomized Spotify playlists on the fly.  Utilizes Spotify API with implicit grant flow to access user's spotify playlists.",
    stack: ['React', 'MaterialUI', 'HTML', 'CSS'],
    liveLink: 'https://jeremiah-quill.github.io/spotify-playlists/',
    codeLink: 'https://github.com/jeremiah-quill/spotify-playlists',
  },
  // {
  //   imgSrc: './images/hero-helper.png',
  //   alt: 'hero helper screenshot',
  //   title: 'Hero Helper',
  //   description:
  //     'Mock up a landing page within seconds without writing a single line of code. Incorporates Unsplash API for searching of quality images.',
  //   stack: 'Javascript, HTML, CSS',
  //   liveLink: 'https://jeremiah-quill.github.io/hero-helper/',
  //   codeLink: 'https://github.com/jeremiah-quill/hero-helper',
  // },
  // {
  //   imgSrc: './images/recipe-rundown.png',
  //   alt: 'recipe rundown screenshot',
  //   title: 'Recipe Rundown',
  //   description: 'A social CRUD web app for creating, sharing, and discovering recipes.',
  //   stack: 'Javascript, Express, Mongo, Node, HTML, CSS',
  //   liveLink: 'http://www.reciperundown.com/',
  //   codeLink: 'https://github.com/jeremiah-quill/recipe-rundown',
  // },
];

export default projectData;
