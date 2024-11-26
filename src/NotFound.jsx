import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>This is not a 404: Page Not Found......</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
