import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMealContext } from "../context/mealContext";
import { startFetchMealByCategory } from "../actions/mealsAction";
import MealList from "../components/Meal/MealList";
import Loader from "../components/Loader/Loader";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { dispatch, categories, categoryMeals, categoryMealsLoading } =
    useMealContext();

  useEffect(() => {
    startFetchMealByCategory(dispatch, categoryName);
  }, [categoryName, dispatch]);

  let categoryDescription = "";
  if (categories.length > 0) {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].strCategory === categoryName)
        categoryDescription = categories[i].strCategoryDescription;
    }
  }
  window.scroll(0, 0);
  return (
    <div className="category-page">
      <section className="section--padding">
        <div className="container">
          <div className="category-title-contain">
            <h2 className="cat-title">{categoryName}</h2>
            <p className="cat-desc">{categoryDescription}</p>
          </div>
          <h3 className="section__title">MEALS</h3>
          {categoryMealsLoading ? (
            <Loader />
          ) : (
            <MealList meals={categoryMeals} />
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
