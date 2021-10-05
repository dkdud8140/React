import logo from './logo.svg';

import './App.css';
import TodoMain from './comps/TodoMain';
import TodoInput from "./comps/TodoInput"
import TodoList from './comps/TodoList';
// import CompButton from './comps/CompButton';

function App() {
  return (
	  <div>
		<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		</header>
		<TodoMain form={<TodoInput />} children={<TodoList/>} header="오늘할일">
		
		{/* <TodoList /> */}
		</TodoMain>

		{/* <CompButton>HOME</CompButton>
		<CompButton>바로가기</CompButton>
		<CompButton>버튼복붙</CompButton> */}
	</div>
  );
}

export default App;
