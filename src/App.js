import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Assuming you have a Navbar component
import Footer from "./components/Footer/Footer"; // Assuming you have a Footer component
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Collection from "./Pages/Collection/Collection";
import Cart from "./Pages/Cart/Cart";
import Account from "./Pages/Account/Account";
import Checkout from "./Pages/Checkout/Checkout"; // Assuming Checkout is a parent component
import Login from "./Pages/Login/Login";
import SignIn from "./Pages/Signin/SignIn";
import { AuthProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "firebase/auth";

const App = () => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);
  return (
    <AuthProvider sdk={auth}>
      <Router>
        <div className="bg-[#F8FAE5]">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
