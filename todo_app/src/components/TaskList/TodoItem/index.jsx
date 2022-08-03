// import { useState } from "react";

import "./todoItem.scss";

function TodoItem({
  /* id, */ title,
  status,
  changeStatus,
  creator,
  desscription,
  deleteItem,
}) {
  const chooseStyleStatus = () => {
    switch (status) {
      case "New":
        return {
          color: "red",
          fontStyle: "italic",
        };
      case "Doing":
        return {
          color: "blue",
          fontWeight: "bold",
        };
      case "Done":
        return {
          color: "green",
          textDecoration: "line-through",
        };
      default:
        return {
          color: "black",
        };
    }
  };

  // const [status, setStatus] = useState("New");

  return (
    <div className="todoItem">
      {/* id: {id} */}
      <b className="todoItem__title">Title: {title} </b>
      <p className="todoItem__creator">Creator: {creator} </p>
      <b style={chooseStyleStatus()} className="todoItem__status">
        Status: {status}
      </b>
      <hr></hr>
      <div className="todoItem__desscription">
        <b>Desscription:</b>
        <p>{desscription}</p>
      </div>
      <button
        className="status__btn"
        style={chooseStyleStatus()}
        onClick={changeStatus}
      >
        {status}
      </button>
      {/* <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value={"New"}>New</option>
        <option value={"Doing"}>Doing</option>
        <option value={"Done"}>Done</option>
      </select> */}

      <span className="btn--delete" onClick={deleteItem}>
        &#10005;
      </span>
    </div>
  );
}

export default TodoItem;
