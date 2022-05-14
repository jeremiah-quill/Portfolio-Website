import React from 'react';

const CaseStudyHeroHelper = () => {
  const project = {
    technologies: ['Express', 'NodeJS', 'Heroku', 'MySQL', 'Sequelize', 'Bcrypt', 'Nodemailer'],
  };

  return (
    <div>
      <div className="bg-blue-800 text-center py-32">
        <h1 className="text-4xl mb-3">Hero Helper</h1>
        <h2 className="text-xl">Landing Page Generator</h2>
        <div className="mt-10 flex justify-center gap-5">
          <button className="bg-black text-white py-2 px-5 rounded">Live</button>
          <button className="bg-black text-white py-2 px-5 rounded">Repo</button>
        </div>
      </div>
      <div className="p-5 max-w-screen-md m-auto flex flex-col gap-20 my-20">
        <div>
          <img className="rounded" src="./images/wishlist.png" />
        </div>
        <div>
          <h3 className="text-center m-5">Summary</h3>
          <p>
            I worked in a team of 3 to design and develop a full stack app for managing secret santa
            gift exchanges. Users are able to sign up or login, create or join a private group, and
            maintain an updated wishlist of gift ideas. Once a group is ready, the leader is able to
            randomize the choosing of secret santas and each person’s wishlist is shared only with
            their secret santa. We focused on user experience, automation, and mobile
            responsiveness. I took on a leadership role in the team organizing planning sessions,
            constantly re-aligning on the status of features, and making sure our goals were going
            to be met.
          </p>
        </div>
        <div>
          <h3 className="text-center m-5">Technologies</h3>
          <ul className="flex justify-center w-full flex-wrap gap-5 mb-5">
            {project.technologies.map((tech) => (
              <li className="px-3 py-1 bg-white text-black rounded-3xl">{tech}</li>
            ))}
          </ul>
        </div>
        {/* <div>
          <h3 className="text-center m-5">Approach</h3>
          <p>
            My first steps were writing out a list of potential features with my wife and narrowing
            those down to what she wanted most. We decided on user authentication, a simple payment
            flow, a teacher dashboard where she could create and manage zoom classes on a public
            schedule, and a student dashboard where users could sign up for and cancel classes on
            this schedule. I then focused on the bulk of the backend tasks as I wanted to have a
            solid foundation for which I built my frontend. I mapped out how the database models
            would be structured, and since I knew I wanted to use GraphQL and Apollo from the
            beginning, I setup the queries and mutations that I knew I would need. I also setup
            routes to handle interacting with the Zoom API. Using the Zoom API was a lot more
            challenging than I had anticipated due to the lack of developer friendly documentation
            at the time.
          </p>
          <br></br>
          <p>
            The majority of my time spent on the frontend of this app was handling side effects of
            user actions. My wife wanted to create classes, delete classes, update date and times
            for classes, as well as adding her music playlist for each compelted class. Students
            needed to be able to register for classes, cancel classes, and view playlists for
            completed classes. I believe in giving the user feedback on meaningful user actions, so
            I decided to create both a modal and toast contexts where I could pass in different
            forms, lists, and error/success notifications
          </p>
        </div> */}
        <div>
          <img className="rounded mb-5" src="./images/wishlist-featured-1.png" />
          <p className="text-xs text-left m-auto px-5">
            On the personal dashboard page users are able to add gifts to their wishlist, as well as
            create or view groups.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/wishlist-featured-2.png" />
          <p className="text-xs text-left m-auto px-5">
            The create group form, where a user is able to create a new secret santa group. Once
            created, the group owner will be able to share a group password so others are able to
            join.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/wishlist-featured-3.png" />
          <p className="text-xs text-left m-auto px-5">
            The group dashboard is only available to the user who created the group. It contains
            editable group details like name, date, and price limit. It also contains an ID and
            password that when shared with other users, allows them to join the group. Lastly, this
            page includes a draw names button which randomly matches every member of the group
            together.
          </p>
        </div>
        <div className="text-center">More to come!</div>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default CaseStudyHeroHelper;
