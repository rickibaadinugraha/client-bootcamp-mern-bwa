import { Route, Routes } from "react-router";
import Categories from "../pages/categories";
import Create from "../pages/categories/create";
import Edit from "../pages/categories/edit";

export function CategoriesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:categoryId" element={<Edit />} />
    </Routes>
  );
}
