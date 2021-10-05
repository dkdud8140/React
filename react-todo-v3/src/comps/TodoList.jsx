import React from 'react'
import TodoItem from "./TodoItem"
import { useTodoContext } from '../context/AppContextProvider';

function TodoList() {

	const {todoList} =useTodoContext();

	const listView = todoList.map(item=>{
		return <TodoItem todo={item} key={item.t_id}></TodoItem>
	})

	  return <div>{listView}</div>;
	}
export default TodoList
