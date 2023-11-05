import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Loader from "../Loader/Loader";
import { useMealContext } from "../../context/mealContext";
import SearchResult from "../SearchResult/SearchResult";

const Header = () => {
  const { meals, mealsLoading, mealsError } = useMealContext();
  return (
    <header>
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
