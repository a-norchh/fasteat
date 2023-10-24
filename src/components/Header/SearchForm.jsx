import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-form">
      <form onSubmit={searchHandler}>
        <div className="search-contain">
          <input type="text" placeholder="Search recipes here..." />
          <button type="submit" className="btn-search">
            <AiOutlineSearch size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
