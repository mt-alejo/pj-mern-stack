import axios from "axios";

export const createTaskRequest = async (task) =>
  axios.post("http://localhost:4000/tasks", task);

export const getAllTasksRequest = async () =>
  axios.get("http://localhost:4000/tasks");
