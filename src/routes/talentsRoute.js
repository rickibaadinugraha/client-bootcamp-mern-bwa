import { Route, Routes } from "react-router";
import Talents from "../pages/talents";
import Create from "../pages/talents/create";
import Edit from "../pages/talents/edit";

export function TalentsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Talents />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:talentId" element={<Edit />} />
    </Routes>
  );
}
