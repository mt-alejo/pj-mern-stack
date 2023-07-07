// import { getAllTasksRequest } from "../api/tasks.api";
// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

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
  //Add the key value property:e
  tasks.map((task) => (task.id = uuidv4()));
  return (
    <div>
      <h1>Tasks</h1>
      {tasks?.map((task) => {
        //The key must to be {key.id}
        return (
          <TaskCard
            key={task.id}
            id={task.id}
            tasks={tasks}
            setTasks={setTasks}
            task={task}
          />
        );
      })}
    </div>
  );
}

export default TasksPage;
