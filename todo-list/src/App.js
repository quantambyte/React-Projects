import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState(false);

  // handleSubmit
  const handleAddTask = () => {
    if (task.length === 0) {
      alert("Empty Tasks cannot be added");
      return;
    }

    setTaskList([...taskList, task]);
    setTask("");

    window.localStorage.setItem("Tasks", taskList);
  };

  // handle delete
  const handleDelete = (index) => {
    let duplicate = [...taskList];

    duplicate.splice(index, 1);

    setTaskList(duplicate);
  };

  // handle edit
  const handleEdit = (index) => {
    let item = taskList[index];
    setTask(item);
    setEdit(true);
  };

  // handle update
  const handleUpdate = () => {
    //
    setEdit(false);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-5">
          <h1>React TODO List</h1>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter Task"
            className="form-control"
          />

          {edit ? (
            <button onClick={handleUpdate} className="btn btn-warning">
              Update Task
            </button>
          ) : (
            <button onClick={handleAddTask} className="btn btn-success">
              Add Task
            </button>
          )}
        </div>
      </div>

      {taskList &&
        taskList.map((task, index) => {
          return (
            <div className="task col-md-5">
              <p>{task}</p>
              <i
                class="far fa-trash-alt"
                onClick={() => handleDelete(index)}
              ></i>
              <i class="fas fa-edit" onClick={() => handleEdit(index)}></i>
            </div>
          );
        })}
    </>
  );
}

export default App;
