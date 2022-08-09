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

  const [search, setSearch] = useState([])

  const [edit, setEdit] = useState({})

  const [isShow, setIsShow] = useState(false)
  
  const addNewTodo = (valueItem) => {

    console.log("title", valueItem.title);
    const dataupdated = listTodo.map(el => {

      if (el.title === valueItem.title) {
        return alert("Trung title");
      } else {
        console.log("el", el);
        return { ...el }
      }
    })

    setListTodo([...dataupdated, valueItem])

    // setListTodo([
    //   ...listTodo,
    //   valueItem
    // ]);
  };

  const changeStatus = (id) => {
    const newListTodo = listTodo.map((item) =>
      item.id === id ? { ...item, status: item.status === "New" ? "Doing" : "Done" } : item
    );
    setListTodo(newListTodo)
  };

  const searchTodo = (valueSearch) => {
    // console.log("valueSearch", valueSearch);
    // console.log('listTodo', listTodo)

    const arr = listTodo?.filter(item =>
      item?.title.includes(valueSearch?.value) ||
      item?.creator.includes(valueSearch?.value) ||
      item?.desscription.includes(valueSearch?.value));

    setSearch(arr)
  };

  const deleteItem = (id) => {
    console.log("id", id);
    const newArr = listTodo.filter(item => {
      return item.id !== id;
    });
    setListTodo([...newArr]);
  };

  const toggle = (value) => {
    console.log("value", value)
    setEdit(value)
    setIsShow(!isShow)
  }

  // console.log("edit", edit);
  // console.log("isShow", isShow);
  // console.log("toggle", toggle);

  const save = (value) => {
    const newListTodo = listTodo.map((item) =>
      item.id === value.id ? { ...item, status: value.status, title: value.title, creator: value.creator, desscription: value.desscription } : item
    );
    setListTodo(newListTodo)
  };

  return (
    <>
      <div className="todo-app">
        <Header searchTodo={searchTodo} />
        <div className="body-app">
          <Sidebar isShow={isShow} edit={edit} save={save} />
          <Main listTodo={listTodo}
            addNewTodo={addNewTodo}
            changeStatus={changeStatus}
            deleteItem={deleteItem}
            search={search}
            toggle={toggle}
          />
        </div>
      </div>
    </>
  );
}

export default App;


