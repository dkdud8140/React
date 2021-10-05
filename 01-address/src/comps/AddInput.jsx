import React,{ useRef } from 'react'
import "../css/AddInput.css"

const AddInput = (probs) => {
	let addId = useRef(0) ;
	const { addTitle, address,setAdress,addBook, setAddBook } = probs.stateGroup
	const onChangeHandler =  (e) => {
		const {name, value} = e.target
		setAdress({...address, [name]:value,addID:addId.current})
	}
	const addListInsert = () =>{
		addId.current++;
		setAdress({...address, addID:addId.current})
		setAddBook([...addBook, address])
	}

	const inputItem = addTitle.map(title=>{
		const placeholderName = `${title}을 입력하세요`
		if(title === "addID") return null;
		return (
			<input value={address.title} name={title} onChange={onChangeHandler} placeholder={placeholderName}></input>
		)
	})

	return (
		<div className="box_input">{inputItem}
			<button onClick={addListInsert}>추가하기</button>
		</div>
	)
}
export default AddInput
