import { getAllTasksRequest } from "../api/tasks.api";
import { useEffect } from "react";

function TasksPage() {
  useEffect(() => {
    const loadTasks = async () => {
      const response = await getAllTasksRequest();
      console.log(response);
    };
    loadTasks();
  }, []);

  return <h1>Tasks</h1>;
}

export default TasksPage;
