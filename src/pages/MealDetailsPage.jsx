import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useMealContext } from "../context/mealContext";
import { startFetchSingleMeal } from "../actions/mealsAction";
import Loader from "../components/Loader/Loader";
import MealSingle from "../components/Meal/MealSingle";
import CategoryList from "../components/Category/CategoryList";

const MealDetailsPage = () => {
  const { mealId } = useParams();
  const { dispatch, meal, mealLoading, categoryLoading, categories } =
    useMealContext();

  useEffect(() => {
    startFetchSingleMeal(dispatch, mealId);
  }, []);

  let ingredientArr = [],
    measureArr = [],
    singleMeal = {};
  let instructions;

  if (meal?.length > 0) {
    for (let props in meal[0]) {
      if (props.includes("strIngredient")) {
        if (meal[0][props]) {
          ingredientArr.push(meal[0][props]);
        }
      }
      if (props.includes("strMeasure")) {
        if (meal[0][props]) {
          measureArr.push(meal[0][props]);
        }
      }
    }

    instructions = meal[0].strInstructions.split("\r\n");
    instructions = instructions.filter((item) => item.length > 3);
  }

  singleMeal = {
    id: meal[0]?.idMeal,
    title: meal[0]?.strMeal,
    area: meal[0]?.strArea,
    category: meal[0]?.strCategory,
    thumbnail: meal[0]?.strMealThumb,
    instructions,
    source: meal[0]?.strSource,
    tags: meal[0]?.strTags,
    youtube: meal[0]?.strYoutube,
    ingredientArr,
    measureArr,
  };

  console.log(mealLoading);

  return (
    <section className="meal-page section--padding">
      {mealLoading || categoryLoading ? <Loader /> : ""}
      <div className="container">
        {mealLoading ? "" : <MealSingle meal={singleMeal} />}
      </div>
      {categoryLoading ? (
        ""
      ) : (
        <CategoryList categories={categories} decorate={false} />
      )}
    </section>
  );
};

export default MealDetailsPage;
