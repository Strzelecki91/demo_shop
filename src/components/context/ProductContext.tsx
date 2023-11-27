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

type ProductsContextProps = {
  productsList: productsListType[];
  getProducts: () => Promise<void>;
};

type ProductProviderProps = {
  children: JSX.Element;
};
export const ProductContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const { productsList, getProducts } = useProducts();
  return (
    <ProductContext.Provider
      value={{
        productsList,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
