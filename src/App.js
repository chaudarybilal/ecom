import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/products" Component={Products} />
        <Route path="/contact" Component={Contact} />
        <Route path="/singleProduct/:id" Component={SingleProduct} />
        <Route path="/cart" Component={Cart} />
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
