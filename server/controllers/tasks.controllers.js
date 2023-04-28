import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * from tasks ORDER BY createdAt ASC"
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getTask = async (req, res) => {
  try {
    const requestedPage = req.params.id;
    const [result] = await pool.query(
      `SELECT * from tasks WHERE id=${requestedPage}`
    );
    result.length == 0
      ? res.status(404).json({ message: "Task not found.." })
      : res.json(result[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUEs  (?, ?)",
      [title, description]
    );
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const updateTask = (req, res) => {
  try {
    const result = pool.query("UPDATE tasks SET ? WHERE ID=?", [
      req.body,
      req.params.id,
    ]);
    res.send("Updated");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const requestedPage = req.params.id;
    const [result] = await pool.query(
      `DELETE FROM tasks WHERE id=${requestedPage}`
    );
    result.affectedRows === 0
      ? res.status(404).json({ message: "Not found" })
      : res.status(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
