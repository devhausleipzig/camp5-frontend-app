import React from "react";
import CustomIcon from "../components/CustomIcon";
import { Route, Routes, Router, useLocation } from "react-router-dom";
import Basket from "../pages/Basket";
import Profile from "../pages/Profile";

const Header = () => {
  const location = useLocation();
  const isLogin = location.pathname == "/login";
  const visibility = isLogin ? "hidden" : "";

  return (
    // <- (
    <div
      className={`font-poppins font-semibold text-xxs tracking-wider ${visibility}`}
    >
      <div className="flex mt-10 py-7 h-navh w-navw justify-evenly items-center border-ricewhite rounded-full border-2 m-auto shadow-drop">
        <div className="flex flex-col items-center">
          <CustomIcon to={"/basket"}>
            <img src="../../assets/icons/shopping-cart-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite text-shadow-md">basket</p>
        </div>
        <img className="icon-shadow" src="../../assets/icons/logo-carrot.svg" />
        <div className="flex flex-col items-center">
          <CustomIcon to={"/profile"}>
            <img src="../../assets/icons/profile-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite text-shadow-md">profile</p>
        </div>
      </div>
    </div>
  ); // <- )
};

export default Header;
