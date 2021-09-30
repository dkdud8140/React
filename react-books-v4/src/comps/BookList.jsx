import {React, useContext } from 'react'
import "../css/BookList.css"
import BookItem from './BookItem';

const title = ["ID", "도서명", "장르"];

	const tHead = title.map((item)=>{
		return <th>{title}</th>
	})


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
