// // import { useState } from "react";

// import "./todoItem.scss";

// function TodoItem({
//   /* 
//   title,
//   status,
//   creator,
//   desscription, */
//   item,
//   changeStatus,
//   deleteItem,
//   toggle
// }) {
//   const chooseStyleStatus = () => {
//     switch (item.status) {
//       case "New":
//         return {
//           color: "red",
//           fontStyle: "italic",
//         };
//       case "Doing":
//         return {
//           color: "blue",
//           fontWeight: "bold",
//         };
//       case "Done":
//         return {
//           color: "green",
//           textDecoration: "line-through",
//         };
//       default:
//         return {
//           color: "black",
//         };
//     }
//   };

//   const handleChangeStatus = (e) => {
//     changeStatus();
//     e.stopPropagation();
//   };

//   const handleDelete = (e) => {
//     deleteItem()
//     e.stopPropagation();
//   }

//   // const [status, setStatus] = useState("New");

//   return (
//     <div className="todoItem" onClick={() => toggle({ item })}>
//       {/* id: {item.id} */}
//       <b className="todoItem__title">Title: {item.title} </b>
//       <p className="todoItem__creator">Creator: {item.creator} </p>
//       <b style={chooseStyleStatus()} className="todoItem__status">
//         Status: {item.status}
//       </b>
//       <hr></hr>
//       <div className="todoItem__desscription">
//         <b>Desscription:</b>
//         <p>{item.desscription}</p>
//       </div>
//       <button
//         className="status__btn"
//         style={chooseStyleStatus()}
//         // onClick={changeStatus}
//         onClick={(e) => handleChangeStatus(e)}
//       >
//         {item.status}
//       </button>
//       {/* <select
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//       >
//         <option value={"New"}>New</option>
//         <option value={"Doing"}>Doing</option>
//         <option value={"Done"}>Done</option>
//       </select> */}

//       <span className="btn--delete"  onClick={(e) => handleDelete(e)}/* onClick={deleteItem} */>
//         &#10005;
//       </span>
//       {/* <button onClick={() =>toggle({item})}>                  
//        Add  
//       </button> */}
//     </div>
//   );
// }

// export default TodoItem;

// // ----------------------------------------------------------------

// // // JSON server cach 1


// // import { useState } from "react";

// import "./todoItem.scss";

// function TodoItem({
//   /* 
//   title,
//   status,
//   creator,
//   desscription, */
//   item,
//   changeStatus,
//   deleteItem,
//   toggle
// }) {
//   const chooseStyleStatus = () => {
//     switch (item.status) {
//       case "New":
//         return {
//           color: "red",
//           fontStyle: "italic",
//         };
//       case "Doing":
//         return {
//           color: "blue",
//           fontWeight: "bold",
//         };
//       case "Done":
//         return {
//           color: "green",
//           textDecoration: "line-through",
//         };
//       default:
//         return {
//           color: "black",
//         };
//     }
//   };

//   const handleChangeStatus = (e) => {
//     changeStatus();
//     e.stopPropagation();
//   };

//   const handleDelete = (e) => {
//     deleteItem()
//     e.stopPropagation();
//   }

//   // const [status, setStatus] = useState("New");

//   return (
//     <div className="todoItem" onClick={() => toggle({ item })}>
//       {/* id: {item.id} */}
//       <b className="todoItem__title">Title: {item.title} </b>
//       <p className="todoItem__creator">Creator: {item.creator} </p>
//       <b style={chooseStyleStatus()} className="todoItem__status">
//         Status: {item.status}
//       </b>
//       <hr></hr>
//       <div className="todoItem__desscription">
//         <b>Desscription:</b>
//         <p>{item.desscription}</p>
//       </div>
//       <button
//         className="status__btn"
//         style={chooseStyleStatus()}
//         // onClick={changeStatus}
//         onClick={(e) => handleChangeStatus(e)}
//       >
//         {item.status}
//       </button>

      
//       {/* <select
//         onChange={(e) => handleChangeStatus(e)}
//       >
//         <option value={"New"}>New</option>
//         <option value={"Doing"}>Doing</option>
//         <option value={"Done"}>Done</option>
//       </select> */}

//       <span className="btn--delete"  onClick={(e) => handleDelete(e)}/* onClick={deleteItem} */>
//         &#10005;
//       </span>
//       {/* <button onClick={() =>toggle({item})}>                  
//        Add  
//       </button> */}
//     </div>
//   );
// }

// export default TodoItem;


// ----------------------------------------------------------------

// mobx


// import { useState } from "react";

import "./todoItem.scss";

function TodoItem({
  /* 
  title,
  status,
  creator,
  desscription, */
  item,
  changeStatus,
  deleteItem,
  toggle
}) {
  const chooseStyleStatus = () => {
    switch (item.status) {
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

  const handleChangeStatus = (e) => {
    changeStatus();
    e.stopPropagation();
  };

  const handleDelete = (e) => {
    deleteItem()
    e.stopPropagation();
  }

  // const [status, setStatus] = useState("New");

  return (
    <div className="todoItem" onClick={() => toggle({ item })}>
      {/* id: {item.id} */}
      <b className="todoItem__title">Title: {item.title} </b>
      <p className="todoItem__creator">Creator: {item.creator} </p>
      <b style={chooseStyleStatus()} className="todoItem__status">
        Status: {item.status}
      </b>
      <hr></hr>
      <div className="todoItem__desscription">
        <b>Desscription:</b>
        <p>{item.desscription}</p>
      </div>
      <button
        className="status__btn"
        style={chooseStyleStatus()}
        // onClick={changeStatus}
        onClick={(e) => handleChangeStatus(e)}
      >
        {item.status}
      </button>

      
      {/* <select
        onChange={(e) => handleChangeStatus(e)}
      >
        <option value={"New"}>New</option>
        <option value={"Doing"}>Doing</option>
        <option value={"Done"}>Done</option>
      </select> */}

      <span className="btn--delete"  onClick={(e) => handleDelete(e)}/* onClick={deleteItem} */>
        &#10005;
      </span>
      {/* <button onClick={() =>toggle({item})}>                  
       Add  
      </button> */}
    </div>
  );
}

export default TodoItem;
