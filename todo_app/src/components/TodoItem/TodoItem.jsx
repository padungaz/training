import "./todoItem.scss";

function TodoItem({ title, status, changeStatus, creator, desscription }) {
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


  return (
    <div className="todoItem">
      <b className="todoItem__title">Title: {title} </b>
      <p className="todoItem__creator">Creator: {creator} </p>
      <b style={chooseStyleStatus()} className="todoItem__status">Status: {status} </b>
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
    </div>
  );
}

export default TodoItem;
