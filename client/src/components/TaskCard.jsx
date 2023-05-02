/* eslint-disable react/prop-types */
import { deleteTaskRequest } from "../api/tasks.api";
function TaskCard({ task }) {
  function handleDelete(id) {
    deleteTaskRequest(id);
  }
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "✅" : "❌"}</span>
      <i>{task.createdAt}</i>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskCard;
