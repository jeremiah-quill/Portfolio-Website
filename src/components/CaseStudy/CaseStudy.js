import React from 'react';

const CaseStudyFWM = () => {
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
            Flow with Megmo is a full stack landing page and dashboard scheduling tool built in
            React. I built this website from scratch for my wife, a yoga instructor who is beginning
            an online yoga studio. The goal was to build a tool to help manage the process of
            scheduling, requesting payment, and handling any communications regarding upcoming yoga
            classes. She needed her students to be able to sign in as a user and register for class,
            where they would then be able to view and interact with the available schedule.
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
        <div>
          <h3 className="text-center m-5">Approach</h3>
          <p>
            My first steps were writing out a list of potential features with my wife and narrowing
            those down to what we wanted most. We decided on user authentication, a simple payment
            flow, a teacher dashboard where she could create and manage zoom classes on a public
            schedule, a student dashboard where users could sign up for and cancel classes on this
            schedule, automated email notifications, and animated route transitions
          </p>
        </div>
        <ul className="flex flex-col gap-8">
          <li>
            <h4 className="mb-3">User Authentication</h4>
            <p>
              I used JSON Web Tokens (JWT) to manage user authentication. On signup a user's email
              and username are added to my Mongo database, and their password is hashed using
              Bcrypt. On successful login I return a JWT to my frontend where I add it to local
              storage, so user's are able to navigate away from the page and return to find that
              they are still logged in.
            </p>
          </li>
          <li>
            <h4 className="mb-3">Payments</h4>
            <p>
              Accepting payments for class registration was an interesting problem. My goal was to
              give user's a way to pay for class, and gatekeep the actual class registration until
              the payment had been successfully submitted. After a lot of research I found the only
              way to do that would be by using a payment processor like Stripe, Paypal, etc. I chose
              a solution offered through Paypal called Braintree, and configured it using a free
              sandbox version. It worked great and I was able to successfully gatekeep the
              registration process behind a Venmo payment, however, eventually we decided that for a
              side gig like this a payment processor solution was too robust. I solved this by
              allowing students to pay through the honor system. Students are able to register for
              class and are given the Venmo details to pay on their own. On desktop I show user's a
              custom Venmo QR code, and on mobile I offer a simple button. In either case the user
              is taken to Venmo with a payment pre-filled with the class fee.
            </p>
          </li>
          <li>
            <h4 className="mb-3">Admin Dashboard</h4>
            <p>
              Since my wife's classes are hosted through Zoom, the admin dashboard I built allows
              her to interact with the Zoom API to create, delete, and update Zoom meetings.
              Submitting the create class form fires an API call to Zoom which creates a meeting at
              her selected date and time. The newly created Zoom meeting ID and details are added to
              my Mongo database, where GraphQL queries fetch this data to display it on the schedule
              available to students. The other feature I added to the admin dashboard is the ability
              for my wife to add her Spotify playlist to completed classes to share with her
              students. I fetch my wife's Spotify playlists through the Spotify API and display them
              in a list so she is able to choose which playlist she used for each completed class
            </p>
          </li>
          <li>
            <h4 className="mb-3">Student Dashboard</h4>
            <p>
              When viewing the available class schedule students are able to register for and cancel
              future classes, as well as view previously attended classes. This is accomplished
              through GraphQL mutations, which perform CRUD operations on the classes that are
              stored in my Mongo database.
            </p>
          </li>
          <li>
            <h4 className="mb-3">Automated Emails</h4>
            <p>
              People are busy and forget things, so I wanted to make sure any major user actions
              like registering for or canceling a class were confirmed through an automated email. I
              achieved this through Nodemailer and custom email templates that are sent to students
              on these major actions. For exmaple when a student registers for class they are sent
              an email with a welcome message, class details, and a Zoom link for that specific
              class. I also implemented a feature where students are able to toggle whether they
              receive new class udpates via email. When checked yes and my wife creates a new class,
              they are sent an email notifying them that there is a new class on the schedule.
            </p>
          </li>
          <li>
            <h4 className="mb-3">Modals and Toasts</h4>
            <p>
              I believe in giving the user feedback on meaningful user actions, so I implemented a
              global toast notification using React's Context API. On both small and large user
              actions I pass in errors or success notifications. I also implemented a global modal
              using Context. I am able to pass into my modal different components like a list of
              students, a create class form, or a login form. This achieves a cohesiveness
              throughout the application and grabs the user's attention when they are required to
              complete any inputs.
            </p>
          </li>
          <li>
            <h4 className="mb-3">Route Transitions</h4>
            <p>
              This was my first attempt at animated route transitions, and I had a lot of fun with
              it! I implemented a simple but clean transition where two full screen divs slide
              across the screen to reveal the next page. I achieved this effect using set timeouts
              and CSS transitions that trigger when a route is hit.
            </p>
          </li>
        </ul>
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

export default CaseStudyFWM;
