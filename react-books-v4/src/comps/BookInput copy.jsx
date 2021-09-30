import React, { useRef } from 'react'
import "../css/BookInput.css"
import BookView from './BookView'
import MyButton from '../My/MyButton'
import UUID from "react-uuid"
import {useBookContext} from "../context/AppContextProvider"

function BookInput() {
	const { book, setBook, bookList, setBookList } = useBookContext()

	const nextId = useRef(0) ;
	const onChangeHandler = (e) =>{
		const { name, value }= e.target;
		setBook({...book,[name]:value, b_id :nextId})
	}

	const onClickHandle = async () =>{
		//await setBook({...book, b_id:UUID});
		await setBookList([...bookList, book]);
		nextId.current++;
		await setBook({b_id:"",b_name:"",b_genre:""})
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
