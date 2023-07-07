import { Formik, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
import { handleLocalStorage } from "../hooks/useLocalStorage";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
// import { createTaskRequest } from "../api/tasks.api";

function TaskForm() {
  const { tasks, setTasks } = useContext(TaskContext);
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={async (values, actions) => {
        (values.done = false), (values.id = uuidv4());
        actions.resetForm();
        handleLocalStorage("add", values, tasks, setTasks);

        // try {
        //   const response = await createTaskRequest(values);
        //   console.log(response);
        //   actions.resetForm();
        // } catch (error) {
        //   console.log(error);
        // }
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            onChange={handleChange}
            value={values.title}
          />
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Write a description"
            rows="3"
            onChange={handleChange}
            value={values.description}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
