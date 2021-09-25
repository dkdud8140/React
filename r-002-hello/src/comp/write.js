import { useState } from "react";
import BBsViwe from "./view"

const bbs ={
	b_date : "2021--09-25",
	b_time : "11:00:00",
	b_writer : "Lee",
	b_subject : "ffff",
	b_content : "vvvv",
}

const Write = () =>{

	const [ b_name, setB_Name ] = useState("BBB");
	const [ bbsVO, setBBsVO ] = useState({
		b_date: "2021-09-06",
		b_time: "11:24:00",
		b_writer: "홍길동",
		b_subject: "비가오는 월요일",
		b_content: "가을장마가 기~~~네요",
	})

	const onWriterChangeHandle =(e)=>{
		setB_Name(e.target.value);
	}

	const onChangeHandle = (e) =>{
		const { name, value} = e.target;
		setBBsVO({...bbsVO, [name]:value});
		console.log("Change Handle", name, value);
	}

	return (
		<form>
			<p>
				<input name="b_date" defaultValue={bbs.b_date} onChange={onChangeHandle}/>
			</p>
			<p>
				<input name="b_time" defaultValue={bbs.b_time} onChange={onChangeHandle}/>
			</p>
			<p>
				<input name="b_writer" defaultValue={b_name} onChange={onWriterChangeHandle}/>
			</p>
			<p>
				<input name="b_subject" defaultValue={bbs.b_subject} onChange={onChangeHandle}/>
			</p>
			<p>
				<input name="b_content" defaultValue={bbs.b_content} onChange={onChangeHandle}/>
			</p>
			<div>
				<BBsViwe bbs={bbsVO} b_name={b_name}/>
			</div>

		</form>
	)
}
export default Write;