import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="main-header">
			<Link to="/">
				<h1 className="main-title">Jeremiah Quill</h1>
			</Link>
			<nav>
				<Link to="/">Home</Link>
				{/* <Link to="/about">About</Link> */}
				<Link to="/work">Work</Link>
				{/* <Link to="/contact">Contact</Link> */}
			</nav>
		</header>
	);
}

export default Header;
