import { useState } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";

import "./taskList.scss";

const todoArray = [
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription:
      "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription:
      "This is a task.  ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription:
      "This is a task.",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription:
      "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription:
      "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription:
      "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription:
      "This is a task.  ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription:
      "This is a task. ",
  },
  {
    title: "Task 1",
    creator: "creator",
    status: "New",
    desscription:
      "This is a task. ",
  }
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

  const renderItem = () => {
    return todoArray.map((item, index) => {
      return (
        <TodoItem
          key={index}
          {...item}
          changeStatus={() => changeStatus(index)}
        />
      );
    });
  };
  return <div className="task-list"> {renderItem()}</div>;
}

export default TaskList;
