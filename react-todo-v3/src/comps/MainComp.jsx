import React from 'react'
import { Join, Login, MainNav, TodoInput, TodoList, TodoMain,Logout } from "./index.jsx"
import { Route } from 'react-router';
import { useUserContext } from '../context/UserContextProvider'
function MainComp() {
	const {user} = useUserContext();
	const NavList = [
		{ id: 0, title: "Home", link: "/" },
		user.userid 
		? { id: 1, title: "로그아웃", link: "/logout", align: true }
		: { id: 1, title: "로그인", link: "/login", align: true },
		user.userid
		? { id: 2, title: "마이페이지", link: "/mypage" }
		: { id: 2, title: "회원가입", link: "/join" },
	];
  return (
	<MainNav NavList={NavList}>
		<Route exact path="/">
			<TodoMain form={<TodoInput/>} children={<TodoList/>} header="오늘할일"/>
		</Route>
		<Route exact path="/join" ><Join/></Route>
		<Route exact path="/login" ><Login/></Route>
		<Route exact path="/logout" ><Logout/></Route>
	</MainNav>
  )	
}
export default MainComp
