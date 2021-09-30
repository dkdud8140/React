import {React, useState } from 'react'
import { Route } from "react-router-dom";
import BookInput from './BookInput'
import BookList from "./BookList"

import BookContext from "../context/BookContext"

function BookMain() {
	const [ book, setBook] = useState({
		b_name : "도서명을 입력하세요",
		b_genre : "장르명을 입력하세요",
	})

	const providerData = {book,setBook};
	return (
		<>
		<BookContext.Provider value={providerData}>
			<Route path="/" exact>여기는 HOME</Route>	
			<Route path="/insert" exact component={BookInput}></Route>	
			<Route path="/list" exact component={BookList}></Route>
		</BookContext.Provider>
		</>
	)
}

export default BookMain
