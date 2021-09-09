import "./App.css";
import "./css/menu.css";
import "./css/main.css";
import MainNav from "./comps/MainNav";
import Mainbbs from "./comps/Mainbbs";

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
        <Route path="/" component={Mainbbs} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
