import "./sidebar.scss";
import { useNavigate } from "react-router-dom";



function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        All Task
      </button>
      <button
        onClick={() => {
          navigate(`/new-task`);
        }}
      >
        New Task
      </button>
      <button
        onClick={() => {
          navigate(`/doing-task`);
        }}
      >
        Doing Task
      </button>
      <button
        onClick={() => {
          navigate(`/done-task`);
        }}
      >
        Done Task
      </button>
    </div>
  );
}

export default Sidebar;
