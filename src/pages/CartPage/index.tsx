import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Footer } from "../../components/Footer";
import { NavList } from "../../components/NavList";
import { ProductsList } from "../../components/ProductsList";
import { LeftSide } from "../../components/LeftSide";
import { ProductContext } from "../../components/context/ProductContext";
import { useContext } from "react";

export const CartPage = () => {
  const { cartList } = useContext(ProductContext);
  return (
    <>
      <NavList />
      <div className="cart_container">
        <MDBRow className="hero">
          <MDBCol lg="2">
            {" "}
            <LeftSide />
          </MDBCol>
          <MDBCol lg="8">
            <div
              className="products-list-container {
"
            >
              {cartList.length > 0 ? (
                <ul>
                  {cartList.map(({ userId, productId, title, price }) => (
                    <li key={userId}>
                      {title} - {price} - {productId}
                    </li>
                  ))}
                </ul>
              ) : (
                <h2>Brak kontaktów</h2>
              )}
            </div>
          </MDBCol>
          <MDBCol lg="2">
            <p>coś tu wsadzimy</p>
          </MDBCol>
          <Footer />
        </MDBRow>
      </div>
    </>
  );
};
