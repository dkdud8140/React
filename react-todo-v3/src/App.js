import './App.css';
import {  MainComp,} from "./comps"
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
	  <div>
		<header className="App-header">
			<h1>TO DO LIST</h1>
		</header>
		<UserContextProvider>
			<MainComp/>
		</UserContextProvider>
	</div>
  );
}

export default App;
