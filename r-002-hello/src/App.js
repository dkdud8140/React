import logo from './logo.svg';
import './App.css';
import Write from "./comp/write"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
	  <section>
		  <Write/>
	  </section>
    </div>
  );
}

export default App;
