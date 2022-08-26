// import { useState } from "react";


// import { useNavigate } from "react-router-dom";
// import "./header.scss";

// function Header({searchTodo}) {
//   const [valueInput, setValueInput] = useState("");

//   const navigate = useNavigate();
//   const handleSearchTodo = () => {
//   searchTodo({ value: valueInput});
//   navigate(`/search`)
//   }
//   return (
//     <div className="header">
//       <button
//         className="create_task"
//         onClick={() => {
//           navigate(`/add-task`);
//         }}
//       >
//         Create New Task
//       </button>

//       <div className="header-search">
//         <input
//           name="search"
//           value={valueInput}
//           onChange={(e) => setValueInput(e.target.value)}
//           placeholder="Type something to search"
//         />
//         <button onClick={() => handleSearchTodo() } >Search</button>
//       </div>
//     </div>
//   );
// }

// export default Header;

// // ----------------------------------------------------------------

// //  JSON server cach 1


// import { useState } from "react";


// import { useNavigate } from "react-router-dom";
// import "./header.scss";

// function Header({searchTodo}) {
//   const [valueInput, setValueInput] = useState("");

//   const navigate = useNavigate();
//   const handleSearchTodo = () => {
//   searchTodo({ value: valueInput});
//   navigate(`/search`)
//   }
//   return (
//     <div className="header">
//       <button
//         className="create_task"
//         onClick={() => {
//           navigate(`/add-task`);
//         }}
//       >
//         Create New Task
//       </button>

//       <div className="header-search">
//         <input
//           name="search"
//           value={valueInput}
//           onChange={(e) => setValueInput(e.target.value)}
//           placeholder="Type something to search"
//         />
//         <button onClick={() => handleSearchTodo() } >Search</button>
//       </div>
//     </div>
//   );
// }

// export default Header;

// ----------------------------------------------------------------


import { useState } from "react";

// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { search } from "../../slices/todoSlice";
import "./header.scss";

function Header({search}) {
  const [valueInput, setValueInput] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSearchTodo = () => {
  // dispatch(search({ value: valueInput}));
  // navigate(`/search`)
  // }

  const handleSearchTodo = () => {
   search({ value: valueInput});
    navigate(`/search`)
    }

  return (
    <div className="header">
      <button
        className="create_task"
        onClick={() => {
          navigate(`/add-task`);
        }}
      >
        Create New Task
      </button>

      <div className="header-search">
        <input
          name="search"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          placeholder="Type something to search"
        />
        <button onClick={() => handleSearchTodo() } >Search</button>
      </div>
    </div>
  );
}

export default Header;
