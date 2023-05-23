import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillsPage from "./pages/BillsPage";
import CustomersPage from "./pages/CustomersPage";
import StatisticPage from "./pages/StatisticPage";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bills" element={<BillsPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
