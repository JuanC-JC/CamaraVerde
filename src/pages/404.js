import * as React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <>
      <h1>404 NOT FOUND</h1>
      <Link to="/">Return to Home</Link>
    </>
  );
};

export default NotFoundPage;

