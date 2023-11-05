import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const MealList = ({ meals }) => {
  console.log(meals);
  return (
    <div>
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
            {item.strCategory && (
              <div className="card-tag">{item.strCategory}</div>
            )}
            <div className="meal-details">
              <div className="area">{item.strArea}</div>
              <div className="title">{item.strMeal}</div>
            </div>
          </Link>
        ))}
      </Card>
    </div>
  );
};

export default MealList;
