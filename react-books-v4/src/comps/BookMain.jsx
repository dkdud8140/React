import {React, useState } from 'react'
import { Route } from "react-router-dom";
import BookInput from './BookInput'
import BookList from "./BookList"
import AppContextProvider from "../context/AppContextProvider"

function BookMain() {
	return (
		<>
		<AppContextProvider>
			<Route path="/" exact>여기는 HOME</Route>	
			<Route path="/insert" exact component={BookInput}></Route>	
			<Route path="/list" exact component={BookList}></Route>
		</AppContextProvider>
		</>
	)
}

export default BookMain
