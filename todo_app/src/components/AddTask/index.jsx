import { useState } from "react";
import "./addTask.scss";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function AddTask({ addNewTodo }) {
  const [formValue, setFormValue] = useState({
    title: "",
    creator: "",
    desscription: "",
    status: "New",
  });
  const history = useNavigate();

  const handleAddNewTodo = (e) => {
    addNewTodo({
      id: uuidv4(),
      title: formValue.title,
      creator: formValue.creator,
      desscription: formValue.desscription,
      status: formValue.status,
    });
    history('/');
    e.preventDefault();
  };

  const handleForm = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-task">
      <form>
        <div className="form">
          <div className="item-input">
            <label htmlFor="">Title :</label>
            <input
              name="title"
              value={formValue.title}
              onChange={handleForm}
              type="text"
              placeholder="Place holder "
            />
          </div>
          <div className="item-input">
            <label htmlFor="">Creator :</label>
            <input
              name="creator"
              value={formValue.creator}
              onChange={handleForm}
              type="text"
              placeholder="Name of Creator"
            />
          </div>
          <div className="item-input">
            <label htmlFor="r">Desscription : </label>
            <textarea
              name="desscription"
              value={formValue.desscription}
              onChange={handleForm}
              // rows="10"
              placeholder="Description Details"
            ></textarea>
          </div>
          <select name="status" value={formValue.status} onChange={handleForm}>
            <option value="New">New</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="addNew">
          <button onClick={(e) => handleAddNewTodo(e)} type="submit">
            ADD CREATE
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
