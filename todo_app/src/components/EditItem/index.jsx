import { useState } from "react";

import "./editItem.scss";

function EditItem({item, save} ) {
  // console.log("item", item);

  const [formValue, setFormValue] = useState({
    title: item.title,
    creator: item.creator,
    desscription: item.desscription,
    status: item.status,
    id: item.id,
  });
  

  const handleAddNewTodo = (e) => {
    save({
      id: formValue.id,
      title: formValue.title,
      creator: formValue.creator,
      desscription: formValue.desscription,
      status: formValue.status,
    });
    e.preventDefault();
  };

  const handleForm = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="edit-item">
      <h1>edit item</h1>
       <form>
        <div className="form">
          <div className="item-input">
            <label htmlFor="">Title :</label>
            <input
              name="title"
              value={formValue.title}
              onChange={handleForm}
              type="text"
            />
          </div>
          <div className="item-input">
            <label htmlFor="">Creator :</label>
            <input
              name="creator"
              value={formValue.creator}
              onChange={handleForm}
              type="text"
            />
          </div>
          <div className="item-input">
            <label htmlFor="r">Desscription : </label>
            <textarea
              name="desscription"
              value={formValue.desscription}
              onChange={handleForm}
              // rows="10"
            ></textarea>
          </div>
          <select name="status" value={formValue.status} onChange={handleForm}>
            <option value="New">New</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="save">  
          <button className="btn--save"onClick={(e) => handleAddNewTodo(e)} type="submit">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditItem;
