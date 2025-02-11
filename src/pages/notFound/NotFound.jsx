import "./notFound.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  
  return (
    <section className="notfound">
      <h2>PAGE NOT FOUND</h2>

      <Link to="/" className="btn lg ">Go Home</Link>
    </section>
  );
};

export default NotFound;
