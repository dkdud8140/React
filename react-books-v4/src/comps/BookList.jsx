import {React } from 'react'
import "../css/BookList.css"
import BookItem from './BookItem';

function BookList() {

	return (
		<table className="table_list">
			<thead>
				<tr>
					<td>ID</td>
					<td>도서명</td>
					<td>장르</td>
				</tr>
			</thead>
			<tbody><BookItem/></tbody>
		</table>
	)

}

export default BookList
