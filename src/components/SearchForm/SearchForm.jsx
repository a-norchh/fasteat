import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useMealContext } from "../../context/mealContext";
import { useNavigate } from "react-router-dom";
import { startFetchMealsBySearch } from "../../actions/mealsAction";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch, meals } = useMealContext();

  const searchTermHandler = (e) => {
    e.preventDefault();
    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setSearchTerm("");
      setErrorMsg("Invalid search term ...");
    }
  };

  const searchResultHandler = (e) => {
    e.preventDefault();
    navigate("/");
    if (searchTerm.length !== 0) {
      startFetchMealsBySearch(dispatch, searchTerm);
    }
  };

  return (
    <div className="search-form">
      <form onSubmit={(e) => searchResultHandler(e)}>
        <div className="search-contain">
          <input
            type="text"
            placeholder="Search recipes here..."
            value={searchTerm}
            onChange={(e) => searchTermHandler(e)}
          />
          <button type="submit" className="btn-search">
            <AiOutlineSearch size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
