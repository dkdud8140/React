import React from "react";

function Home() {
  return (
    <div className="table_box">
      <table className ="main_table">
		  <tr>
			  <th>작성일자</th>
			  <th>작성시간</th>
			  <th>작성자</th>
			  <th>제목</th>
		  </tr>
		  <tr>
			  <td>2021-09-09</td>
			  <td>11:00:00</td>
			  <td>홍길동</td>
			  <td>임시제목</td>
		  </tr>
	  </table>
    </div>
  );
}

export default Home;
