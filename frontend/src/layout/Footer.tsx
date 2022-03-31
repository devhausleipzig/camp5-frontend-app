import CustomIcon from "../components/CustomIcon";
import { Route, Routes, Link, LinkProps } from "react-router-dom";

const Footer = () => {
  // Good! Multiline wrapped in ( ... )
  // also has a single top level node.
  return (
    // <- (
    <div className="fixed bottom-0 w-full font-poppins font-semibold text-xxs tracking-wider">
      <div className="flex mb-10 py-7 h-navh w-navw justify-evenly items-center border-ricewhite rounded-full border-2 m-auto shadow-drop">
        <div className="flex flex-col items-center">
          <CustomIcon to={"/search"}>
            <img src="../../assets/icons/search-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite">
            search
          </p>
        </div>
        <div className="w-min-[40px]"></div>
        <div className="flex flex-col items-center">
          <CustomIcon to={"/"}>
            <img src="../../assets/icons/home-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite text-shadow-md">
            discover
          </p>
        </div>
      </div>
      <Routes>
        <Route path="/search" element={""} />
        <Route path="/" element={""} />
      </Routes>
    </div>
  ); // <- )
};

export default Footer;
