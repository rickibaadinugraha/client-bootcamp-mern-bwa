import { Route, Routes } from "react-router";
import Orders from "../pages/orders";

export function OrdersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
    </Routes>
  );
}
