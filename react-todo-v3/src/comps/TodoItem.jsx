import React from "react";
import { useTodoContext } from "../context/AppContextProvider";

function TodoItem({ todo }) {

	const {listDelete} =useTodoContext();

	const {t_id, t_text, t_comp } = todo;

  return (
    <div className="todo_item">
      <div className="todo_delete" onClick={listDelete}>&times;</div>
      <div className="todo_text">{t_text}</div>
      <div className="check_mark">&#x2713;</div>
    </div>
  );
}

export default TodoItem;