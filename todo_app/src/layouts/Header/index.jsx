import "./header.scss";
// import { useNavigate } from "react-router-dom";

function Header(openAddTask) {
  // const navigate = useNavigate();

  return (
    <div className="header">
      {/* <button
        className="create_task"
        onClick={() => {
          navigate(`/add-task`);
        }}
      >
        Create New Task
      </button> */}

      {/* <button className="create_task" onClick={openAddTask}>
        Create New Task
      </button> */}

      <button className="create_task">
        Create New Task
      </button>

      <div className="header-search">
        <input placeholder="Type something to search" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;
