// import { deleteTaskRequest } from "../api/tasks.api";
import { deleteLocalStorage } from "../hooks/useLocalStorage";
function TaskCard({ task, id }) {
  function handleDelete(id) {
    // deleteTaskRequest(id);
    deleteLocalStorage(id);
  }
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "✅" : "❌"}</span>
      <i>{task.createdAt}</i>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskCard;
