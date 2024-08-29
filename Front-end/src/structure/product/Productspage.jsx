import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./Productlist";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://onemg-1.onrender.com/product/view-pro");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return <ProductList products={products} />;
};

export default ProductsPage;
