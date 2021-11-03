import React,{ useState } from 'react'
import { useUserContext } from "../context/UserContextProvider"


function JoinForm() {

	const {user, setUser} = useUserContext();

	const onChangeAccount=(e)=>{
		const {name,value}=e.target;
		setUser({...user, [name]:value})
	}
	
	const onSubmitAccount= async(e)=>{
		if(!user?.userid) {
			alert("id 입력하세요")
			return;
		}

		if(!user?.password) {
			alert("password 입력하세요")
			return;
		}

		if(!user?.re_password) {
			alert("password 입력하세요")
			return;
		}

		if(user?.password !== user?.re_password) {
			alert("비번확인하세요")
			return;
		}

		if(!user?.email) {
			alert("email 입력하세요")
			return;
		}

		const joinData = {
			userid : user.userid,
			password : user.password,
			email : user.email
		}

		const res = 
			await fetch("http://localhost:8080/users/join",
				{
					method:"POST",
					headers : {
							"Content-Type" : "application/json"
						},
					body : 	JSON.stringify(joinData)
				})

			if(res.ok) {
				const json = await res.json()
				alert(JSON.stringify(json))
			}

	}



	return (
		<div>
			<input value={user.userid} placeholder="ID를 입력하세요" name="userid" onChange={onChangeAccount}></input>
			<input value={user.password} placeholder="password를 입력하세요" name="password" type="password" onChange={onChangeAccount}></input>
			<input value={user.re_password} placeholder="password를 입력하세요" name="re_password" type="password" onChange={onChangeAccount}></input>
			<input value={user.email} placeholder="e-mail을 입력하세요" name="email" type="email" onChange={onChangeAccount}></input>
			<button onClick={onSubmitAccount}>가입하기</button>
		</div>
	)
}

export default JoinForm