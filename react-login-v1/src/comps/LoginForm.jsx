import React from 'react'
import "../css/LoginForm.css"

function LoginForm() {
	return (
		<div className="formbox">
			<input name="userId" placeholder="아이디를 입력해주세요"/>
			<input name="password" type="password" placeholder="비밀번호를 입력해주세요"/>
			<button className="btn_login">로그인</button>
		</div>
	)
}

export default LoginForm
