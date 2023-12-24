import React, { useEffect, useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import { Routes, Route } from "react-router-dom";
import DesktopLandingPage from "../../Public/LandingPage/DesktopLandingPage";
import Login from "../../Auth/Login";
import Signup from "../../Auth/Signup";
import PasswordResetVerification from "../../Auth/PasswordResetVerification";
import PasswordReset from "../../Auth/PasswordReset";
import OTPVerification from "../../Auth/OTPVerification";
import Products from "../../Public/Products/Products";
import Profile from "../../Private/Profile/Profile";
import ProductDetails from "../../Private/ProductDetails/ProductDetails";
import Cart from "../../Private/Cart/Cart";
import { checkAuthentication } from "./auth";
import Success from "../../Private/Success";
import Footer from "../../Public/LandingPage/Footer";


function NavBar() {
  const [mobo, setMobo] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setMobo(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {mobo ? (
        <MobileNavBar/>
      ) : (
        <DesktopNavBar/>
      )}

      <Routes>
        <Route exact path="/" element={<DesktopLandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/password-reset/verification"
          element={<PasswordResetVerification />}
        />
        <Route exact path="/password-reset" element={<PasswordReset />} />
        <Route
          exact
          path="/otp-verification/:email"
          element={<OTPVerification />}
        />
        <Route exact path="/products/:category" element={<Products />} />
        <Route
          exact
          path="/products/filter/:filterValue"
          element={<Products />}
        />
        <Route
          exact
          path="/products/details/:ProductID"
          element={<ProductDetails checkAuthentication={checkAuthentication} />}
        />
        <Route
          exact
          path="/profile"
          element={<Profile checkAuthentication={checkAuthentication} />}
        />
        <Route exact path="/success" element={<Success />} />
        <Route
          exact
          path="/cart"
          element={<Cart checkAuthentication={checkAuthentication} />}
        />
      </Routes>
      <div style = {{
  marginTop : "30px"
}}>
        <Footer />
  </div>
    </div>
  );
}

export default NavBar;
