import { useEffect, useState } from "react";
import { productsListType, cartListType } from "../context/ProductContext";

type useProductsData = {
  productsList: productsListType[];
  getProducts: () => Promise<void>;
  cartList: cartListType[];
  setCartList: React.Dispatch<React.SetStateAction<cartListType[]>>;
  getCartList: () => Promise<void>;
};

export const useProducts = (): useProductsData => {
  const [productsList, setProductsList] = useState<productsListType[]>([]);
  const [cartList, setCartList] = useState<cartListType[]>([]);

  const URL = "http://localhost:5000";

  const getProducts = async () => {
    try {
      const data = await fetch(`${URL}/products`);
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
  const getCartList = async () => {
    try {
      const data = await fetch(`${URL}/cart`);
      if (!data.ok)
        throw new Error("Ups something goes wrong with fetching data");
      const response = await data.json();
      console.log(response);
      console.log("pobiera?");
      setCartList(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getCartList();
  }, []);

  return { productsList, cartList, getProducts, setCartList, getCartList };
};
