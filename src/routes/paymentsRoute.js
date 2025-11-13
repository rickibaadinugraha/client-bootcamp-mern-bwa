import { Route, Routes } from "react-router";
import Payments from "../pages/payments";
import Create from "../pages/payments/create";
import Edit from "../pages/payments/edit";

export function PaymentsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Payments />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:paymentId" element={<Edit />} />
    </Routes>
  );
}
