import React from 'react';
import { motion } from 'framer-motion';
import { pageFade, pageFadeTransition } from '../../animations/variants';
import useProgressiveImg from '../../hooks/useProgressiveImg';
import ProgressiveImg from '../ProgressiveImg/ProgressiveImg';

const CaseStudyWishlist = () => {
  const [src, { blur }] = useProgressiveImg(
    './images/case_studies/wishlist/wishlist_hero_small.png',
    './images/case_studies/wishlist/wishlist_hero.png'
  );

  const project = {
    technologies: ['Express', 'NodeJS', 'Heroku', 'MySQL', 'Sequelize', 'Bcrypt', 'Nodemailer'],
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageFade}
      transition={pageFadeTransition}>
      <div className="bg-blue-800 text-center py-32">
        <h1 className="text-4xl mb-3">Wishlist</h1>
        <h2 className="text-xl">Full Stack Secret Santa Manager</h2>
        <div className="mt-10 flex justify-center gap-5">
          <a
            rel="noreferrer"
            href="https://wishlistmanager.herokuapp.com/"
            target="_blank"
            className="bg-black text-white py-2 px-5 rounded">
            Live
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/jeremiah-quill/gift-exchange-manager"
            target="_blank"
            className="bg-black text-white py-2 px-5 rounded">
            Repo
          </a>
        </div>
      </div>
      <div className="p-5 max-w-screen-lg m-auto flex flex-col gap-40 my-20">
        <div>
          {/* <ProgressiveImg
            className="rounded"
            lowQualityImg={'./images/case_studies/wishlist/wishlist_hero_small.png'}
            highQualityImg={'./images/case_studies/wishlist/wishlist_hero.png'}
          /> */}
          <img
            className="rounded"
            alt="wishlist"
            src={src}
            style={{
              filter: blur ? 'blur(20px)' : 'none',
              transition: blur ? 'none' : 'filter 0.3s ease-out',
              width: '100%',
            }}
          />
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Summary</h3>
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
            <li>User authentication</li>
            <li>Private groups</li>
            <li>Personal wishlists</li>
            <li>Automated email reminders</li>
          </ul>
        </div>
        <div>
          <h4 className="text-center mb-5 text-2xl">
            Feature Spotlight: Automated email reminders
          </h4>
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
          <img
            alt="wishlist"
            className="rounded mb-5"
            src="./images/case_studies/wishlist/wishlist_add_gift.gif"
          />
          <p className="text-xs text-left m-auto px-5">
            On the personal dashboard page users are able to add and update gifts on their wishlist.
          </p>
        </div>
        <div>
          <img
            alt="wishlist"
            className="rounded mb-5"
            src="./images/case_studies/wishlist/wishlist_new_group.gif"
          />
          <p className="text-xs text-left m-auto px-5">
            Users are able to create groups and share a group ID and password so others can join.
            When ready the group leader has access to a button which randomly draws names for the
            exchange.
          </p>
        </div>
        <div>
          <img
            alt="wishlist"
            className="rounded mb-5"
            src="./images/case_studies/wishlist/wishlist_group_view.gif"
          />
          <p className="text-xs text-left m-auto px-5">
            Once names are drawn, users are able to view the wishlist of the group member they were
            assigned.
          </p>
        </div>
        <div>
          <h3 className="text-center mb-5 text-2xl">Key Takeaways</h3>
          <ul className="flex flex-col gap-5 mt-10 px-5">
            <li>
              <h4 className="mb-3 text-center text-lg text-orange-accent italic">
                Planning and preparation are invaluable
              </h4>
              <p>
                The biggest reason we were able to complete all of our initial goals is because of
                our up front planning and preparation. We discussed our timeline, assigned roles,
                and mapped out our main features early on which paved the way for our success.
              </p>
            </li>
            <li>
              <h4 className="mb-3 text-center text-lg text-orange-accent italic">
                Working on a team is a skill
              </h4>
              <p>
                Working on multiple branches in git, code reviewing, and collaborating on decision
                making are just a few of the important aspects of working on a team that I
                experienced building this app.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
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
