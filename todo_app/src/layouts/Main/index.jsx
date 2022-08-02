// import { useState } from "react";

// import TodoItem from "../../components/TaskList/TodoItem";
// import { Routes, Route } from "react-router-dom";
// import { publicRoutes } from "../../routes";
// import Pagination from "../../components/Pagination";

// import "./main.scss";

// const todoArray = [
//   {
//     id: 1,
//     title: "Task 1",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task",
//   },
//   {
//     id: 2,
//     title: "Task 2",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task.  ",
//   },
//   {
//     id: 3,
//     title: "Task 3",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task.",
//   },
//   {
//     id: 4,
//     title: "Task 4",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task. ",
//   },
//   {
//     id: 5,
//     title: "Task 5",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task. ",
//   },
//   {
//     id: 6,
//     title: "Task 6",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task. ",
//   },
//   {
//     id: 7,
//     title: "Task 7",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task.  ",
//   },
//   {
//     id: 8,
//     title: "Task 8",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task. ",
//   },
//   {
//     id: 9,
//     title: "Task 9",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task. ",
//   },
//   {
//     id: 10,
//     title: "Task 10",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task. ",
//   },
//   {
//     id: 11,
//     title: "Task 11",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task. ",
//   },
//   {
//     id: 12,
//     title: "Task 12",
//     creator: "creator",
//     status: "New",
//     desscription: "This is a task. ",
//   },
// ];

// function Main() {
//   const [listTodo, setListTodo] = useState(todoArray);

//   // const changeStatus = (value) => {
//   //   console.log("indx", value);
//   //   const arr = listTodo?.map((item) =>
//   //     item?.id === value?.id ? { ...item, status: "Doing" } : item
//   //   );
//   //   setListTodo(arr);
//   // };

//   // // const changeStatus = (value) => {
//   // //   console.log("indx", value);
//   // //   const arr = listTodo?.map((item) => {
//   // //     return (
//   // //       {...item}
//   // //       // item.status === "New" ? "Doing" : "Done"
//   // //     )
//   // //     });
//   // //   setListTodo(arr);
//   // // };

//   // const renderItem = (status = null) => {
//   //   return listTodo
//   //     .filter((item) => {
//   //       if (status) return item.status === status;
//   //       return true;
//   //     })
//   //     .map((item, index) => {
//   //       return (
//   //         <TodoItem
//   //           key={item?.id}
//   //           {...item}
//   //           changeStatus={() => changeStatus(item)}
//   //         />
//   //       );
//   //     });
//   // };

//   const changeStatus = (indexItem) => {
//     setListTodo([...listTodo]);
//     const arrTodo = listTodo;

//     arrTodo.splice(indexItem, 1, {
//       title: listTodo[indexItem].title,
//       creator: listTodo[indexItem].creator,
//       desscription: listTodo[indexItem].desscription,
//       status: listTodo[indexItem].status === "New" ? "Doing" : "Done",
//     });
//     setListTodo([...arrTodo]);
//   };

//   // const changeStatus = (indexItem) => {
//   //   const arr = listTodo?.map((item, index) => {
//   //    return (
//   //     key={index}
//   //     {...item}
//   //    )
//   //   });
//   //   setListTodo([...arrTodo]);
//   // };

//   const renderItem = (status = null) => {
//     return listTodo
//       .filter((item) => {
//         if (status) return item.status === status;
//         return true;
//       })
//       .map((item, index) => {
//         return (
//           <TodoItem
//             key={index}
//             {...item}
//             changeStatus={() => changeStatus(index)}
//           />
//         );
//       });
//   };
//   return (
//     <div className="main">
//       <div className="task-list">

//         <Routes>
//           {publicRoutes.map((route, index) => {
//             const Page = route.component;
//             return (
//               <Route
//                 key={index}
//                 path={route.path}
//                 element={<Page>{renderItem(route.status)}</Page>}
//               />
//             );
//           })}
//         </Routes>
//       </div>
//       <div className="main__pagination">
//         <Pagination />
//       </div>
//     </div>
//   );
// }

// export default Main;

// -------------------------------------------------------------

import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import TaskList from "../../components/TaskList";
import AddTask from "../../components/AddTask";

import "./main.scss";

const todoArray = [
  {
    id: 1,
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task",
  },
  {
    id: 2,
    title: "Task 2",
    creator: "creator",
    status: "New",
    desscription: "This is a task.  ",
  },
  {
    id: 3,
    title: "Task 3",
    creator: "creator",
    status: "New",
    desscription: "This is a task.",
  },
  {
    id: 4,
    title: "Task 4",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    id: 5,
    title: "Task 5",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    id: 6,
    title: "Task 6",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    id: 7,
    title: "Task 7",
    creator: "creator",
    status: "New",
    desscription: "This is a task.  ",
  },
  {
    id: 8,
    title: "Task 8",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    id: 9,
    title: "Task 9",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    id: 10,
    title: "Task 10",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    id: 11,
    title: "Task 11",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    id: 12,
    title: "Task 12",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
];

function Main() {

// const todoArray = JSON.parse{ localStorage.}

  const [listTodo, setListTodo] = useState(todoArray);

  const addNewTodo = (valueItem) => {
    setListTodo([
      ...listTodo,
      {
        title: valueItem.title,
        creator: valueItem.creator,
        desscription: valueItem.desscription,
        status: valueItem.status,
      },
    ]);
  };

  const changeStatus = (/* id */ indexItem) => {

    // console.log('id: ', id);
    setListTodo([...listTodo]);
    const arrTodo = listTodo;

    // let indexItem = arrTodo.findIndex(item => item.id === id);

    if(indexItem !== -1){
      arrTodo.splice(indexItem, 1, {
        title: listTodo[indexItem].title,
        creator: listTodo[indexItem].creator,
        desscription: listTodo[indexItem].desscription,
        status: listTodo[indexItem].status === "New" ? "Doing" : "Done",
      });
      setListTodo([...arrTodo]);
    }

   
  };

  return (
    <div className="main">
      <Routes>
        <Route
          path="*"
          element={
            <TaskList todoArray={listTodo} changeStatus={changeStatus} />
          }
        />
        <Route path="/add-task" element={<AddTask addNewTodo={addNewTodo} />} />
      </Routes>
    </div>
  );
}

export default Main;
