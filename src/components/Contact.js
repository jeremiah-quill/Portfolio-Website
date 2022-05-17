import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import FadeUp from '../animations/FadeUp';

function Contact() {
  const [formDisabled, setFormDisabled] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // disable form submit if inputs are empty, otherwise enable form submit
  useEffect(() => {
    if (firstName === '' || lastName === '' || email === '' || message === '') {
      setFormDisabled(true);
    } else {
      setFormDisabled(false);
    }
  }, [firstName, lastName, email, message]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      reply_to: email,
      message_html: message,
    };

    emailjs.send('gmail', 'template_H7tdYdM4', templateParams, 'user_QinbwDuHE8wyBVejFQT8x').then(
      (response) => {
        if (response.status === 200) {
          console.log('success');
          // setToastMessage(
          // 	"Thank you for your message!  I will respond as soon as I can."
          // );
          // setToastType("success");
          // setShow(true);

          // setTimeout(() => {
          // 	setShow(false);
          // }, 5000);
        } else {
          console.log('something went wrong');
          // setToastMessage(
          // 	"Something went wrong...please email me directly at jcq5010@gmail.com."
          // );
          // setToastType("failure");
          // setShow(true);
          // setTimeout(() => {
          // 	setShow(false);
          // }, 5000);
        }
      },
      (err) => {
        console.log('something went wrong');
        // setToastMessage(
        // 	"Something went wrong...please email me directly at jcq5010@gmail.com."
        // );
        // setToastType("failure");
        // setShow(true);

        // setTimeout(() => {
        // 	setShow(false);
        // }, 5000);
      }
    );
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="section-container">
      <h1 className="section-title">
        Want to collaborate, have an open role, or just want to get in touch?
      </h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          className="underline-input"
          placeholder="John"
          type="text"
          onChange={handleFirstNameChange}
          value={firstName}
        />
        <label>Last Name</label>
        <input
          className="underline-input"
          placeholder="Smith"
          type="text"
          onChange={handleLastNameChange}
          value={lastName}
        />
        <label>Email</label>
        <input
          className="underline-input"
          placeholder="tech-person@tech.com"
          type="email"
          onChange={handleEmailChange}
          value={email}
        />
        <label>Message</label>
        <textarea
          className="underline-input"
          placeholder="let's make something cool together!"
          onChange={handleMessageChange}
          value={message}></textarea>
        <div className="flex-center-container">
          <button disabled={formDisabled} className="btn secondary input-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="contact-note-container mt-5">
        <p>
          (or just email me @ <span className="accent-orange-text">jcq5010@gmail.com</span>)
        </p>
      </div>
    </div>
  );
}

export default Contact;
