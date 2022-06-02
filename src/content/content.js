const projectData = [
  {
    subtitle: "Full stack marketing page + scheduling tool",
    featuredImgSmall: "./images/case_studies/fwm/fwm_hero_small.png",
    featuredImgBig: "./images/case_studies/fwm/fwm_hero.png",
    summary:
      "Flow with Megmo is a full stack landing page and dashboard scheduling tool built in React. I built this website from scratch for my wife, a yoga instructor who is beginning an online yoga studio. The goal was to build a tool to help manage the process of scheduling, requesting payment, and handling any communications regarding upcoming yoga classes. She needed her students to be able to sign in as a user and register for class, where they would then be able to view and interact with the available schedule.",
    notableFeatures: [
      "User authentication",
      "Admin dashboard",
      "Student dashboard",
      "Spotify & Zoom API Integrations",
      "Automated email notifications",
      "Animated route transitions",
      "Global modals and toasts",
    ],
    featureSpotlight: {
      title: "Spotify & Zoom API Integrations",
      content:
        "Since my wife's classes are hosted through Zoom, the admin dashboard I built allows her to interact with the Zoom API to create, delete, and update Zoom meetings. Submitting the create class form fires an API call to Zoom which creates a meeting at her selected date and time. The newly created Zoom meeting ID and details are added to my Mongo database, where GraphQL queries fetch this data to display it on the schedule available to students. The other feature I added to the admin dashboard is the ability for my wife to add her Spotify playlist to completed classes to share with her students. I fetch my wife's Spotify playlists through the Spotify API and display them in a list so she is able to choose which playlist she used for each completed class",
    },
    figures: [
      {
        imgUrl: "./images/case_studies/fwm/fwm_landing.gif",
        caption:
          "The initial landing page contains marketing information and a page transition when moving to and from the student dashboard.",
      },
      {
        imgUrl: "./images/case_studies/fwm/fwm_crud.gif",
        caption: "The admin has control over creating, updating, and deleting classes.",
      },
      {
        imgUrl: "./images/case_studies/fwm/fwm_playlist.gif",
        caption: "Students are able to view the Spotify playlist used in previous classes.",
      },
      {
        imgUrl: "./images/case_studies/fwm/fwm_register_class.gif",
        caption:
          "Students are able to view and register for available classes, and cancel registered classes.",
      },
    ],
    keyTakeaways: [
      {
        title: "Have a clear direction for every decision",
        content:
          "The night before my presentation I realized I wanted to separate out the static sections into a landing page and keep the scheduling functionality on a separate dashboard page. I worked all night to entirely overhaul the layout and completed it on time, however, if I had taken the time to properly plan this out from the beginning I think I could have been able to make this decision before building the entire project.",
      },
      {
        title: "Don't underestimate the complexity of state",
        content:
          "When I originally planned out this project I did not expect the state management to become so complex. Turns out keeping a dashboard and database in sync is hard!  Utilizing features like Apollo's polling and caching, React's useReducer, or Redux, I could have made my life much easier.",
      },
      {
        title: "Learn a component library or alternate styling solution",
        content:
          "I wrote plain CSS to style the entire landing page and dashboard, and I regret it. To achieve a cohesive design and layout, in the future I will reach for component libraries like MaterialUI, CSS frameworks like Tailwind, or styling solutions like SASS or Styled Components",
      },
    ],
    caseStudyUrl: "flow-with-megmo",
    imgSrc: "./images/flow-with-megmo.png",
    alt: "flow with megmo screenshot",
    title: "Flow with Megmo",
    description: "Full stack scheduling tool for online yoga instructor.",
    stack: [
      "React",
      "Express",
      "NodeJS",
      "Heroku",
      "GraphQL",
      "Apollo",
      "React Router",
      "React Transition Group",
      "MongoDB",
      "Mongoose",
      "Bcrypt",
      "Nodemailer",
    ],

    liveLink: "http://www.flowwithmegmo.com/",
    codeLink: "https://github.com/jeremiah-quill/flow-with-megmo",
  },
  {
    subtitle: "AI Powered Recipe Generator",
    featuredImgSmall: "./images/case_studies/brainfood/brainfood_hero_thumbnail.png",
    featuredImgBig: "./images/case_studies/brainfood/brainfood_hero.png",
    summary:
      "GPT-3 is an Artificial Intelligence capable of performing natural language tasks.  This app accesses OpenAI's GPT-3 API to suggest and generate recipes based on user input ingredients.",
    stack: ["React", "Tailwind", "Netlify", "React Router"],
    notableFeatures: ["OpenAI API integration"],
    featureSpotlight: {
      title: "OpenAI API integration",
      content:
        'To make use of the GPT-3\'s Artificial Intelligence I needed to send POST requests to the OpenAI API.  The payload I send to the API includes a "text prompt".  The AI returns a "text completion" based on this prompt, but will fail or return gibberish if the prompt is not constructed in a way that the AI can understand.  The way I solved this was by creating a specific and tested template prompt which asks the AI for recipe suggestions based on the user\'s ingredients.  The same goes for generating recipe instructions: once the user chooses which recipe they want, another API request is sent to OpenAPI with a specific text prompt which includes the user\'s selection programmatically inserted.',
    },
    figures: [
      {
        imgUrl: "./images/case_studies/brainfood/brainfood_add_ingredients.gif",
        caption:
          "Since the state management in this app was relatively simple, I kept the state of the recipe (ingredients, name, instructions) in React Context, and made state changes using a React Reducer function.  Here the user is adding and removing ingredients from the UI.",
      },
      {
        imgUrl: "./images/case_studies/brainfood/brainfood_generate_suggestions.gif",
        caption:
          "Once ingredients are added the user clicks a button and Brainfood generates 3 recipe suggestions based on their ingredients.  Behind the scenes Brainfood uses the ingredients stored in state to populate a template prompt that is sent to the OpenAI API.  The prompt asks the AI specifically for 3 recipe names based on the user's list of ingredients.",
      },
      {
        imgUrl: "./images/case_studies/brainfood/brainfood_generate_instructions.gif",
        caption:
          "The user is able to select 1 of the 3 suggested recipes.  I add the chosen recipe name to state and send another API request with a prompt in the payload asking GPT-3 to list instructions necessary to create the chosen recipe name, and to also include all of the user's ingredients.  GPT-3 requires careful construction of text prompts to ensure cohesive, reliable responses.",
      },
    ],
    keyTakeaways: [
      {
        title: "Regex is a lifesaver",
        content:
          "Regex can be difficult to learn at first.  There's no single solution to complete a task with regex and it's a very unique tool for solving problems, but if applied correctly it can reduce complexity in code and produce reliable results.  The responses that come back from GPT-3 are in a single string of text with line break characters, so before adding these instructions to an array in state I remove any unnecessary characters with 1 line of regex.",
      },
    ],
    caseStudyUrl: "brainfood",
    imgSrc: "./images/case_studies/brainfood/brainfood_project.png",
    alt: "brainfood screenshot",
    title: "Brainfood",
    description: "Use GPT-3 AI to generate custom recipes",
    liveLink: "https://brainfoodai.netlify.app/",
    codeLink: "https://github.com/jeremiah-quill/openai-recipes",
  },
  {
    subtitle: "Full stack secret santa manager",
    featuredImgSmall: "./images/case_studies/wishlist/wishlist_hero_small.png",
    featuredImgBig: "./images/case_studies/wishlist/wishlist_hero.png",
    summary:
      "Wishlist is a full stack app I built in Javascript with two other developers to help manage secret santa gift exchanges. Users can create and join groups, and create and maintain a wishlist of gift ideas to be shared. Once a group is ready, the leader is able to randomize the choosing of secret santas and each user’s wishlist is shared only with their secret santa. I took a leadership role on the team and handled the business logic on both the front and back end while my teammates handled routing and design.",
    stack: ["Express", "NodeJS", "Heroku", "MySql", "Sequelize", "Bcrypt", "Nodemailer"],
    notableFeatures: [
      "User authentication",
      "Private groups",
      "Personal wishlists",
      "Automated email reminders",
    ],
    featureSpotlight: {
      title: "Automated email reminders",
      content:
        "Each gift exchange group has an event date, and my goal was to send an email one week in advance of this date to users who have elected to receive notifications. I wrote a function in our Express server that utilizes both a cron job and nodemailer to achieve this. I used a package called node-cron which allowed me to schedule code to be executed on the server. I configred the cron job to run every day at noon, which executes the code within my function. This function fetches all groups from our database and checks the event dates against the date one week in the future. Any group members who have elected to receive reminders will receive an automated email configured through Nodemailer once their event is one week away.",
    },
    figures: [
      {
        imgUrl: "./images/case_studies/wishlist/wishlist_add_gift.gif",
        caption:
          "On the personal dashboard page users are able to add and update gifts on their wishlist.",
      },
      {
        imgUrl: "./images/case_studies/wishlist/wishlist_new_group.gif",
        caption:
          "Users are able to create groups and share a group ID and password so others can join.  When ready the group leader has access to a button which randomly draws names for the exchange.",
      },
      {
        imgUrl: "./images/case_studies/wishlist/wishlist_group_view.gif",
        caption:
          "Once names are drawn, users are able to view the wishlist of the group member they were assigned.",
      },
    ],
    keyTakeaways: [
      {
        title: "Planning and preparation are invaluable",
        content:
          "The biggest reason we were able to complete all of our initial goals is because of our up front planning and preparation. We discussed our timeline, assigned roles, and mapped out our main features early on which paved the way for our success.",
      },
      {
        title: "Working on a team is a skill",
        content:
          "Working on multiple branches in git, code reviewing, and collaborating on decision making are just a few of the important aspects of working on a team that I experienced building this app.",
      },
    ],
    caseStudyUrl: "wishlist",
    imgSrc: "./images/wishlist.png",
    alt: "wishlist screenshot",
    title: "Wishlist",
    description: "Secret Santa Manager Web App",
    liveLink: "https://wishlistmanager.herokuapp.com/",
    codeLink: "https://github.com/jeremiah-quill/gift-exchange-manager",
  },
  {
    subtitle: "Spotify playlist randomizer",
    featuredImgSmall: "./images/case_studies/pp/pp_hero_small.png",
    featuredImgBig: "./images/case_studies/pp/pp_hero.png",
    summary:
      "Playlist Palette is an app built with React that curates randomized playlists. I came up with the idea because I organize all of my playlists by similar music type (lofi beats, house, blues, etc.) and would often find myself wanting to combine multiple playlists into one for a specific occasion. This tool gives users the ability to select from their pre-existing playlists, choose how many songs to use, generated a playlist based on these conditions, and finally export the newly generated playlist to Spotify.",
    stack: ["React", "MaterialUI"],
    notableFeatures: ["Spotify integration", "3rd party authentication"],
    featureSpotlight: {
      title: "Spotify integration",
      content:
        "The biggest challenge in making this app was learning the Spotify API and how to apply it to my specific goals. Because the app is able to view and add to user's playlists, Spotify requires an access token that is generated once the user logs in and agrees to give the app access. Once the user has logged in and I've fetched their Spotify account information, I then use that information to fetch their most recent 20 playlists. Each playlist's songs are accessed through an endpoint returned in the playlist object, however, the tracks were paginated using a 'next' endpoint. I had to recursively fetch this next tracks endpoint until there was no next page to fetch.",
    },
    figures: [
      {
        imgUrl: "./images/case_studies/pp/pp_login.gif",
        caption:
          "Spotify user authentication flow which approves access to read and write to user's playlists.",
      },
      {
        imgUrl: "./images/case_studies/pp/pp_new_playlist.gif",
        caption:
          "Add playlists to the 'palette', drag inputs to the desired levels, and export your playlist to Spotify. Your playlists are refreshed and you will see your new mix in the sidebar.",
      },
    ],
    keyTakeaways: [
      {
        title: "External APIs can shape complexity",
        content:
          "Sometimes developer's are at the mercy of the external data source they are using. For example rather than including each track and it's details in an array on each playlist object, the Spotify API is setup so I had to make subsequent API calls for each track. To build any kind of comprehensive feature using Spotify requires enormous amounts of API calls which can become expensive.",
      },
    ],
    caseStudyUrl: "playlist-palette",
    imgSrc: "./images/playlists.png",
    alt: "playlist palette screenshot",
    title: "Playlist Palette",
    description: "Create randomized Spotify playlists on the fly.",
    liveLink: "https://jeremiah-quill.github.io/spotify-playlists/",
    codeLink: "https://github.com/jeremiah-quill/spotify-playlists",
  },
  // {
  //   imgSrc: "./images/hero-helper.png",
  //   alt: "hero helper screenshot",
  //   title: "Hero Helper",
  //   description:
  //     "Mock up a landing page within seconds without writing a single line of code. Incorporates Unsplash API for searching of quality images.",
  //   stack: "Javascript, HTML, CSS",
  //   liveLink: "https://jeremiah-quill.github.io/hero-helper/",
  //   codeLink: "https://github.com/jeremiah-quill/hero-helper",
  // },
  // {
  //   imgSrc: "./images/recipe-rundown.png",
  //   alt: "recipe rundown screenshot",
  //   title: "Recipe Rundown",
  //   description: "A social CRUD web app for creating, sharing, and discovering recipes.",
  //   stack: "Javascript, Express, Mongo, Node, HTML, CSS",
  //   liveLink: "http://www.reciperundown.com/",
  //   codeLink: "https://github.com/jeremiah-quill/recipe-rundown",
  // },
];

export default projectData;
