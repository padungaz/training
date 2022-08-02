import "./App.scss";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";

function App() {
  return (
    <>
      <div className="todo-app">
        <Header />
        <div className="body-app">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
