import './App.css';
import UserContextProvider from "./context/UserContextProvider" 
import MainComp from './comps/MainComp';

function App() {

  return (
    <div className="App">
      <header className="App-header">
		  <h3>로그인프로젝트</h3>
      </header>
	  <UserContextProvider>
		  <MainComp/>
	  </UserContextProvider>
    </div>
  );
}

export default App;
