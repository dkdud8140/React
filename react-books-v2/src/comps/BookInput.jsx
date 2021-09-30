import React, { useContext } from 'react'
import BookView from './BookView'
import BookContex from '../context/BookContex'
import BookList from './BookList';

function BookInput() {

	const {book, setBook,bookList, setBookList} = useContext(BookContex);
	const onChangeHandler =(e) =>{
		const { name, value} = e.target;
		setBook({...book,[name]:value})
	}

	const bookInsert = () =>{
		setBook({...book,b_id:Math.random()})
		setBookList([...bookList, book])
	}

	return (
		<div>
			<input name="b_name"  onChange={onChangeHandler} placeholder="도서명" value={book.b_name}/>			
			<input name="b_genre" onChange={onChangeHandler} placeholder="장르" value={book.b_genre}/>			
			<button onClick={bookInsert}>리스트추가</button>
			<BookView />
		</div>
	)
}

export default BookInput
