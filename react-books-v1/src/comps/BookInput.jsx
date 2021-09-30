import React, { useContext } from 'react'
import BookContext from "../context/BookContext"

function BookInput() {

	const { book, setBook } = useContext(BookContext);

	const onChangeHandle = (e) =>{
		setBook(e.target.value);
	}

	return (
		<div>
			<input placeholder="도서명" value={book} onChange={onChangeHandle}/>
		</div>
	)
}

export default BookInput
