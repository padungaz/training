// import { useState } from "react";

import "./sidebar.scss";
import { useNavigate } from "react-router-dom";
import EditItem from "../../components/EditItem";

function Sidebar({isShow, edit, save}) {

  const navigate = useNavigate();

  // const [isShow, setIsShow] = useState(false)

  // const toggle = () => setIsShow(!isShow)

  return (
    <div className="sidebar">
      <div className="sidebar--btn">
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

        {/* <button className="edit"
        onClick={toggle}
        >
         edit
        </button> */}
      </div>

      <div className="edit">
      {isShow ? <EditItem item={edit.item} save={save}/> : undefined}
      </div>
    </div>
  );
}

export default Sidebar;
