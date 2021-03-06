import React, { useRef } from 'react'
import "../css/BookInput.css"
import BookView from './BookView'
import MyButton from '../My/MyButton'
import {useBookContext} from "../context/AppContextProvider"

function BookInput() {
	const { book, setBook, bookList, setBookList } = useBookContext()

	const nextId = useRef(0) ;
	const nameId = useRef();
	const genreId = useRef();
	const onChangeHandler = (e) =>{
		const { name, value }= e.target;
		setBook({...book,[name]:value, b_id :nextId})
	}

	const onClickHandle = async () =>{

		if(book.b_name === "") {
			alert("도서명을 입력하세여")
			nameId.current.focus();
			return
		}

		if(book.b_genre === "") {
			alert("장르명을 입력하세여")
			genreId.current.focus();
			return
		}

		await setBookList([...bookList, book]);
		nextId.current++;
		await setBook({b_id:"",b_name:"",b_genre:""})
	}

	return (
		<>
		<div className="input_box">
			<div><label>도서명</label><input ref={nameId} name="b_name" onChange={onChangeHandler} value={book.b_name}/></div>
			<div><label>장르</label><input ref={genreId} name="b_genre" onChange={onChangeHandler} value={book.b_genre}/></div>
			<MyButton onClick={onClickHandle}>추가하기</MyButton>
		</div>
		<BookView />
		</>
	)
}

export default BookInput
