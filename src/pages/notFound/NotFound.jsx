import "./notFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <h2>PAGE NOT FOUND</h2>

      <Link to="/" className="btn lg ">Go Home</Link>
    </section>
  );
};

export default NotFound;
