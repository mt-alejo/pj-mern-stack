import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Tasks Administrator</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create tasks</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
