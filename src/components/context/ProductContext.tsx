import { createContext, ChangeEvent, FormEvent } from "react";
import { useProducts } from "../Hooks/useProducts";

export type productsListType = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
  images: string;
};
export type cartListType = {
  userId: number;
  productId: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
};

type ProductsContextProps = {
  productsList: productsListType[];
  getProducts: () => Promise<void>;
  cartList: cartListType[];
  setCartList: React.Dispatch<React.SetStateAction<cartListType[]>>;
  getCartList: () => Promise<void>;
};

type ProductProviderProps = {
  children: JSX.Element;
};
export const ProductContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const { productsList, cartList, getProducts, setCartList, getCartList } =
    useProducts();
  return (
    <ProductContext.Provider
      value={{
        productsList,
        cartList,
        getProducts,

        setCartList,
        getCartList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
