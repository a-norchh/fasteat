import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiSolidCheckboxChecked } from "react-icons/bi";

const MealSingle = ({ meal }) => {
  let tags = meal?.tags?.split(",");
  let tagContent = "Tag not found";
  if (tags?.length > 0) {
    tagContent = (
      <>
        {tags.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </>
    );
  }

  let ingredients = [];
  if (meal.ingredientArr && meal.measureArr) {
    for (let i = 0; i < meal.ingredientArr.length; i++) {
      ingredients.push(meal.ingredientArr[i] + " " + meal.measureArr[i]);
    }
  }

  // console.log(meal.instructions);

  return (
    <>
      <div className="breadcrumb">
        <Link to="/">
          <AiFillHome className="icon" />
        </Link>
        <MdKeyboardDoubleArrowRight className="icon" />
        <Link
          to={`/meal/category/${meal.category}`}
          className="breadcrumb__title"
        >
          {meal.category}
        </Link>
        <MdKeyboardDoubleArrowRight className="icon" />
        <div className="breadcrumb__title">{meal.title}</div>
      </div>

      <h3 className="section__title">MEAL DETAILS</h3>

      <div className="meal-details">
        <div className="meal-details__row">
          <div className="meal-thumb">
            <img src={meal.thumbnail} alt="" />
          </div>

          <div className="meal-details-list">
            <h2 className="meal-title">{meal.title}</h2>
            <div className="meal-category">
              <span>Category :</span>
              {meal.category}
            </div>
            <div className="meal-source">
              <span>Source :</span>
              <a href={meal.source} target="_blank" rel="noreferrer">
                {meal.source
                  ? (meal?.source).substring(0, 30) + "..."
                  : "Not found"}
              </a>
            </div>
            <div className="meal-tag">
              <span>Tag : </span>
              <div className="group-tag">{tagContent}</div>
            </div>
            <div className="meal-ingredient">
              <span>Ingredient : </span>
              <ul className="ingredient-list">
                {ingredients.map((item, index) => (
                  <li key={index}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="meal-details__row">
          <div className="meal-instruction">
            <span>Instructions:</span>
            <ul className="instruction-contain">
              {meal.instructions?.map((item, index) => (
                <>
                  <li key={index}>
                    <div className="icon">
                      <BiSolidCheckboxChecked />
                    </div>
                    <p>{item}</p>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealSingle;
