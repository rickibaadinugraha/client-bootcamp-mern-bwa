import { Route, Routes } from "react-router";
import Dashboard from "../pages/dashboard";

export function HomeRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
