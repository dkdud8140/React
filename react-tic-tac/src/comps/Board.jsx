import React,{ useState } from "react";
import { RenderSquare } from "../modules/main";

function Board() {

	const [squares, setSquares] = useState(
		Array(9).fill("A")
	);

  return (

	<div className="num_box">
		<p style={{margin : 10}}>다음플레이어 : 0</p>
		<RenderSquare squares={squares}/>
	</div>

  );
}

export default Board;
