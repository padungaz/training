// import { useState, useEffect } from "react";

// import "./App.scss";
// import Header from "./layouts/Header";
// import Sidebar from "./layouts/Sidebar";
// import Main from "./layouts/Main";


// function App() {
//   const [listTodo, setListTodo] = useState(
//     JSON.parse(localStorage.getItem("datas")) || []
//   );

//   useEffect(() => {
//     localStorage.setItem("datas", JSON.stringify(listTodo));
//   }, [listTodo]);


//   const [search, setSearch] = useState([])

//   const [edit, setEdit] = useState({})

//   const [isShow, setIsShow] = useState(false)

//   // console.log("re-render app");

//   const addNewTodo = (valueItem) => {

//     console.log("title", valueItem.title);
//     const arr = listTodo.map(el => {

//       if (el.title === valueItem.title) {
//         return alert("Trung title");
//       } else {
//         // console.log("el", el);
//         return { ...el }
//       }
//     })
//     setListTodo([...arr, valueItem])
//   };

//   const changeStatus = (id) => {
//     const newListTodo = listTodo.map((item) =>
//       item.id === id ? { ...item, status: item.status === "New" ? "Doing" : "Done" } : item
//     );
//     setListTodo(newListTodo)
//   };

//   const searchTodo = (valueSearch) => {
//     // console.log("valueSearch", valueSearch);
//     // console.log('listTodo', listTodo)

//     const arr = listTodo?.filter(item =>
//       item?.title.toLowerCase().trim().includes(valueSearch?.value.toLowerCase().trim()) ||
//       item?.creator.toLowerCase().trim().includes(valueSearch?.value.toLowerCase().trim()) ||
//       item?.desscription.toLowerCase().trim().includes(valueSearch?.value.toLowerCase().trim()));

//     setSearch(arr)
//   };

//   const deleteItem = (id) => {
//     console.log("id", id);
//     const newArr = listTodo.filter(item => {
//       return item.id !== id;
//     });
//     setListTodo([...newArr]);
//   };

// // const deleteItem = (id) => {
// //   console.log("id", id);
// //   const arrTodo = listTodo;
// //   arrTodo.splice(id, 1);
// //   setListTodo([...arrTodo]);
// // };

//   const toggle = (value) => {
//     console.log("value", value)
//     setEdit(value)
//     setIsShow(!isShow)
//   }

//   // console.log("edit", edit);
//   // console.log("isShow", isShow);

//   const saveItem = (value) => {
//     const newListTodo = listTodo.map((item) =>
//       item.id === value.id ? {
//         ...item, status: value.status, title: value.title, creator: value.creator, desscription: value.desscription
//       } : item
//     );
//     setListTodo(newListTodo)
//   };

//   return (
//     <>
//       <div className="todo-app">
//         <Header searchTodo={searchTodo} />
//         <div className="body-app">
//           <Sidebar isShow={isShow} edit={edit} saveItem={saveItem} />
//           <Main listTodo={listTodo}
//             addNewTodo={addNewTodo}
//             changeStatus={changeStatus}
//             deleteItem={deleteItem}
//             search={search}
//             toggle={toggle}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


// ------------------------------------------------------------------------

// JSON server cach 1


import { useState, useEffect } from "react";

import "./App.scss";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";
import { URL } from "./constants";


function App() {
  const [listTodo, setListTodo] = useState([]);
  const [search, setSearch] = useState([])
  const [edit, setEdit] = useState({})
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    fechData();
  }, []);

  const fechData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setListTodo(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const addNewTodo = (valueItem) => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valueItem),
    })
      .then((response) => {
        response.json();
        fechData();
      })
      .catch((error) => console.log(error));
  };

  const changeStatus = (item) => {
    fetch(`${URL}/${item.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ ...item, status: item.status === "New" ? "Doing" : "Done" }),
    })
      .then((response) => {
        response.json();
        fechData();
      })
      .catch((error) => console.log(error));
  };

  const deleteItem = (item) => {
    fetch(`${URL}/${item.id}`, {
      method: "DELETE"
    })
      .then((response) => {
        response.json();
        fechData();
      })
      .catch((error) => console.log(error));
  };

  const toggle = (value) => {
    console.log("value", value)
    setEdit(value)
    setIsShow(!isShow)
  }

  // console.log("edit", edit);
  // console.log("isShow", isShow);

  const saveItem = (value) => {
    fetch(`${URL}/${value.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ status: value.status, title: value.title, creator: value.creator, desscription: value.desscription }),
    })
      .then((response) => {
        response.json();
        fechData();
      })
      .catch((error) => console.log(error));
  };

  const searchTodo = (valueSearch) => {
    // console.log("valueSearch", valueSearch);
    // console.log('listTodo', listTodo)

    const arr = listTodo?.filter(item =>
      item?.title.toLowerCase().trim().includes(valueSearch?.value.toLowerCase().trim()) ||
      item?.creator.toLowerCase().trim().includes(valueSearch?.value.toLowerCase().trim()) ||
      item?.desscription.toLowerCase().trim().includes(valueSearch?.value.toLowerCase().trim()));

    setSearch(arr)
  };


  return (
    <>
      <div className="todo-app">
        <Header searchTodo={searchTodo} />
        <div className="body-app">
          <Sidebar isShow={isShow} edit={edit} saveItem={saveItem} />
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


