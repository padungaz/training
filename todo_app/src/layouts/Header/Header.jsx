
import './header.scss'

function Header(openAddTask) {
  return (
    <div className="header">
      <button className="create_task" onClick={() => openAddTask(false)}>Create New Task</button>

      <div className="header-search">
          <input placeholder="Type something to search" />
          <button>Search</button>
        </div>
      
    </div>
  );
}

export default Header;
