import React, {  createContext, useContext, useState } from 'react'

const AppContext = createContext();

export const useBookContext = () =>{
	return useContext(AppContext);
}


function AppContextProvider({Children}) {

	const [book, setBook] = useState({
		b_id : 0,
		b_name : "JAVA BOOK",
		b_genre : "IT",
	});


	const [bookList, setBookList] = useState([]);

	const providerData = {book,setBook,bookList,setBookList};

	return (
		<AppContextProvider value={providerData}> 
			{Children}
		</AppContextProvider>
	)
}

export default AppContextProvider
