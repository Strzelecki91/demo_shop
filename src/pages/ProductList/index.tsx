import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { NavList } from "../../components/NavList";
import { LeftSide } from "../../components/LeftSide";
import { ProductsList } from "../../components/ProductsList";
import { Footer } from "../../components/Footer";
import "./productList.scss";

export const ProductList = () => {
  return (
    <>
      <div className="main_container">
        <div className="content">
          <NavList />
          <MDBRow className="hero">
            <MDBCol lg="2">
              {" "}
              <LeftSide />
            </MDBCol>
            <MDBCol lg="8">
              <ProductsList />
            </MDBCol>
            <MDBCol lg="2">
              <p>coś tu wsadzimy</p>
            </MDBCol>
            <Footer />
          </MDBRow>
        </div>
      </div>
    </>
  );
};
