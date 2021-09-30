import './App.css';
import bgi from "./image/header_background.jpg"
import BuckMain from "./comps/BuckMain";

function App() {
	const bgStyle = {
		backgroundImage : `url(${bgi})`,
		backgroundRepeat : `no-repeat`,
		backgroundAttachment : `scroll`,
		backgroundSize : "contain"
	};

  return (
    <div className="App">
      <header className="App-header" style={bgStyle}>
	  </header>
	  <BuckMain/>
    </div>
  );
}

export default App;
