import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./App.scss";
import { Header } from "./components/Header";
import { LeftSide } from "./components/LeftSide";
import { NavList } from "./components/NavList";
import { Footer } from "./components/Footer";
import { ProductsList } from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <Header />
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
}

export default App;
