import React from 'react'

function BuckMain() {
	return (
		<div>
			<input placeholder="버킷에 추가할 내용을 입력하세요"></input>
			<table>
				<thead>
					<tr>
						<th>FLAG</th>
						<th>날짜</th>
						<th>BUCKET</th>
						<th>완료</th>
						<th>취소</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>TEST</td>
						<td>TEST</td>
						<td>TEST</td>
						<td>TEST</td>
						<td><input type="checkbox"/></td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default BuckMain
