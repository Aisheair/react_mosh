import React, { useEffect, useState } from "react";


const ProductList = ({category}:{category: string}) => {
  const [product, setProduct] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in ", category);
    setProduct(["Product 1", "Product 2", "Product 3"]);
  },[category]);

  return <>productList</>;
};

export default ProductList;
