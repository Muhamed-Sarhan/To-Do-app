import React from "react";

const Form = ({
  inputText,
  setInputText,
  toDoList,
  setToDoList,
  edit,
  setEdit,
}) => {
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("type anything");
    } else {
      setToDoList([
        ...toDoList,
        { text: inputText, id: Math.floor(Math.random() * 1000) },
      ]);
      setEdit(false);
    }
    setInputText(" ");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        onChange={handleInputChange}
        value={inputText}
      />
      {edit ? (
        <button className="todo-button" type="submit">
          <i className="fas fa-edit"></i>
        </button>
      ) : (
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      )}
    </form>
  );
};

export default Form;
