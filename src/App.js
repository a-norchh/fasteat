import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, MealDetailsPage, CategoryPage, ErrorPage } from "./pages";
import SideBar from "./components/SideBar/SideBar";
import { SidebarProvider } from "./context/sidebarContext";
import { MealProvider } from "./context/mealContext";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <SidebarProvider>
      <MealProvider>
        <BrowserRouter>
          <Navbar />
          <SideBar />
          <div className="main-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/meal/:mealId" element={<MealDetailsPage />} />
              <Route
                path="/meal/category/:categoryName"
                element={<CategoryPage />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MealProvider>
    </SidebarProvider>
  );
};

export default App;
