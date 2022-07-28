import { useState } from "react";

import TodoItem from "../../components/TodoItem"
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../routes";

import "./taskList.scss";

const todoArray = [
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription:
      "This is a task.This is a task.This is a task.This is a task.This is a task.This is a task.This is a task.This is a task.This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task.  ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task.",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task.  ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription: "This is a task. ",
  },
];

function TaskList() {

  const [listTodo, setListTodo] = useState(todoArray);

  const changeStatus = (indexItem) => {
    setListTodo([...listTodo]);

    listTodo.splice(indexItem, 1, {
      title: listTodo[indexItem].title,
      creator: listTodo[indexItem].creator,
      desscription: listTodo[indexItem].desscription,
      status: listTodo[indexItem].status === "New" ? "Doing" : "Done",
    });
    setListTodo([...listTodo]);
  };

  

  const renderItem = (status = null) => {


    return listTodo
      .filter((item) => {
        if (status) return item.status === status;
        return true;
      })
      .map((item, index) => {
        return (
          <TodoItem
            key={index}
            {...item}
            changeStatus={() => changeStatus(index)}
          />
        );
      });
  };
  return (
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
  );
}

export default TaskList;
