import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMealContext } from "../context/mealContext";
import {
  startFetchMealByCategory,
  startFetchCategories,
} from "../actions/mealsAction";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { dispatch, categoryMeals, categories } = useMealContext();

  useEffect(() => {
    // startFetchCategories(dispatch);
    startFetchMealByCategory(dispatch, categoryName);
  }, []);

  // console.log(categories[0].strCategory);
  let categoryDescription = "";
  if (categories.length > 0) {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].strCategory === categoryName)
        categoryDescription = categories[i].strCategoryDescription;
    }
    console.log(categoryDescription);
  }

  return (
    <div className="category-page">
      <section className="section--padding">
        <div className="container">
          <div className="category-title-contain">
            <div className="title">{categoryName}</div>
            <div className="description">{categoryDescription}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
