import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../../context/sidebarContext";
import { useMealContext } from "../../context/mealContext";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  const { categories } = useMealContext();

  return (
    <nav className={`sidebar ${isSidebarOpen ? "sidebar--active" : ""}`}>
      <div className="sidebar__header">
        <AiFillCloseSquare
          className="btn-close"
          onClick={() => closeSidebar()}
        />
      </div>
      <div className="sidebar__content">
        <ul>
          {/* map here */}
          {categories.map((item) => (
            <Link
              key={item.idCategory}
              to={`/meal/category/${item.strCategory}`}
              onClick={() => closeSidebar()}
            >
              <li>{item.strCategory}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
