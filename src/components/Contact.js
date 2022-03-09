import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import FadeUp from "../animations/FadeUp";

function Contact() {



	return (
		<div className="section-container">
			<FadeUp triggerOnce duration={1000} fraction={0}>
				<h1 className="section-title">
					Want to collaborate, have an open role, or just want to get in touch?
				</h1>
				<form className="contact-form">
					<label>First Name</label>
					<input className="underline-input" placeholder="John" type="text" />
					<label>Last Name</label>
					<input className="underline-input" placeholder="Smith" type="text" />
					<label>Email</label>
					<input
						className="underline-input"
						placeholder="tech-person@tech.com"
						type="email"
					/>
					<label>Message</label>
					<textarea
						className="underline-input"
						placeholder="let's make something cool together!"
					></textarea>
					<div className="flex-center-container">
						<input className="btn secondary input-submit" type="submit" />
					</div>
				</form>
			</FadeUp>
		</div>
	);
}

export default Contact;
