import React, {  createContext, useContext, useState } from 'react'

const AppContext = createContext();

export const useBookContext = () =>{
	return useContext(AppContext);
}

function AppContextProvider({Children}) {
	const [book, setBook] = useState({
		b_id : 0,
		b_name : "",
		b_genre : "",
	});
	const [bookList, setBookList] = useState([]);
	const providerData = {book,setBook,bookList,setBookList};
	return (
		<AppContext.Provider value={providerData}> 
			{Children}
		</AppContext.Provider>
	)
}
export default AppContextProvider
