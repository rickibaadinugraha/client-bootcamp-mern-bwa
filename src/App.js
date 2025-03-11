import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import SigninPage from "./pages/signin";
import DashboardPage from "./pages/dashboard";
import CategoriesPage from "./pages/categories";
import CategoryCreate from "./pages/categories/create";
import CategoryEdit from "./pages/categories/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/create" element={<CategoryCreate />} />
        <Route path="/categories/edit" element={<CategoryEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
