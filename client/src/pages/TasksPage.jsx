// import { getAllTasksRequest } from "../api/tasks.api";
// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { useLocalStorage } from "../hooks/useLocalStorage";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   async function loadTasks() {
  //     const response = await getAllTasksRequest();
  //     setTasks(response.data);
  //   }
  //   loadTasks();
  // }, []);
  const response = useLocalStorage("TASKER");

  useEffect(() => {
    setTasks(response);
  }, []);
  return (
    <div>
      <h1>Tasks</h1>
      {tasks?.map((task, index) => {
        //The key must to be {key.id}
        return <TaskCard key={index} id={index} task={task} />;
      })}
    </div>
  );
}

export default TasksPage;
