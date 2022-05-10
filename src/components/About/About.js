import React from 'react';

const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-center text-5xl">I'm Jeremiah Quill</h1>
      <h2 className="text-orange-accent">Front-end developer</h2>
      <div>socials</div>
      <div>
        <img
          style={{ boxShadow: '10px 10px rgb(255, 82, 0' }}
          className="w-full max-w-sm rounded-3xl my-5 mx-auto shadow-orange-accent"
          src="./images/bio-img-compress.png"
          alt="Jeremiah with his son"
        />
        <p className="text-left">
          I'm currently a freelance full stack developer with a wide range of skills and a passion
          for learning. I am mostly self-taught but I don't let it hold me back from reaching my
          potential as a creator on the web. When learning on my own became overwhelming, as it can
          in the ever-changing world of web development, I enrolled and graduated from a full stack
          bootcamp offered by University of Pennsylvania.
          <br></br>
          <br></br>
          My background is in finanace and accounting, specifically in the corporate real estate
          industry, which has given me invaluable experience as a professional. I am organized, work
          well on my own or with others, and enjoy solving problems.
          <br></br>
          <br></br>
          As a father and husband, I want to make my family proud. It's why I decided to take the
          road less traveled and build a new career in the first place. It's why I continue to grind
          every day to improve as a developer. I want to prove to myself and set an example for my
          son that at 30, it's not too late to re-invent yourself and find success in your passions.
          <br></br>
          <br></br>
          I'm currently available for <span>freelance opportunities</span>,{' '}
          <span>contract roles</span>, or <span>full time positions</span>. Please reach out @{' '}
          <span>jcq5010@gmail.com</span>, I would love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;
