import React, { useContext } from 'react'
import "../css/BookView.css"
import { useBookContext } from '../context/AppContextProvider';

function BookBiew() {

	const {book} = useContext(useBookContext);

	return (
		<div className="list_box">
			<div><span>도서명 : {book.b_name}</span></div>
			<div><span>장르 : {book.b_genre}</span></div>
		</div>
	)
}

export default BookBiew
