import React from "react";

const ToDo = ({
  todo,
  setToDoList,
  toDoList,
  todaData,
  setInputText,
  setEdit,
}) => {
  const handleDelete = () => {
    setToDoList(toDoList.filter((el) => el.id !== todo.id));
  };
  const handleEdit = () => {
    setInputText(todo.text);
    setToDoList(toDoList.filter((el) => el.id !== todo.id));
    setEdit(true);
  };
  const handleComplete = () => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.complete ? "completed" : ""}`}>
        {todaData}
      </li>
      <button className="complete-btn" onClick={handleComplete}>
        <i className="fas fa-check"></i>
      </button>
      <button className="edit-btn" onClick={handleEdit}>
        <i className="fas fa-edit"></i>
      </button>
      <button className="trash-btn" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDo;
