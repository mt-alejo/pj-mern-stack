/* eslint-disable react/prop-types */
// import { deleteTaskRequest } from "../api/tasks.api";
import { useContext } from "react";
import { handleLocalStorage } from "../hooks/useLocalStorage";
import { TaskContext } from "../context/TaskContext";
function TaskCard({ task }) {
  const { tasks, setTasks } = useContext(TaskContext);

  function handleDelete(id) {
    // deleteTaskRequest(id);
    handleLocalStorage("delete", id, tasks, setTasks);
  }
  function handleToggle(id) {
    handleLocalStorage("toggle", id, tasks, setTasks);
  }
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <span onClick={() => handleToggle(task.id)}>
        {task.done === 1 ? "✅" : "❌"}
      </span>
      <i>{task.createdAt}</i>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskCard;
