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

// ----------------------------------------------------------------

// // JSON server cach 1


import TodoItem from "./TodoItem";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../routes";
import Pagination from "../Pagination";
import "./taskList.scss";
import Search from "../Search";

function TaskList({
  listTodo,
  changeStatus,
  deleteItem,
  search,
  toggle
}) {
  const renderItem = (status = null) => {
    return listTodo
      .filter((item) => {
        if (status) return item.status === status;
        return true;
      })
      .map((item, index) => {
        return (
          <div key={item?.id}>
            {/* {console.log('item: ',item)} */}
            <TodoItem
              // key={index}
              item={item}
              changeStatus={() => changeStatus(item)}
              deleteItem={() => deleteItem(item)}
              toggle={toggle}
            />
          </div>
        );
      });
  };

  const searchTodo = () => {
    return search.map((item, index) => {
      return (
        <TodoItem
          key={item?.id}
          item={item}
          changeStatus={() => changeStatus(item)}
          deleteItem={() => deleteItem(item)}
          toggle={toggle}
        />
      );
    });
  };
  // console.log("listTodo", listTodo);

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

          <Route path="/search" element={<Search>{searchTodo()}</Search>} />
        </Routes>
      </div>
      <div className="main__pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default TaskList;
