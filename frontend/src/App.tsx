import * as React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";
import RecipeCard from "./components/card";
import { Route, Routes } from "react-router-dom";
import { getRecipes } from "./utils/fetchRecipes";
import type { Recipe } from "./utils/types";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";
import RadioButtonSm from "./components/RadioButtonSm";
import { ChakraProvider } from "@chakra-ui/react";
import RadioButtonGroup from "./components/RadioButtonGroup";

function App() {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

  async function fetchAllRecipes(): Promise<void> {
    const response: Recipe[] = await getRecipes();
    setAllRecipes(response);
  }

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <Header />
      <div className="grow my-6 px-12 overflow-auto">
        {allRecipes.length && (
          <RecipeCard
            recipe={allRecipes[0]}
            contentInfo={allRecipes[0].category}
            contentIngredients={allRecipes[0].ingredients}
            contentSteps={[]}
          />
        )}
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
