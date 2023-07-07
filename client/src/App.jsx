import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage.jsx";
import TaskForm from "./pages/TaskForm.jsx";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </>
  );
}

export default App;
