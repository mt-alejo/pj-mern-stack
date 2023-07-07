// import { getAllTasksRequest } from "../api/tasks.api";
// import { useEffect, useState } from "react";

import { useContext } from "react";
import TaskCard from "../components/TaskCard";
import { v4 as uuidv4 } from "uuid";
import { TaskContext } from "../context/TaskContext";

function TasksPage() {
  const { tasks } = useContext(TaskContext);
  //Add the key value property:e
  tasks.map((task) => (task.id = uuidv4()));

  return (
    <div>
      <h1>Tasks</h1>
      {tasks?.map((task) => {
        //The key must to be {key.id}
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TasksPage;
