import React from "react";
import Loader from "../components/Loader/Loader";
import Hero from "../components/Hero/Hero";
import { useMealContext } from "../context/mealContext";
import CategoryList from "../components/Category/CategoryList";
import NotFound from "../components/NotFound/NotFound";
import SearchResult from "../components/SearchResult/SearchResult";

const HomePage = () => {
  const { categories, categoryLoading, meals, mealsLoading } = useMealContext();

  let searchContent = mealsLoading ? (
    <Loader />
  ) : meals === null ? (
    <NotFound />
  ) : meals?.length ? (
    <SearchResult />
  ) : (
    ""
  );

  window.scrollTo(0, 0);

  return (
    <div id="home-page">
      <Hero />
      {/* <Loader /> */}
      {searchContent}
      {categoryLoading ? (
        <Loader />
      ) : (
        <CategoryList categories={categories} decorate={false} />
      )}
    </div>
  );
};

export default HomePage;
