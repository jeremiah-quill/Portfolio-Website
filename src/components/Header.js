import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

function Header() {
	return (
		<header className="flex items-center fixed bg-white w-full py-2 h-12 top-0">
			<nav>
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/work">Work</CustomLink>
			</nav>
		</header>
	);
}

export default Header;
