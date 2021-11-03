import React from "react";
import { useTodoContext } from "../context/AppContextProvider";

function TodoItem({ todo }) {
	const {listDelete, onCompClick} =useTodoContext();
	const {t_id, t_text, t_isComplete } = todo;

  return (
    <div className="todo_item">
      <div className="todo_delete"
	  	onClick={listDelete} data-todo-id={t_id}>&times;</div>
      <div className={`todo_text ${t_isComplete && "checked"}`}
	  		onClick={onCompClick} data-todo-id={t_id}
	  >{t_text}</div>
      {t_isComplete && <div className="check_mark">&#x2713;</div>}
    </div>
  );
}

export default TodoItem;