// import { useState } from "react";

import "./App.scss";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Sidebar from "./layouts/Sidebar";
// import AddTask from "./components/AddTask";
import TaskList from "./layouts/TaskList";

function App() {
  // const [openAdd, setOpenAdd] = useState(false);
  // const openAddTask = (openAdd) => {
  //   return setOpenAdd(!openAdd);
  // };

  return (
    <>
      <div className="todo-app">
        {/* <Header openAddTask = {openAddTask} /> */}
        {/* <Header openAddTask={() => setOpenAdd(!openAdd)}/> */}
        <Header />
        <div className="body-app">
          <Sidebar />
          <div className="body-tasks">
            {/* {openAdd ? (
              <AddTask />
            ) : (
              <div>
                <TaskList />
                <Footer />
              </div>
            )} */}
            <div>
              <TaskList />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
