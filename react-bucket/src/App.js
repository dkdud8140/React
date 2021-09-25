import "./App.css";
import "./css/MainBucket.css";


import MainBucket from "./comps/MainBucket";

import {BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
	<BrowserRouter>
    <div className="App">
      <header className="App-header">
		  <h1>My Bucket List</h1>
      </header>

		<div className="main_box">
			<Route path="/" component={MainBucket} exact/>
		</div>

    </div>
	</BrowserRouter>
  );
}

export default App;
