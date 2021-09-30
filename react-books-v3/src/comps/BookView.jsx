import React, { useContext } from 'react'
import "../css/BookView.css"
import BookContext from '../context/BookContext'

function BookBiew() {

	const {book} = useContext(BookContext);

	return (
		<div className="list_box">
			<div><span>도서명 : {book.b_name}</span></div>
			<div><span>장르 : {book.b_genre}</span></div>
		</div>
	)
}

export default BookBiew
