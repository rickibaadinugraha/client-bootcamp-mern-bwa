import GuardRoute from "../components/GuardRoute";
import GuestOnlyRoute from "../components/GuestOnlyRoute";
import { Routes, Route, Navigate } from "react-router";
import Login from "../pages/signin";
import SNavbar from "../components/Navbar";
import { CategoriesRoutes } from "./categoriesRoute";
import { HomeRoute } from "./homeRoute";
import { TalentsRoutes } from "./talentsRoute";
import { PaymentsRoutes } from "./paymentsRoute";
import { EventsRoutes } from "./eventsRoute";
import { OrdersRoutes } from "./ordersRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <GuestOnlyRoute>
            <Login />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <SNavbar />
            <GuardRoute />
          </>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="" element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="categories/*" element={<CategoriesRoutes />} />
        <Route path="talents/*" element={<TalentsRoutes />} />
        <Route path="payments/*" element={<PaymentsRoutes />} />
        <Route path="events/*" element={<EventsRoutes />} />
        <Route path="orders/*" element={<OrdersRoutes />} />
      </Route>
    </Routes>
  );
}
