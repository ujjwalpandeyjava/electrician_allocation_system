import { NavLink } from "react-router-dom";
import React from 'react'
import logo from '../static/logo.png';

function Navbar() {
	return (
		<nav className="mainNavbar navbar">
			<NavLink to="/"> <img src={logo} alt="logo" height='40px' /></NavLink>
			<nav className="navbar secondaryNav">
				<NavLink className={["nav-link", "buttons"].join(" ")} to="/electrician">Electrician</NavLink> |
				<NavLink className={["nav-link", "buttons"].join(" ")} to="/sites">Sites</NavLink>
			</nav >
		</nav>
	)
}

export default Navbar