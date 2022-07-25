import { useState } from "react";

import "./App.scss";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Sidebar from "./layouts/Sidebar/Sidebar";
import AddTask from "./components/AddTask/Addtask";
import TaskList from "./layouts/TaskList/TaskList";

function App() {
  const [openAdd, setOpenAdd] = useState(false);
  const openAddTask = (openAdd) => {
    setOpenAdd(!openAdd);
    return openAdd;
  };
  return (
    <>
      <div className="todo-app">
        <Header openAddTask={openAddTask} />
        <div className="body-app">
          <Sidebar />
          <div className="body-tasks">
            {openAdd ? (
              <AddTask />
            ) : (
              <div>
                <TaskList />
                <Footer />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
