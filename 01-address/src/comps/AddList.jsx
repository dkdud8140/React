import React from 'react'
import "../css/AddList.css"

const AddList = (props) => {
	const {addTitle,addBook } =  props.stateGroup
	const tableHeader = true && addTitle.map((title)=>{
		return <th>{title}</th>
	})

	const tableBody = true && addBook.map((item)=>{
		return (
			<tr key={item.addID}>
				<td>{item.addID}</td>
				<td>{item.이름}</td>
				<td>{item.주소}</td>
				<td>{item.전화번호}</td>
				<td>{item.생년월일}</td>
			</tr>
		)
	})
	
	return (
		<div className="box_table">
		<table className="table_list">
			<thead><tr>{tableHeader}</tr></thead>
			<tbody>{tableBody}</tbody>		
		</table>
		</div>
	)
}

export default AddList
