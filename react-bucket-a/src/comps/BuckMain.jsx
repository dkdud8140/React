import React, { useState } from "react";
import BuckList from "./BuckList";
import BuckInput from "./BuckInput";
import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
  const [bucketList, setBuckList] = useState([])

const buck_insert =(bucket_text)=>{
	const bucket = {
		b_id :uuid(),
		b_start_date : moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
		b_title : bucket_text,
		b_flag : 0,
		b_end_date : "",
		b_end_check : false,
		b_cancel : false
	};
	setBuckList([...bucketList, bucket]);
}

  const flag_change = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_flag: bucket.b_flag + 1,
        };
      } else {
        return bucket;
      }
    });
    setBuckList([...bucketList]);
  };

  return (
    <div className="w3-container-fluid">
		<BuckInput buck_insert={buck_insert}/>
      {/* <BuckInput /> */}
      {/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기  */}
      <BuckList bucketList={bucketList} flag_change={flag_change} />
    </div>
  );
}

export default BuckMain;
