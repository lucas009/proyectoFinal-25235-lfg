import React from "react";
import ProductList from "./ProductList";

const Electronics = () => {
  return (
    <div className="container">
      <h1>Electronics</h1>
      <ProductList category="electronics" />
    </div>
  );
};

export default Electronics;
