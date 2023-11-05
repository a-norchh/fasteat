import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../../context/sidebarContext";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="brand-logo">
          FastEat.
        </Link>
        <AiOutlineMenu className="icon" onClick={() => openSidebar()} />
      </div>
    </nav>
  );
};

export default Navbar;
