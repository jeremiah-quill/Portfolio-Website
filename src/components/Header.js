import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

function Header() {
	return (
		<header className="main-header">
			<nav>
				{/* <Link to="/">Home</Link>
				<Link to="/work">Work</Link> */}
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/work">Work</CustomLink>
				{/* <Link to="/about">About</Link> */}
			</nav>
		</header>
	);
}

export default Header;
