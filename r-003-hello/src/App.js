import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Write from "./comps/write"
import View from "./comps/view"

function App() {

	const [friend, setFriend ] = useState({
		f_name : "AAA",
		f_addr : "KOREA"
	})

	const onChangeHandle = (e) =>{
		const {name, value} = e.target
		setFriend({...friend, [name]:value});
	}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<Write friend={friend} onChangeHandle={onChangeHandle}/>
		<View friend={friend}/>
      </header>
    </div>
  );
}

export default App;
