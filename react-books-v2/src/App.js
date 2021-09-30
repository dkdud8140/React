import { useState } from 'react';
import './App.css';
import BookMain from "./comps/BookMain"
import BookContex from './context/BookContex';

function App() {

	// 한 개의 데이터를 저장할 state
	const [ book, setBook ] = useState({
		b_id : 0,
		b_name : "JAVA",
		b_genre : "IT",
	});

	const [ bookList, setBookList ] = useState([]);

	const providerData = { book, setBook, bookList, setBookList};

  return (
    <div className="App">
      <header className="App-header">
		  <BookContex.Provider value={providerData}>
		  	<BookMain />	
		  </BookContex.Provider>
      </header>
    </div>
  );
}

export default App;
