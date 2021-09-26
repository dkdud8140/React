import React from 'react'
import { NavLink } from "react-router-dom";

function MainNav() {
	return (
		<ul className="main_menu">
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/about">My Story</NavLink></li>
			<li><NavLink to="bbs">Free Talk</NavLink></li>
			<li><input placeholder="검색어를입력하세요"/></li>
		</ul>
	)
}

export default MainNav
