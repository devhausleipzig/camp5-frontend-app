import CustomIcon from "../components/CustomIcon";
import { Route, Routes, Link, LinkProps, useLocation } from "react-router-dom";
import Discover from "../pages/Discover";
import Search from "../pages/Search";

const Footer = () => {
  const location = useLocation()
  const isLogin = location.pathname == "/login"
  const visibility = isLogin ? "hidden" : ""
  
  return (
    // <- (
    <div className={`w-full font-poppins font-semibold text-xxs tracking-wider ${visibility}`}>
      <div className="flex mb-10 py-7 h-navh w-navw justify-evenly items-center border-ricewhite rounded-full border-2 m-auto shadow-drop">
        <div className="flex flex-col items-center">
          <CustomIcon to={"/search"}>
            <img src="../../assets/icons/search-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite text-shadow-md">search</p>
        </div>
        <div className="w-min-[40px]"></div>
        <div className="flex flex-col items-center">
          <CustomIcon to="/">
            <img src="../../assets/icons/home-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite text-shadow-md">discover</p>
        </div>
      </div>
    </div>
  ); // <- )
};

export default Footer;
