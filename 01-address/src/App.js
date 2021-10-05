import './App.css';
import { useState } from "react"
import { AddInput, AddList } from "./comps"

const App= ()=> {
	
	const addTitle = ["addID","이름","주소","전화번호","생년월일"]

	const [address, setAdress]= useState({
		addID: "", 이름: "이름",
		주소: "주소", 전화번호: "전화번호",
		생년월일: "생년월일",
	})
	const [addBook, setAddBook]= useState([])
	const stateGroup = { addTitle, address,setAdress, addBook, setAddBook, }

  return (
    <div className="App">
      <header className="App-header">
		  <h2>Adress Book</h2>
      </header>
	  <div className="div_main">
		<AddInput stateGroup={stateGroup}/>
		<AddList stateGroup={stateGroup}/>
		</div>
    </div>
  );
}

export default App;
