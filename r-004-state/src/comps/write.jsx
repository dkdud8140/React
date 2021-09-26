import React from 'react'
import "./write.css"

const write = ( { bbs, onBBsChange } ) => {

	const { b_date, b_time, b_writer, b_subject, b_content } = bbs;

	return (
		<div className="bbs_write_form">
			<div><label>작성일자</label><input name="b_date" defaultValue={b_date} onChange={onBBsChange} type="date"/></div>
			<div><label>작성시간</label><input name="b_time" defaultValue={b_time} onChange={onBBsChange} type="time"/></div>
			<div><label>작성자</label><input name="b_writer" defaultValue={b_writer} onChange={onBBsChange} type="text"/></div>
			<div><label>제목</label><input name="b_subject" defaultValue={b_subject} onChange={onBBsChange} type="text"/></div>
			<div><label>내용</label><input name="b_content" defaultValue={b_content} onChange={onBBsChange} type="text"/></div>
		</div>
	)
}

export default write
