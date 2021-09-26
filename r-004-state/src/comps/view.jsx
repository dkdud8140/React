import React from 'react'
import "./view.css"

const view = (props) => {

	const {bbs} = props;
	return (
		<div className="bbs_view">
			<div><label >작성일자</label><span>{bbs.b_date}</span></div>
			<div><label >작성시간</label><span>{bbs.b_time}</span></div>
			<div><label >작성자</label><span>{bbs.b_writer}</span></div>
			<div><label >제목</label><span>{bbs.b_subject}</span></div>
			<div><label >내용</label><span>{bbs.b_content}</span></div>
		</div>
	);
}

export default view ;
