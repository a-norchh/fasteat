import React from "react";
import { useMealContext } from "../../context/mealContext";
import MealList from "../Meal/MealList";

const SearchResult = () => {
  const { meals } = useMealContext();

  return (
    <section className="section--padding search-result">
      <div className="container">
        <h3 className="section__title">SEARCH RESULTS</h3>
        {/* CALL MEAL LIST HERE */}
        <MealList meals={meals} />
      </div>
    </section>
  );
};

export default SearchResult;
