import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, setToDoList, setInputText, setEdit }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {toDoList.map((todo) => (
          <ToDo
            todo={todo}
            setToDoList={setToDoList}
            toDoList={toDoList}
            key={todo.id}
            todaData={todo.text}
            setInputText={setInputText}
            setEdit={setEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
