import React from 'react'
import "./write.css"

const write = ( { bbs } ) => {

	const { b_date, b_time, b_writer, b_subject, b_content } = bbs;

	return (
		<div className="bbs_write_form">
			<div><label>작성일자</label><input name="b_date" defaultValue={b_date} type="date"/></div>
			<div><label>작성시간</label><input name="b_time" defaultValue={b_time} type="time"/></div>
			<div><label>작성자</label><input name="b_writer" defaultValue={b_writer} type="text"/></div>
			<div><label>제목</label><input name="b_subject" defaultValue={b_subject} type="text"/></div>
			<div><label>내용</label><input name="b_content" defaultValue={b_content} type="text"/></div>
		</div>
	)
}

export default write
