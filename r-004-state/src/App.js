import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Write from './comps/write';
import View from './comps/view';


const bbsSample = {
	b_date: "2021-09-07",
	b_time: "10:24:00",
	b_writer: "홍길동",
	b_subject: "React BBS",
	b_content: "React를 이용한 BBS 프로젝트 만들기",
  };

function App() {

	const [ bbsVO, setBbsVO] = useState(bbsSample);
	const bbsChange = (e) =>{
		const { name, value } = e.target;
		setBbsVO( {...bbsVO,[name]:value});
	}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
	  <section className="main_section">
			<article><Write bbs={bbsVO} onBBsChange={bbsChange}/></article>
			<article><View bbs={bbsVO}/></article>
		</section>
    </div>
  );
}

export default App;
