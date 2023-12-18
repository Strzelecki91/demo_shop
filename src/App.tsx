import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header";
import { LeftSide } from "./components/LeftSide";
import { NavList } from "./components/NavList";
import { Footer } from "./components/Footer";
import { ProductsList } from "./components/ProductsList";
import { ProductProvider } from "./components/context/ProductContext";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignUp } from "./pages/SignUp";
import { UserProvider } from "./components/context/UserContext";
import { UserPage } from "./pages/UserPage";
import { ProductList } from "./pages/ProductList";

function App() {
  const isAuthenticated = !!localStorage.getItem("accessToken");
  console.log(isAuthenticated, "ma autentykację");
  return (
    <UserProvider>
      <ProductProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ProductList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/userInformation" element={<UserPage />} />
          </Routes>
        </div>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
