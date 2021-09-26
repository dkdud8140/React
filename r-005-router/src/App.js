import logo from './logo.svg';
import './App.css';
import "./css/menu.css"

import { BrowserRouter, Route } from "react-router-dom";

import Home from './comps/Home';
import About from './comps/About';
import BBsWriter from './comps/BBsWriter';
import MainNav from './comps/MainNav';

function App() {
  return (
	  <BrowserRouter>
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h3>My React Project</h3>
			</header>
			<MainNav/>
			<Route path="/" component={Home} exact/>
			<Route path="/about" component={About}/>
			<Route path="/bbs" component={BBsWriter}/>
		</div>
	</BrowserRouter>
  );
}

export default App;
