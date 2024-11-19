import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCard } from "../ProductCard";
import "./productList.scss";
export const ProductsList = () => {
  const { productsList, getProducts } = useContext(ProductContext);
  console.log(productsList, " wyświetla listę");
  return (
    <div>
      <h2>Available products</h2>
      <h3>Best choice</h3>
      <div
        className="products-list-container {
"
      >
        {productsList.map(
          ({
            id,
            title,
            description,
            price,
            stock,
            brand,
            category,
            images,
          }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              description={description}
              price={price}
              stock={stock}
              brand={brand}
              category={category}
              images={images}
            />
          )
        )}
      </div>
    </div>
  );
};
