// Layouts

import AllTask from "../Navigation/AllTask";
import NewTask from "../Navigation/NewTask";
import DoingTask from "../Navigation/DoingTask";
import DoneTask from "../Navigation/DoneTask";
// import AddTask from "../components/AddTask";
// import TaskList from "../components/TaskList";

// public routes
const publicRoutes = [
  { path: "/", component: AllTask },
  { path: "/new-task", component: NewTask, status: "New" },
  { path: "/doing-task", component: DoingTask, status: "Doing" },
  { path: "/done-task", component: DoneTask, status: "Done" },
];

const privateRoutes = [
  // { path: "/", component: TaskList },
  // { path: "/new-task", component: AddTask },
];

export { publicRoutes, privateRoutes };
