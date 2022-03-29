import CustomIcon from "../components/CustomIcon";
import { Route, Routes, Link, LinkProps } from "react-router-dom";

const Footer = () => {
  // Good! Multiline wrapped in ( ... )
  // also has a single top level node.
  return (
    // <- (
    <div className="fixed bottom-0 w-full font-poppins font-semibold text-xxs">
      <div className="flex mb-10 p-4 h-navh w-navw justify-around items-center border-ricewhite rounded-full border-2 m-auto drop-shadow">
        <div className="relative flex flex-col">
          <CustomIcon to={"/search"}>
            <img src="../../assets/icons/search-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite absolute top-6 icon-shadow">search</p>
        </div>
        <div className="relative flex flex-col space-y-0">
          <CustomIcon to={"/"}>
            <img src="../../assets/icons/home-icon.svg" />
          </CustomIcon>
          <p className="text-ricewhite text-shadow-lg absolute top-6">
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
