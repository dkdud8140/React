import "./App.css";
import "./css/menu.css";
import "./css/main.css";
import "./css/write.css";
import "./css/detail.css";
import MainNav from "./comps/MainNav";
import Mainbbs from "./comps/Mainbbs";
import BBsWrite from "./comps/BBsWrite";
import BBsDetail from "./comps/BBsDetail";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h3>React BBS 2021</h3>
		  <p>React & Firebase BBS Project</p>
        </header>
        <MainNav />
		<div id="body_box">
			<Route path="/" component={Mainbbs} exact />
			<Route path="/write" component={BBsWrite} exact />
			<Route path="/detail" component={BBsDetail} exact />
		</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
