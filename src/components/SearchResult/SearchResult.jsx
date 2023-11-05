import React from "react";
import { useMealContext } from "../../context/mealContext";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const SearchResult = ({ meals }) => {
  return (
    <section className="section--padding search-result">
      <div className="container">
        <h3 className="section__title">SEARCH RESULTS</h3>
        <Card>
          {meals.map((item) => (
            <Link
              key={item.idMeal}
              to={`/meal/${item.idMeal}`}
              className="card-item"
            >
              <div className="card-thumb">
                <img src={item.strMealThumb} alt="" />
              </div>
              <div className="card-tag">{item.strCategory}</div>
              <div className="meal-details">
                <div className="area">{item.strArea}</div>
                <div className="title">{item.strMeal}</div>
              </div>
            </Link>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default SearchResult;
