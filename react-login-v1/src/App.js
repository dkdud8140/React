import './App.css';
import LoginForm from './comps/LoginForm';
import MainNav from './comps/MainNav';

const NavList = [
	{id:0, title:"Home",link:"/"},
	{id:1, title:"공지사항",link:"/notice"},
	{id:2, title:"자유게시판",link:"/bbs"},
	{id:3, title:"Login",link:"/login"},
	{id:4, title:"JOIN",link:"/join"},
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
		  <h3>로그인프로젝트</h3>
      </header>
	  <MainNav NavList={NavList}>
		  <LoginForm/>
	  </MainNav>
    </div>
  );
}

export default App;
