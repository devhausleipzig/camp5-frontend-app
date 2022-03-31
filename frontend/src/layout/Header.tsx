import React from "react";
import CustomIcon from "../components/CustomIcon";
import { Route, Routes, Link, LinkProps } from "react-router-dom";

const Header = () => {
  // Good! Multiline wrapped in ( ... )
  // also has a single top level node.
  return (
    // <- (
    <div className="font-poppins font-semibold text-xxs tracking-wider">
      <div className="flex mt-10 py-7 h-navh w-navw justify-evenly items-center border-ricewhite rounded-full border-2 m-auto shadow-drop">
        <div className="flex flex-col items-center">
          <CustomIcon to={"/basket"}>
            <img src="../../assets/icons/shopping-cart-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite">
            basket
          </p>
        </div>
        <img className="icon-shadow" src="../../assets/icons/logo-carrot.svg" />
        <div className="flex flex-col items-center">
          <CustomIcon to={"#"}>
            <img src="../../assets/icons/profile-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite">
            profile
          </p>
        </div>
      </div>
      <Routes>
        <Route path="/basket" element={""} />
        <Route path="/profile" element={""} />
      </Routes>
    </div>
  ); // <- )
};

export default Header;
