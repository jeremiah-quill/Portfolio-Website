import React from 'react';

const CaseStudy = () => {
  const project = {
    headerDetails: {
      title: 'Flow with Megmo',
      subtitle: 'Full Stack Marketing Page + Scheduling Tool',
    },
    summary:
      "Flow with Megmo is a full stack landing page and dashboard scheduling tool I built for my wife, a yoga instructor who is beginning an online yoga studio. The goal was to build a tool to help manage the process of scheduling, requesting payment, and handling any communications regarding upcoming yoga classes. She needed her students to be able to sign in as a user and register for class, where they would then be able to view and interact with the client's published schedule. Requirements included mobile responsiveness, user authentication, an admin dashboard, a production database, and automated customer email communciation.",
    approach:
      'My first steps were writing out a list of potential features with my wife and narrowing those down to what she wanted most. We decided on user authentication, a simple payment flow, a teacher dashboard where she could create and manage zoom classes on a public schedule, and a student dashboard where users could sign up for and cancel classes on this schedule. I then focused on the bulk of the backend tasks as I wanted to have a solid foundation for which I built my frontend. I mapped out how the database models would be structured, and since I knew I wanted to use GraphQL and Apollo from the beginning, I setup the queries and mutations that I knew I would need. I also setup routes to handle interacting with the Zoom API. Using the Zoom API was a lot more challenging than I had anticipated due to the lack of developer friendly documentation at the time. The majority of my time spent on the frontend of this app was handling side effects of user actions. My wife wanted to create classes, delete classes, update date and times for classes, as well as adding her music playlist for each compelted class. Students needed to be able to register for classes, cancel classes, and view playlists for completed classes. I believe in giving the user feedback on meaningful user actions, so I decided to create both a modal and toast contexts where I could pass in different forms, lists, and error/success notifications.',
  };

  return (
    <div>
      <div className="bg-blue-800 text-center py-32">
        <h1 className="text-4xl mb-3">{project.headerDetails.title}</h1>
        <h2 className="text-xl">{project.headerDetails.subtitle}</h2>
        <div className="mt-10 flex justify-center gap-5">
          <button className="bg-black text-white py-2 px-5 rounded">Live</button>
          <button className="bg-black text-white py-2 px-5 rounded">Repo</button>
        </div>
      </div>
      <div className="p-5 max-w-screen-md m-auto flex flex-col gap-20 my-20">
        <div>
          <img className="rounded" src="./images/flow-with-megmo.png" />
        </div>
        <div>
          <h3 className="text-center m-5">Summary</h3>
          <p>{project.summary}</p>
        </div>
        {/* <CaseStudyTech /> */}
        <div>
          <h3 className="text-center m-5">Technologies</h3>
          <ul className="flex justify-center w-full flex-wrap gap-5 mb-5">
            <li className="px-3 py-1 bg-white text-black rounded-3xl">React</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">Express</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">NodeJS</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">Heroku</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">GraphQL</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">Apollo</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">React Router</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">React Transition Group</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">MongoDB</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">Mongoose</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">Bcrypt</li>
            <li className="px-3 py-1 bg-white text-black rounded-3xl">Nodemailer</li>
          </ul>
        </div>
        <div>
          <h3 className="text-center m-5">Approach</h3>
          <p>{project.approach}</p>
        </div>
        {/* <CaseStudyExamples /> */}
        <div>
          <img className="rounded mb-5" src="./images/admin-dashboard-view-min.png" />
          <p className="text-xs text-left m-auto px-5">
            The admin dashboard is where my wife has control over her scheduled and completed
            classes.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/create-class-view-min.png" />
          <p className="text-xs text-left m-auto px-5">
            Selecting and submitting class details through a form within the model context.
            Submitting this form creates a zoom meeting and adds the class to the public schedule.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/dashboard-view-min.png" />
          <p className="text-xs text-left m-auto px-5">
            On the student dashboard user's can view, sign up for, and cancel classes that appear on
            the public schedule.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/register-class-view-min.png" />
          <p className="text-xs text-left m-auto px-5">
            After confirming registration for a class, students are shown a custom made QR code
            which sends them to a payment to my wife's venmo, pre-configured with the corresponding
            class fee. We decided against using a payment processor to reduce costs due to this
            being a side hobby for my wife, and rely on the honor system for user's to send payment.
          </p>
        </div>
        {/* <CaseStudyConclusions /> */}
        <div>
          <h3 className="text-center mb-5">Conclusions</h3>
          <div>
            <p>
              Overall I was happy with the version of Flow with Megmo that I presented to my class.
              I was able to complete everything on my checklist and begin learning some new
              techniques (page transitions) and technologies (graphQL, Apollo) along the way. Even
              moreso than the end product itself, I am most proud of the lessons I've taken from the
              experience building it. A few of my very clear takeaways:
            </p>
            <ol className="flex flex-col gap-5 mt-10 px-5 list-decimal">
              <li>
                <h4 className="mb-3">Have a clear direction for every decision</h4>
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
                <h4 className="mb-3">Don't underestimate the complexity of state</h4>
                <p>
                  When I originally planned out this project I did not expect the state management
                  to become so complex. Turns out keeping a dashboard and database in sync is hard!
                  Utilizing features like Apollo's polling and caching, React's useReducer, or
                  Redux, I could have made my life much easier.
                </p>
              </li>
              <li>
                <h4 className="mb-3">Learn a component library or alternate styling solution</h4>
                <p>
                  I wrote plain CSS to style the entire landing page and dashboard, and I will
                  probably never do that again. To achieve a cohesive design and layout, I will
                  reach for component libraries like MaterialUI, CSS frameworks like Tailwind, or
                  styling solutions like SASS or Styled Components
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
