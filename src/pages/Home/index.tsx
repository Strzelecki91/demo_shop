import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LeftSide } from "../../components/LeftSide";
import { NavList } from "../../components/NavList";
import { ProductsList } from "../../components/ProductsList";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { UserContext } from "../../components/context/UserContext";
import { useContext } from "react";

export const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div>
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
        </MDBRow>
      </div>
      <Footer />
    </div>
  );
};
