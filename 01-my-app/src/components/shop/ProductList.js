import React from "react";
import data from "../../data/products.json";
import Product from "./Product";

const ProductList = () => {
  return (
    <div>
      {data.map((product) => {
        return (
          <Product
            title={product.title}
            image={product.image}
            desc={product.desc}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;