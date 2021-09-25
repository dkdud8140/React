/**
 * 2개의 변수(상수) 선언
 */
 const comp = "컴포넌트만들기"
 const nation = "Republic of Korea"

 
 const buyer = {
	name : "홍길동",
	addr : "서울시",
	age : 30
}



 /**
 * 미리 선언된 변수를 컴포넌트 코드에서 사용할때
 * {변수명} 과 같이 사용한다
 * @returns 
 */
const HelloBox = ()=>{
	return(
		<>
			<h1>컴포넌트 만들기</h1>
			<h3>{comp}</h3>
			<ul>
				<li>이름 : {buyer.name}</li>
				<li>주소 : {buyer.addr}</li>
				<li>나이 : {buyer.age}</li>
			</ul>
		</>
	)
}



const Hello = () =>{

	return (
		<>
			<h1>Welcome!!</h1>
		</>
	)
}

export default Hello ; 