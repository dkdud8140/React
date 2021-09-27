import React, { useState } from 'react'
import { firestore } from "../config/FirebaseConfig"
import moment from "moment";

function BBsWrite({history}) {
 
	const [ bbs, setBBs ] = useState({
		b_write : "",
		b_subject:"",
		b_content:"",
	});

	const onChange = (e) =>{
		const {value, name} = e.target;
		setBBs({...bbs, [name]:value});
	} 

	const onClickSave = () =>{
		const saveBBS = {
			...bbs,
			b_date : moment().format("YYYY[-]MM[-]DD"),
			b_time : moment().format("HH:mm:ss"),
		}

		firestore.collection("bbs01")
		.doc()
		.set(saveBBS)
		.then(doc=>{
			console.log(doc)
			history.push("/");
		})
	}

	return (
		<div className="bbs_write">
			<div><input type="text" onChange={onChange} name ="b_write" placeholder="Writer" /></div>
			<div><input type="text" onChange={onChange} name ="b_subject" placeholder="Subject" /></div>
			<div><input type="text" onChange={onChange} name ="b_content" placeholder="Content" /></div>
			<div>
				<button onClick={onClickSave}>Save</button>
			</div>
		</div>
	)
}

export default BBsWrite
