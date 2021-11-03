import React,{ useState } from 'react'
import "../css/LoginForm.css"
import UserContextProvider, { useUserContext } from "../context/UserContextProvider"
 
function LoginForm() {

	const {setUser} = useUserContext();

	const [account, setAccount] = useState({
		userid: "",
		password: "",
	  });
	
	  const onChage = (e) => {
		setAccount({ ...account, [e.target.name]: e.target.value });
	  };
	
	  const onLogin = async (e) => {
		const res = 
			await fetch("http://localhost:8080/users/login",
			{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				userid: account.userid,
				password: account.password,
			}),
			});

		if (res?.ok) {
			const resultUser = await res.json();
			console.log("userid", account.userid);
			console.log("user", resultUser);

      if (!resultUser) {
        alert("아이디가 없음");
        return;
      }
      if (resultUser.password !== account.password) {
        alert("비번 오류");
        return;
      }
      alert("로그인 성공");
	  setUser(resultUser);
    }
  };

	return (
		<div className="formbox">
			<input onChange={onChage} name="userid" placeholder="아이디를 입력해주세요"/>
			<input onChange={onChage} name="password" type="password" placeholder="비밀번호를 입력해주세요"/>
			<button className="btn_login" onClick={onLogin}>로그인</button>
		</div>
	)
}

export default LoginForm
