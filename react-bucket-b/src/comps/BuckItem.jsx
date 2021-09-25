import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

// { bucket }
// props.bucket을 직접 사용하도록 변수 생성하기
function BuckItem({ args, bucket }) {
  const { flag_change, bucket_update, bucket_complet } = args;

  const [b_update, setB_Update] = useState({
    b_title: "",
    isEdit: false,
  });



  const onItemClick =(e) =>{
	//e.currentTarget
	// 직접 이벤트가 설정된 tag
	const itemTr = e.currentTarget;
	const b_id = itemTr.dataset.id;
	const itemTd = e.target;
	if(itemTd.tagName === "TD") {
		const className = itemTd.className;
		if(className.includes("b_flag")) {
			flag_change(b_id);
		} else if(className.includes("b_title")) {
			setB_Update({
				isEdit:true,
				b_title : bucket.b_title,
			})
		} else if(className.includes("b_end_date")) {
			bucket_complet(bucket.b_id);
		}
	}
	
	if(itemTd.tagName === "SPAN" && itemTd.className.includes("b_title")) {
		setB_Update({
			isEdit:true,
			b_title : bucket.b_title,
		})
	}

  }


  const bucket_KeyDown = (e) => {
    if (e.keyCode === 13) {
      const b_title = e.target.value;
      const b_id = e.target.closest("TR").dataset.id;
      setB_Update({ ...b_update, isEdit: false });
      bucket_update(b_id, b_title);
    }
  };

  return (
    <tr key={bucket.b_id}  data-id={bucket.b_id} onClick={onItemClick}>
      <td className="b_flag"> {b_flag_text[bucket.b_flag % 4]}</td>
      <td className="b_start_date">{bucket.b_start_date}</td>
	  { b_update.isEdit ? (
	  <td className="b_title">
        <input className="b_title" onKeyDown={bucket_KeyDown} defaultValue={ b_update.b_title } />
		</td>)
		: (<td>{ bucket.b_title } </td> ) }
      <td className="b_end_date">{ bucket.b_end_date } </td>
      <td className="b_end_check">
        <input type="checkbox" />
      </td>
    </tr>
  );
}

export default BuckItem;
