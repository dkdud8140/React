import React from 'react'
import "../css/about.css"

const About = () => {
	return (
		<div className="about">
			<h1>My Story</h1>
			<div><label htmlFor="">이름</label><span>ㅁㅁㅁ</span></div>
			<div><label htmlFor="">생일</label><span>ㅂㅂㅂ</span></div>
			<div><label htmlFor="">전번</label><span>ㅎㅎㅎ</span></div>
			<div><label htmlFor="">특기</label><span>ㅠㅠㅠ</span></div>
			<div>
				<label htmlFor="">기술</label>
				<span>
				<ul>
					<li>Spring MVC</li>
					<li>Oracle DBMS</li>
					<li>MySQL DBMS</li>
					<li>HTML5</li>
					<li>CSS2 and CSS3</li>
					<li>Nodejs Web Server</li>
					<li>MongoDB NoSQL</li>
					<li>React App</li>
					<li>Android App</li>
				</ul>
				</span>
			</div>
		</div>
	)
}

export default About
