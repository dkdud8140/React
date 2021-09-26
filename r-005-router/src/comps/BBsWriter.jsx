import React from 'react'
import "../css/write.css"

function BBsWriter() {
	return (
		<div className="bbs_write">
			<div><label>작성일자</label><input type="text" /></div>
			<div><label>작성시간</label><input type="text" /></div>
			<div><label>작성자자</label><input type="text" /></div>
			<div><label>작성제목</label><input type="text" /></div>
			<div><label>작성내용</label><input type="text" /></div>
		</div>
	)
}

export default BBsWriter
