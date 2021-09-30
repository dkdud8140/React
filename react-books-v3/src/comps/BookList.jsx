import {React, useContext } from 'react'
import "../css/BookList.css"
import BookContext from '../context/BookContext';

const title = ["ID", "도서명", "장르"];

	const tHead = title.map((item)=>{
		return <th>{title}</th>
	})


function BookList() {

	const {bookList} = useContext(BookContext);
	
	const viewList = bookList.map((book, index)=>{
		return (
		<tr key={book.b_id}>
			<td>{book.b_id}</td>
			<td>{book.b_name}</td>
			<td>{book.b_genre}</td>
		</tr>)
	})

	return (
		<table className="table_list">
			<thead>
				<tr>
					<td>ID</td>
					<td>도서명</td>
					<td>장르</td>
				</tr>
			</thead>
			<tbody>
				{viewList}
			</tbody>
		</table>
	)

}

export default BookList
