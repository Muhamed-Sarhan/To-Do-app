import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [edit, setEdit] = useState(false);

  const saveLocalTodoList = () => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  };

  const getLocalTodoList = () => {
    if (localStorage.getItem("toDoList") === null) {
      localStorage.setItem("toDoList", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("toDoList"));
      setToDoList(todoLocal);
    }
  };

  useEffect(() => {
    getLocalTodoList();
  }, []);

  useEffect(() => {
    saveLocalTodoList();
  }, [toDoList]);

  return (
    <div className="App">
      <header>
        <h2>DIMOFINF Todo List ({toDoList.length})</h2>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        toDoList={toDoList}
        setToDoList={setToDoList}
        edit={edit}
        setEdit={setEdit}
      />
      <ToDoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        setInputText={setInputText}
        setEdit={setEdit}
      />
    </div>
  );
}

export default App;
