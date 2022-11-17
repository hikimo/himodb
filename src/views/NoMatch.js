import { Link } from "react-router-dom";

export function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Back to home page</Link>
      </p>
    </div>
  );
}