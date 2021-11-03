import React from 'react'
import LoginForm from './LoginForm';
import MainNav from './MainNav';
import JoinForm from './JoinForm';
import Notice from './Notice';
import BBs from './BBs';

import {Route} from "react-router-dom"
import { useUserContext } from '../context/UserContextProvider';


function MainComp() {

	const { user, setUser} = useUserContext();

	const NavList = [
		{id:0, title:"Home",link:"/"},
		{id:1, title:"공지사항",link:"/notice"},
		{id:2, title:"자유게시판",link:"/bbs"},
		user?.userid ? {id:3, title:"LogOut",link:"/logout", align:true}
		 : {id:3, title:"Login",link:"/login", align:true},

		 user?.userid ? {id:4, title:"My Page",link:"/mypage"}
		 			: {id:4, title:"JOIN",link:"/join"}
	];


	return (
	<MainNav NavList={NavList}>
		<Route path="/" exact><div>홈화면</div></Route>
		  <Route path="/login" exact><LoginForm/></Route>
		  <Route path="/join" exact><JoinForm/></Route>
		  <Route path="/notice" exact><Notice/></Route>
		  <Route path="/bbs" exact><BBs/></Route>
	  </MainNav>
	)
}

export default MainComp
