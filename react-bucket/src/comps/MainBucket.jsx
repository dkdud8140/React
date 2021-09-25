import React from "react";

function MainBucket() {
	return (
		<div className="MainBucket_div">
			<input className="input_box" type="text" placeholder="추가할 내용을 입력하세요"></input>
			
			<table className="tbl_main">
				<thead>
					<tr>
						<td>FLAG</td>
						<td>날짜</td>
						<td>BUCKET</td>
						<td>완료</td>
						<td>취소</td>
					</tr>
					</thead>
				<tr>
					<td>일반</td>
					<td>2021-09-21 00:00:00</td>
					<td>공부하기</td>
					<td>2021-09-01 00:00:00</td>
					<td><input type="checkbox"></input></td>
				</tr>
			</table>
		</div>
		);
}
	
export default MainBucket;