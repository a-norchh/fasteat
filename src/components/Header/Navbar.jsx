import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="brand-logo">
          FastEat.
        </Link>
        <AiOutlineMenu className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
