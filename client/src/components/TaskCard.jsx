/* eslint-disable react/prop-types */
// import { deleteTaskRequest } from "../api/tasks.api";
import { handleLocalStorage } from "../hooks/useLocalStorage";
function TaskCard({ tasks, task, id, setTasks }) {
  function handleDelete(id) {
    // deleteTaskRequest(id);
    //action, id, tasks, setTasks
    handleLocalStorage("delete", id, tasks, setTasks);
  }
  function handleToggle() {
    handleLocalStorage("toggle", id, tasks, setTasks);
    // console.log(task.done);
  }
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <span onClick={() => handleToggle(task.done)}>
        {task.done === 1 ? "✅" : "❌"}
      </span>
      <i>{task.createdAt}</i>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskCard;
