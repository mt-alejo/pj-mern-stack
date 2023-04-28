import { Formik, Form } from "formik";

function TaskForm() {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            onChange={handleChange}
          />
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Write a description"
            rows="3"
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
