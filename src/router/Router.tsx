import { Routes, Route } from "react-router-dom";
import Home from "../pages/homepage/Home";
import Product from "../pages/product/Product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default Router;
