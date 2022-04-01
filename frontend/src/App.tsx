import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <Header />
      <div className="grow my-6 px-12 overflow-auto">
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Discover />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
