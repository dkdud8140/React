import React from 'react'
import { NavLink } from "react-router-dom"


import "../css/mainnav.css"


// function MainNav() {
// 	return (
// 		<div className="main_nav">
// 			<div>HOME</div>
// 			<div>Insert</div>
// 			<div>List View</div>
// 		</div>
// 	)
// }


function MainNav() {
	return (
		<nav className="main_nav">
			<NavLink exact to="/">HOME</NavLink>
			<NavLink exact to="/insert">Insert</NavLink>
			<NavLink exact to="/list">List</NavLink>
		</nav>
	)
}



export default MainNav
