import React from "react";

import "./App.scss";
import { Header } from "./components/Header";
import { LeftSide } from "./components/LeftSide";
import { NavList } from "./components/NavList";
import { Footer } from "./components/Footer";
import { ProductsList } from "./components/ProductsList";
import { ProductProvider } from "./components/context/ProductContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Home />
      </div>
    </ProductProvider>
  );
}

export default App;
