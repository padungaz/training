// Layouts

import AllTask from "../pages/AllTask";
import NewTask from "../pages/NewTask";
import DoingTask from "../pages/DoingTask";
import DoneTask from "../pages/DoneTask";
import AddTask from "../components/AddTask";

// public routes
const publicRoutes = [
  { path: "/", component: AllTask },
  { path: "/new-task", component: NewTask, status: "New" },
  { path: "/doing-task", component: DoingTask, status: "Doing" },
  { path: "/done-task", component: DoneTask, status: "Done" },
];

const privateRoutes = [{ path: "/new-task", component: AddTask }];

export { publicRoutes, privateRoutes };
