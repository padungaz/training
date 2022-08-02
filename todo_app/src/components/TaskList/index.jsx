import TodoItem from "./TodoItem";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../routes"
import Pagination from "../Pagination";
import "./taskList.scss";

function TaskList({ todoArray, changeStatus }) {
  const renderItem = (status = null) => {
    return todoArray
      .filter((item) => {
        if (status) return item.status === status;
        return true;
      })
      .map((item, index) => {
        return (
         <>
         {console.log('item: ',item)}
          <TodoItem
            key={index}
            {...item}
            changeStatus={() => changeStatus(/* item.id */index)}
          />
         </>
        );
      });
  };
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
        </Routes>
      </div>
      <div className="main__pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default TaskList;
