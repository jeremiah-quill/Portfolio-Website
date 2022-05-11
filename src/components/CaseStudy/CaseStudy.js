import React from 'react';

const CaseStudy = () => {
  return (
    <div>
      <div className="bg-blue-800 text-center py-32">
        <h1 className="text-4xl mb-3">Flow with Megmo</h1>
        <h2 className="text-xl">Full Stack Marketing Page + Scheduling Tool</h2>
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
          <p>
            Flow with Megmo is a full stack landing page and dashboard scheduling tool built for my
            wife, a yoga instructor who is beginning an online yoga studio. The goal was to build a
            tool to help manage the process of scheduling, requesting payment, and handling any
            communications regarding upcoming yoga classes. She needed her students to be able to
            sign in as a user and register for class, where they would then be able to view and
            interact with the client's published schedule. Requirements included mobile
            responsiveness, user authentication, an admin dashboard, a production database, and
            automated customer email communciation.
          </p>
        </div>
        <div>
          <h3 className="text-center m-5">Technologies</h3>
          <ul className="flex justify-center w-full flex-wrap gap-5 mb-5">
            <li>React</li>
            <li>Express</li>
            <li>NodeJS</li>
            <li>Heroku</li>
            <li>GraphQL</li>
            <li>Apollo</li>
            <li>React Router</li>
            <li>React Transition Group</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Bcrypt</li>
            <li>Nodemailer</li>
          </ul>
        </div>
        <div>
          <h3 className="text-center m-5">Approach</h3>
          <p>
            Aliqua ad sint veniam magna ipsum nulla ad commodo et pariatur pariatur qui duis ut.
            Esse officia nisi ex reprehenderit. Amet elit esse incididunt dolor irure occaecat
            incididunt aute. Anim labore reprehenderit exercitation qui dolore labore aliquip
            cupidatat nulla ipsum. Dolor quis aute do officia in nulla proident labore occaecat
            excepteur anim culpa officia enim. Excepteur velit Lorem pariatur est excepteur nisi
            officia adipisicing amet.
            <br></br>
            <br></br>
            Reprehenderit amet officia laboris adipisicing occaecat sint voluptate do ut esse do.
            Excepteur velit do ipsum veniam cillum consequat. Ullamco eu do irure pariatur.
            <br></br>
            <br></br>
            Ipsum fugiat duis labore Lorem reprehenderit qui laboris amet sit qui voluptate. Ea
            laboris adipisicing elit qui enim sint elit. Consectetur non ad occaecat aliquip laborum
            deserunt voluptate. Tempor sint irure dolor voluptate esse id quis do exercitation.
            Veniam proident sit exercitation dolore. Proident voluptate eiusmod labore id cupidatat
            exercitation qui.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/flow-with-megmo.png" />
          <p>
            Dolor excepteur ad voluptate commodo incididunt sit minim ad duis. Do incididunt officia
            velit esse veniam minim ullamco ex duis mollit. Deserunt consectetur elit culpa officia
            consequat laborum duis tempor nisi quis esse exercitation commodo.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/flow-with-megmo.png" />
          <p>
            Dolor excepteur ad voluptate commodo incididunt sit minim ad duis. Do incididunt officia
            velit esse veniam minim ullamco ex duis mollit. Deserunt consectetur elit culpa officia
            consequat laborum duis tempor nisi quis esse exercitation commodo.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/flow-with-megmo.png" />
          <p>
            Dolor excepteur ad voluptate commodo incididunt sit minim ad duis. Do incididunt officia
            velit esse veniam minim ullamco ex duis mollit. Deserunt consectetur elit culpa officia
            consequat laborum duis tempor nisi quis esse exercitation commodo.
          </p>
        </div>
        <div>
          <img className="rounded mb-5" src="./images/flow-with-megmo.png" />
          <p>
            Dolor excepteur ad voluptate commodo incididunt sit minim ad duis. Do incididunt officia
            velit esse veniam minim ullamco ex duis mollit. Deserunt consectetur elit culpa officia
            consequat laborum duis tempor nisi quis esse exercitation commodo.
          </p>
        </div>
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
            <ul className="flex flex-col gap-5 mt-10">
              <li>
                <h4 className="mb-3 text-center">Have a clear direction for every decision</h4>
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
                <h4 className="mb-3 text-center">Don't underestimate the complexity of state</h4>
                <p>
                  When I originally planned out this project I did not expect the state management
                  to become so complex. Turns out keeping a dashboard and database in sync is hard!
                  Utilizing features like Apollo's polling and caching, React's useReducer, or
                  Redux, I could have made my life much easier.
                </p>
              </li>
              <li>
                <h4 className="mb-3 text-center">
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
    </div>
  );
};

export default CaseStudy;
