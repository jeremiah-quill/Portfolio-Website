import React from 'react';

const CaseStudyWishlist = () => {
  const project = {
    technologies: ['Express', 'NodeJS', 'Heroku', 'MySQL', 'Sequelize', 'Bcrypt', 'Nodemailer'],
  };

  return (
    <div>
      <div className="bg-blue-800 text-center py-32">
        <h1 className="text-4xl mb-3">Wishlist</h1>
        <h2 className="text-xl">Full Stack Secret Santa Manager</h2>
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
            Wishlist is a full stack app I built in Javascript with two other developers to help
            manage secret santa gift exchanges. Users can create and join groups, and create and
            maintain a wishlist of gift ideas to be shared. Once a group is ready, the leader is
            able to randomize the choosing of secret santas and each user’s wishlist is shared only
            with their secret santa. I took a leadership role on the team and handled the business
            logic on both the front and back end while my teammates handled routing and design.
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
          <h3 className="text-center m-5">Notable Features</h3>
          <ul className="flex flex-col items-center">
            <li>User authentication</li>
            <li>Private groups</li>
            <li>Personal wishlists</li>
            <li>Automated email reminders</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-center">Feature Spotlight: Automated email reminders</h4>
          <p>
            Each gift exchange group has an event date, and my goal was to send an email one week in
            advance of this date to users who have elected to receive notifications. I wrote a
            function in our Express server that utilizes both a cron job and nodemailer to achieve
            this. I used a package called node-cron which allowed me to schedule code to be executed
            on the server. I configred the cron job to run every day at noon, which executes the
            code within my function. This function fetches all groups from our database and checks
            the event dates against the date one week in the future. Any group members who have
            elected to receive reminders will receive an automated email configured through
            Nodemailer once their event is one week away.
          </p>
        </div>
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
        <div>
          <h3 className="text-center mb-5">Key Takeaways</h3>
          <ol className="flex flex-col gap-5 mt-10 px-5 list-decimal">
            <li>
              <h4 className="mb-3">Upfront planning and preparation are invaluable</h4>
              <p>
                Fugiat ex sint enim deserunt ea est sint enim voluptate. In do cillum ut sunt mollit
                deserunt est ea officia velit non quis. Cillum esse enim dolor minim. Aliqua magna
                cupidatat qui deserunt anim enim duis labore et culpa voluptate ad. Irure dolore
                Lorem ut dolor. Minim ipsum tempor veniam voluptate cupidatat et do et pariatur
                cillum velit aliqua.
              </p>
            </li>
            <li>
              <h4 className="mb-3">Working on a team is a skill</h4>
              <p>
                Fugiat ex sint enim deserunt ea est sint enim voluptate. In do cillum ut sunt mollit
                deserunt est ea officia velit non quis. Cillum esse enim dolor minim. Aliqua magna
                cupidatat qui deserunt anim enim duis labore et culpa voluptate ad. Irure dolore
                Lorem ut dolor. Minim ipsum tempor veniam voluptate cupidatat et do et pariatur
                cillum velit aliqua.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyWishlist;

//         I built this app alongside two other developers. We focused on user experience,
//         automation, and mobile responsiveness. I took on a leadership role where I organized
//         planning sessions for us to constantly re-align on the status of features and to make
//         sure our goals were going to be met. Our first meetings were to discuss features and how
//         we would split up the work. I handled the business logic across the front and back ends
//         while my team members handled routing and design. The main features of our app include
//         user authentication, private groups, personal wish lists, and automated email reminders.
