import React from 'react'

function Join() {

	const user = {}

	const onChangeAccount = {}
	const onSubmitAccount ={}

	return (
		<div className="join_box">
			<input value={user.userid} placeholder="ID를 입력하세요" name="userid" onChange={onChangeAccount}></input>
			<input value={user.password} placeholder="password를 입력하세요" name="password" type="password" onChange={onChangeAccount}></input>
			<input value={user.re_password} placeholder="password를 입력하세요" name="re_password" type="password" onChange={onChangeAccount}></input>
			<input value={user.email} placeholder="e-mail을 입력하세요" name="email" type="email" onChange={onChangeAccount}></input>
			<button className="btn_join" onClick={onSubmitAccount}>가입하기</button>
		</div>
	)
}

export default Join
