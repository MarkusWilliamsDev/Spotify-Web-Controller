import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <Link to="/controller">Controller</Link>
      </nav>
    </div>
  );
}