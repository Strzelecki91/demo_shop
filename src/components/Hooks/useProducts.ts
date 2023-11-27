import { useEffect, useState } from "react";
import { productsListType } from "../context/ProductContext";

type useProductsData = {
  productsList: productsListType[];
  getProducts: () => Promise<void>;
};

export const useProducts = (): useProductsData => {
  const [productsList, setProductsList] = useState<productsListType[]>([]);

  const URL = "http://localhost:5000/products";

  const getProducts = async () => {
    try {
      const data = await fetch(`${URL}`);
      if (!data.ok)
        throw new Error("Ups something goes wrong with fetching data");
      const response = await data.json();
      console.log(response);
      console.log("pobiera?");
      setProductsList(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { productsList, getProducts };
};
