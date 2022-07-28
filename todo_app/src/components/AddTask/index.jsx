import "./addTask.scss";

function AddTask() {
  return (
    <div className="add-task">
      <div className="form">
        <div className="item-input">
          <label htmlFor="">Title :</label>
          <input type="number" id="" placeholder="Place holder " />
        </div>
        <div className="item-input">
          <label htmlFor="">Creator :</label>
          <input type="text" id="" placeholder="Name of Creator" />
        </div>
        <div className="item-input">
          <label htmlFor="r">Desscription : </label>
          <textarea rows="5" placeholder="Description Details"></textarea>
        </div>
      </div>
      <div className="addNew">
        <button>ADD CREATE</button>
      </div>
    </div>
  );
}

export default AddTask;
