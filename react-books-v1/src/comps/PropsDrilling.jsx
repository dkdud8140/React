import React, { useState } from 'react'

const PropsLevel_2 = ({setSample}) => {
	return (
		<div>
			<label>샘플문자열 입력 : </label>
			<input onChange={(e)=> setSample(e.target.value)}/>
		</div>

	)
}

const PropsLevel_1 = ({sample, setSample}) =>{
	return <div  className ="level_1">
		샘플값 : {sample}
		<PropsLevel_2 setSample={setSample}/>
		</div>;
}
const PropsMain = (props) =>{
	const {sample,setSample} = props;
	return (
		<div className ="main">
			<PropsLevel_1 sample={sample} setSample={setSample}/>
		</div>
	)
}

function PropsDrilling() {

	const [ sample, setSample ] = useState("대한민국만세");
	
	return (
		<div className ="start">
			<PropsMain sample={sample} setSample={setSample}/>
		</div>
	)
}

export default PropsDrilling
