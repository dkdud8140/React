import React from 'react'
import { useTodoContext } from "../context/AppContextProvider"
 
function TodoInput() {

	const { inputId, todo, onChange, onClick, onKeyPress} = useTodoContext();

	return (
		<div className="input_box">
			<input ref={inputId} onChange={onChange} onKeyPress={onKeyPress} value={todo.t_text}/>
			<button onClick={onClick} >추가하기</button>
		</div>
	)
} 

export default TodoInput
