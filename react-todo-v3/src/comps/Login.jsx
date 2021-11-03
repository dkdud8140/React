import { useUserContext } from "../context/UserContextProvider"
import { useState } from "react"
import { useHistory } from "react-router-dom"

function Login() {
	const history = useHistory();
	const {setUser} = useUserContext();
	const [account, setAccount] = useState({ userid: "", password: "", });
	  const onChange = (e) => { setAccount({ ...account, [e.target.name]: e.target.value }); };
	  const onLogin = async (e) => {
		const res = await fetch("http://localhost:8080/users/login", {
			method: "POST",
			headers: { "Content-Type": "application/json",
						"Access-Control-Allow-Origin": "http://localhost:3000",},
			credentials: "include",
			body: JSON.stringify({ userid: account.userid, password: account.password, }),
			});
		if (res.status === 401) { alert("아이디 또는 비번 확인하세요"); }
		if (res?.ok) {
			const resultUser = await res.json();
			console.log("userid : ", account.userid, "  user : ", resultUser);

			if (!resultUser?.userid) {
				alert("없는 ID 입니다");
				return;
			}
			if (resultUser.password !== account.password) {
				alert("비번 오류");
				return;
			}
			setUser(resultUser);
			history.replace("/");
		}
	}


	return (
		<div className="formbox">
		<input onChange={onChange} name="userid" placeholder="아이디를 입력해주세요"/>
		<input onChange={onChange} name="password" type="password" placeholder="비밀번호를 입력해주세요"/>
		<button className="btn_login" onClick={onLogin}>로그인</button>
	</div>
	  );
}

export default Login
