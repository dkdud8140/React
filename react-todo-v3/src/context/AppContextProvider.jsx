import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();
export const useTodoContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {

  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "TODO to do",
    t_isComplete: false,
  });

  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(0);
  const inputId= useRef();

  const onChange = (e) => {
	const t_text = e.target.value;
	// setTodo({...todo, t_text:t_text});
	setTodo({...todo, t_text, t_id:nextId.current});
  };

  
  const todoClear = () =>{
	setTodo({t_id:nextId.current, t_text:"",t_isComplete:false})
  }

  const todoInsert = (e) =>{

	if(todo.t_text === null || todo.t_text ==="") {
		alert("할 일은 반드시 입력하세요")
		inputId.current.focus();
		return
	}

	setTodoList([...todoList, todo])
	nextId.current++;
	todoClear();
  }

  const onClick = (e) => todoInsert();

  const onKeyPress = (e) => {
	  if(e.key === "Enter") {
		  todoInsert();
	  } else if(e.key === "Escape" ) {
		todoClear();
	  }
  };

  const listDelete =(e) =>{
	//   alert("삭제할까요?")
	if(window.confirm("삭제할까요?")) {
		alert("삭제하기")
		return
	}
	alert("삭제안하기")
}

  const propsData = {
    todo, setTodo, todoList, setTodoList, inputId,
    onChange, onClick, onKeyPress,listDelete
  };

  return (
    <AppContext.Provider value={propsData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;