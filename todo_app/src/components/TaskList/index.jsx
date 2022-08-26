// import TodoItem from "./TodoItem";
// import { Routes, Route } from "react-router-dom";
// import { publicRoutes } from "../../routes";
// import Pagination from "../Pagination";
// import "./taskList.scss";
// import Search from "../Search";

// function TaskList({
//   listTodo,
//   changeStatus,
//   deleteItem,
//   search,
//   toggle
// }) {
//   const renderItem = (status = null) => {
//     return listTodo
//       .filter((item) => {
//         if (status) return item.status === status;
//         return true;
//       })
//       .map((item, index) => {
//         return (
//           <div key={item?.id}>
//             {/* {console.log('item: ',item)} */}
//             <TodoItem
//               // key={index}
//               item={item}
//               changeStatus={() => changeStatus(item.id)}
//               deleteItem={() => deleteItem(item.id)}
//               toggle={toggle}
//             />
//           </div>
//         );
//       });
//   };

//   const searchTodo = () => {
//     return search.map((item, index) => {
//       return (
//         <TodoItem
//           key={item?.id}
//           item={item}
//           changeStatus={() => changeStatus(item.id)}
//           deleteItem={() => deleteItem(item.id)}
//         />
//       );
//     });
//   };
//   // console.log("listTodo", listTodo);

//   return (
//     <div className="body__task">
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

//           <Route path="/search" element={<Search>{searchTodo()}</Search>} />
//         </Routes>
//       </div>
//       <div className="main__pagination">
//         <Pagination />
//       </div>
//     </div>
//   );
// }

// export default TaskList;

// // ----------------------------------------------------------------

// // // JSON server cach 1

// import TodoItem from "./TodoItem";
// import { Routes, Route } from "react-router-dom";
// import { publicRoutes } from "../../routes";
// import Pagination from "../Pagination";
// import "./taskList.scss";
// import Search from "../Search";

// function TaskList({
//   listTodo,
//   changeStatus,
//   deleteItem,
//   search,
//   toggle
// }) {
//   const renderItem = (status = null) => {
//     return listTodo
//       .filter((item) => {
//         if (status) return item.status === status;
//         return true;
//       })
//       .map((item, index) => {
//         return (
//           <div key={item?.id}>
//             {/* {console.log('item: ',item)} */}
//             <TodoItem
//               // key={index}
//               item={item}
//               changeStatus={() => changeStatus(item)}
//               deleteItem={() => deleteItem(item)}
//               toggle={toggle}
//             />
//           </div>
//         );
//       });
//   };

//   const searchTodo = () => {
//     return search.map((item, index) => {
//       return (
//         <TodoItem
//           key={item?.id}
//           item={item}
//           changeStatus={() => changeStatus(item)}
//           deleteItem={() => deleteItem(item)}
//           toggle={toggle}
//         />
//       );
//     });
//   };
//   // console.log("listTodo", listTodo);

//   return (
//     <div className="body__task">
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

//           <Route path="/search" element={<Search>{searchTodo()}</Search>} />
//         </Routes>
//       </div>
//       <div className="main__pagination">
//         <Pagination />
//       </div>
//     </div>
//   );
// }

// export default TaskList;

// ----------------------------------------------------------------

// // mobx

import { useEffect } from "react";

import TodoItem from "./TodoItem";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../routes";
import Pagination from "../Pagination";
// import Search from "../Search";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, fetchTodos, changeStatus } from "../../slices/todoSlice";
import "./taskList.scss";

function TaskList({ toggle }) {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleChangeStatus = (item) => {
    dispatch(
      changeStatus({
        ...item,
        status: item.status === "New" ? "Doing" : "Done",
      })
    );
  };

  const renderItem = (status = null) => {
    return todo.listTodo
      .filter((item) => {
        if (status) return item.status === status;
        return true;
      })
      .map((item, index) => {
        return (
          <div key={item?.id}>
            <TodoItem
              item={item}
              changeStatus={() => handleChangeStatus(item)}
              deleteItem={() => dispatch(deleteItem(item))}
              toggle={toggle}
            />
          </div>
        );
      });
  };

  // const searchTodo = () => {
  //   return search.map((item, index) => {
  //     return (
  //       <TodoItem
  //         key={item?.id}
  //         item={item}
  //         changeStatus={() => handleChangeStatus(item)}
  //         deleteItem={() => dispatch(deleteItem(item))}
  //         toggle={toggle}
  //       />
  //     );
  //   });
  // };

  return (
    <div className="body__task">
      <div className="task-list">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Page>{renderItem(route.status)}</Page>}
              />
            );
          })}

          {/* <Route path="/search" element={<Search>{searchTodo()}</Search>} /> */}
        </Routes>
      </div>
      <div className="main__pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default TaskList;
