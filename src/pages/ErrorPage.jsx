import React from "react";
import { BiSolidMessageSquareError } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="icon">
        <BiSolidMessageSquareError />
      </div>
      <p>Page not found.</p>
    </section>
  );
};

export default ErrorPage;
