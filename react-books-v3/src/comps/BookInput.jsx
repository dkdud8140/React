import React, { Children, useContext } from 'react'
import "../css/BookInput.css"
import BookView from './BookView'
import BookContext from "../context/BookContext"
import MyButton from '../My/MyButton'
import UUID from "react-uuid"

function BookInput() {


	const { book, setBook, bookList, setBookList } = useContext(BookContext);

	const onChangeHandler = (e) =>{
		const { name, value }= e.target;
		setBook({...book,[name]:value})
	}

	const onClickHandle = async () =>{
		await setBookList({...book, b_id:UUID})
		await setBookList([...bookList, book])
	}

	return (
		<>
		<div className="input_box">
			<div><label>도서명</label><input name="b_name" onChange={onChangeHandler} value={book.b_name}/></div>
			<div><label>장르</label><input name="b_genre" onChange={onChangeHandler} value={book.b_genre}/></div>
			<MyButton onClick={onClickHandle}>추가하기</MyButton>
		</div>
		<BookView />
		</>
	)
}

export default BookInput
