function useLocalStorage(item) {
  return JSON.parse(localStorage.getItem(item));
}

function handleLocalStorage(action, id, tasks, setTasks) {
  function deleteLocalStorage() {
    const newArray = tasks.filter((task) => task.id !== id);
    localStorage.setItem("TASKER", JSON.stringify(newArray));
    setTasks(newArray);
    console.log(JSON.stringify(newArray));
  }
  function toggleLocalStorage() {
    const newArray = [...tasks];
    const indexTask = newArray.findIndex((task) => task.id === id);
    newArray[indexTask].done
      ? (newArray[indexTask].done = 0)
      : (newArray[indexTask].done = 1);
    localStorage.setItem("TASKER", JSON.stringify(newArray));
    setTasks(newArray);
    console.log(newArray[indexTask].done);
  }

  function addLocalStorage() {
    const newArray = [...tasks, id];
    localStorage.setItem("TASKER", JSON.stringify(newArray));
    setTasks(newArray);
    console.log(JSON.stringify(newArray));
  }
  if (action === "delete") {
    return deleteLocalStorage();
  }
  if (action === "toggle") {
    return toggleLocalStorage();
  }
  if (action === "add") {
    return addLocalStorage();
  }
}

export { useLocalStorage, handleLocalStorage };
