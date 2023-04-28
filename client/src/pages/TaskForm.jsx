import { Formik, Form } from "formik";
import { createTaskRequest } from "../api/tasks.api";

function TaskForm() {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={async (values, actions) => {
        console.log(values);
        try {
          const response = await createTaskRequest(values);
          console.log(response);
          actions.resetForm();
        } catch (error) {
          console.log(error);
        }
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
