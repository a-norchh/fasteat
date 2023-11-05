import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const CategoryList = ({ categories, decorate }) => {
  // console.log(categories, decorate);
  return (
    <section className="section--padding section--category">
      <div className="container">
        {decorate && <div className="section__decorate"></div>}
        <h3 className="section__title">CATEGORIES</h3>
        <Card>
          {categories.map((item) => (
            <div key={item.idCategory} className="card-item">
              <Link to={`/meal/category/${item.strCategory}`}>
                <div className="card-thumb">
                  <img src={item.strCategoryThumb} alt={item.strCategory} />
                </div>
                <div className="card-tag">{item.strCategory}</div>
              </Link>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default CategoryList;
