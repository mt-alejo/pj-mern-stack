import { getAllTasksRequest } from "../api/tasks.api";
import { useEffect, useState } from "react";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await getAllTasksRequest();
      setTasks(response.data);
    }
    loadTasks();
  }, []);

  tasks.map((task) => {
    console.log(task.title);
  });

  return (
    <div>
      <h1>Taks</h1>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <span>{task.done === 1 ? "✅" : "❌"}</span>
            <i>{task.createdAt}</i>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default TasksPage;
