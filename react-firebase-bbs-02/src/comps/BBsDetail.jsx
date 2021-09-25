import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useRouteMatch } from "react-router-dom"
import { firestore } from "../config/BBSConfig";

/* eslint-disable react-hooks/exhaustive-deps */

function BBsDetail() {

	const router = useHistory();
	const match = useRouteMatch();
	const docId = match.params.id;

	// 값이 없을 때 오류 방지
	const [bbs, setBbs] = useState({
		b_date:"",
		b_time:"",
		b_writer:"",
		b_subject:"",
		b_content:"",
	});

	const findByIdFetch = useCallback (async () =>{

		if(docId){
			const result = await firestore.collection("bbs").doc(docId).get();
			if(result.data()) {
				setBbs(result.data());
			}
		}
	}, [docId]);

	const onDelete =(e)=>{
		if(window.confirm("삭제하시겠습니까?")) {
			firestore.collection("bbs").doc(docId).delete()
			.then((result)=>{
				router.push(`/`);
			});
		}
	}

	useEffect(findByIdFetch, [findByIdFetch]);

	return (
	  <div className="bbs_detail">
		  <div>
			  <label htmlFor="">작성일자</label>
			  <span>{bbs.b_date}</span>
		  </div>

		  <div>
			  <label htmlFor="">작성시간</label>
			  <span>{bbs.b_time}</span>
		  </div>

		  <div>
			  <label htmlFor="">작성자</label>
			  <span>{bbs.b_writer}</span>
		  </div>
		  <div>
			  <label htmlFor="">제목</label>
			  <span>{bbs.b_subject}</span>
		  </div>
		  <div>
			  <label htmlFor="">내용</label>
			  <span>{bbs.b_content}</span>
		  </div>
		  <div className="bbs_btn_box">
			  <button onClick={()=>{
				  router.push("/");
			  }}>처음으로</button>
			  <button onClick={()=>{
				  router.push(`/write/${docId}`);
			  }}>수정</button>
			  <button onClick={onDelete}>삭제</button>
		  </div>

	  </div>
	);
  }
  
  export default BBsDetail;