import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import RadioButtonSm from "./components/RadioButtonSm";
import { ChakraProvider } from "@chakra-ui/react";
import RadioButtonGroup from "./components/Allergens";
import CookingTechniques from "./components/CookingTechniques";
import Ingredient from "./components/Ingredient";
import Time from "./components/Time";
import Cost from "./components/Cost";
import Allergens from "./components/Allergens";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <Header />
      <div className="grow my-6 px-12 overflow-auto">
        <Routes>
          <Route path="/search" element={<Search />} />
            <Route path="/search/cooking-techniques" element={<CookingTechniques />} />   
            <Route path="/search/ingredient" element={<Ingredient />} />   
            <Route path="/search/time" element={<Time />} />   
            <Route path="/search/cost" element={<Cost />} />   
          <Route path="/" element={<Discover />} />
          <Route path="/basket" element={<Allergens />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
