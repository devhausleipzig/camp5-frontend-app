import React from "react";
import CustomIcon from "../components/CustomIcon";
import { Route, Routes, Link, LinkProps } from "react-router-dom";

const Header = () => {
  // Good! Multiline wrapped in ( ... )
  // also has a single top level node.
  return (
    // <- (
    <div className="font-poppins font-semibold text-xxs">
      <div className="flex mt-10 bg-green p-4 h-navh w-navw justify-evenly items-center border-ricewhite rounded-full border-1 m-auto drop-shadow">
        <div className="relative flex flex-col space-y-0">
          <CustomIcon to={"/basket"}>
            <img src="../../assets/icons/shopping-cart-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite absolute top-7 left-2 icon-shadow">
            basket
          </p>
        </div>
        <img className="icon-shadow" src="../../assets/icons/logo-carrot.svg" />
        <div className="relative flex flex-col space-y-0">
          <CustomIcon to={"#"}>
            <img src="../../assets/icons/profile-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite text-shadow-lg absolute top-7 left-1">
            profile
          </p>
        </div>
      </div>
      <Routes>
        <Route path="/basket" element={"#"} />
        <Route path="/profile" element={"#"} />
      </Routes>
    </div>
  ); // <- )
};

export default Header;
