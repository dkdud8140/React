import React, { useState } from "react";
import { RenderSquare, calcWinner } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [oxFlag, setOxFlag] = useState(true);
  
  let winner = null;

  if(calcWinner(squares)) {
	  winner = calcWinner(squares);
  }

  // squares 배열의 index 번째 요소의 값을
  // 변경하려고 한다
  // 매개변수로 index 값
  const changeSquares = (index) => {
    // squares[index] = "B"; // 절대 불가

	if(calcWinner(squares)) {
		return
	};

	// if(문자열변수) : 문자열 변수 값이 null, undefinde, "" 이면 false
	// dkslaus true
	if(squares[index]) return;
    // const _squares = squares
    // 배열을 다른 배열에 할당(저장)하면 배열의 값이
    // 복제되지 않고 배열이 저장된 저장소 위치 복제된다
    // 결국 _squares 와 squares 은 같은 배열이다
    // A 사람과 B라는 사람이 한 집을 같이 공유하는 것
    // 배열을 복제할때는 반드시 전개연산자로 수행한다
    const _squares = [...squares]; // 복제
    _squares[index] = oxFlag? "O" : "X"; // _squares[index] === "A" ? "B" : "A"; // 복제된 배열 요소변경
    setSquares(_squares); // 복제된 배열을 원래 배열과 교체
	setOxFlag(!oxFlag);
  };

  const resetGame = (e) =>{
	alert("게임 재시작");
	setSquares("");
	setOxFlag(!oxFlag);
  }

  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // return <div>{RenderSquare()}</div>;

  // RenderSquare를 컴포넌트로 사용하는 방법
  let player = oxFlag? "O" : "X";
  return (
    <div>
      <h3>다음 플레이어 : {player} </h3>
      <RenderSquare squares={squares} changeSquares={changeSquares}/>
	  <h3> Winner : {winner} </h3>
	  <h3 onClick={resetGame}>다시시작</h3>
    </div>
  );
}

export default Board;
