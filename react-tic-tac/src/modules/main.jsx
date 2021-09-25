	// const arrayRow = [0,0,0];
	// const arrayCol = [0,0,0];

	// arrayRow.map(row=>{
	// 	const cols = arrayCol.map((col)=>{
	// 	})
	// });

	
	// const arrFuncCol = Array(3).fill(0);
	// const arrFuncRow = Array(3).fill(arrFuncCol);

	// const arrFuncBox = Array(3).fill([Array(3).fill(0)]);




/*
	다차원 배열
	배열 속에 요소가 배열로 이루어진 배열
	a=[1,2,4,5,6,]
	a[0]
	a[0]=3

	2차원 배열
	b=[
		[1,2,3,4,5],
		[1,2,3,4,5],
	]
	b[0][1]
	b[0][2] =5


	3차원배열
	c=[ 
		[
			[1,2,3,4,5],
			[1,2,3,4,5],
		]
	]
	c[0][0][1]

	*/

const RenderSquare = ({squares}) =>{
	const arrayBox = [
		[0,0,0],[0,0,0],[0,0,0]
	];

	// const board_click = (e) =>{
	// 	const bNum = e.target;
	// 	if(bNum.tagName === "BUTTON") {
	// 		const Bnum = bNum.dataset.number;
	// 		alert(Bnum);
	// 	}
	// }
	
	const onButtonClick = (e) =>{
		const index = e.target.dataset.index;
		alert(index);
	}

	let num = 0 ;
	const buttons = arrayBox.map((subBox)=>{
		const buttonCols = subBox.map(()=>{
			//한 라인의 button만들기
			return <button onClick={onButtonClick} data-index={squares[num]}>{squares[num++]}</button>
		})
		// 각 라인의 컴포넌트 만들기
		return <div className="box_row">{buttonCols}</div>
	});
	return buttons;
};

export {RenderSquare};
