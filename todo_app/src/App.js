import { useState, useEffect } from "react";

import "./App.scss";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";

function App() {
  const [listTodo, setListTodo] = useState(
    JSON.parse(localStorage.getItem("datas")) || []
  );

  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(listTodo));
  }, [listTodo]);

  const addNewTodo = (valueItem) => {


    setListTodo([
      ...listTodo,
      valueItem
    ]);
  };

  const changeStatus = (id) => {
    const dataupdated = listTodo.map((item) =>
      item.id === id ? { ...item, status: item.status === "New" ? "Doing" : "Done" } : item
    );
    setListTodo(dataupdated)
  };


  const searchTodo = (valueSearch) => {

  };

  const deleteItem = (indexItem) => {
    const arrTodo = listTodo;
    arrTodo.splice(indexItem, 1);
    setListTodo([...arrTodo]);
  };


  return (
    <>
      <div className="todo-app">
        <Header searchTodo={searchTodo} />
        <div className="body-app">
          <Sidebar />
          <Main listTodo={listTodo} addNewTodo={addNewTodo} changeStatus={changeStatus} deleteItem={deleteItem} />
        </div>
      </div>
    </>
  );
}

export default App;
