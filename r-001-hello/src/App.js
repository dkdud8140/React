import logo from './logo.svg';
import './App.css';
import Hello from "./components/hello"

const MyBox = () => {
	return (
		<div>
			<h1>Hello</h1>
			<p>My Home</p>
		</div>
	)
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<MyBox/>
		<Hello/>
      </header>
    </div>
  );
}

export default App;
