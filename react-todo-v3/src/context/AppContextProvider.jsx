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
	if(window.confirm("삭제할까요?")) {
		const t_id = Number(e.target.dataset.todoId);
		const _todoList = todoList
			.filter((todo)=>todo.t_id !== t_id);

		setTodoList(_todoList);
	}
	}	

	const onCompClick = (e) =>{
		const t_id = Number(e.target.dataset.todoId);
		const index = todoList.findIndex((todo)=>todo.t_id === t_id);
		const selectTodo = todoList[index];
		const _todoList = [...todoList];

		_todoList[index] = {...selectTodo, t_isComplete : !selectTodo.t_isComplete,};
		setTodoList(_todoList);
	}


  const propsData = {
    todo, setTodo, todoList, setTodoList, inputId,
    onChange, onClick, onKeyPress,listDelete, onCompClick

  };

  return (
    <AppContext.Provider value={propsData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;