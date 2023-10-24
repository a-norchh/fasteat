import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import CategoryPage from "./pages/CategoryPage";
// import MealDetailsPage from "./pages/MealDetailsPage";
// import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
