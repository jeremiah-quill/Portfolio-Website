import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="main-header">
			<nav>
				<Link to="/">Home</Link>
				<Link to="/work">Work</Link>
				{/* <Link to="/about">About</Link> */}
			</nav>
		</header>
	);
}

export default Header;
