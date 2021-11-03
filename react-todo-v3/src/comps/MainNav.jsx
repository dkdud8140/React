import React from 'react'
import {NavLink,BrowserRouter } from "react-router-dom"

function MainNav({ children, NavList}) {

	const nav_items = NavList.map((nav)=>{
		return (
			<li className="nav_items">
				<NavLink to={nav.link} exact>{nav.title}</NavLink>
			</li>
		)
	})

	return (
		<BrowserRouter>
			<ul className="main_nav">{nav_items}</ul>
			{children}
		</BrowserRouter>
	)
}

export default MainNav
