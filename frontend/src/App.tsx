import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";
import { createRoutesFromChildren, Route, Routes } from "react-router-dom";
import Searchbar from "./components/searchbar";
import logo from "./logo.svg";
import { getRecipes } from "./utils/fetchRecipes";
import type { Recipe } from "./utils/types";

function App() {
  const [count, setCount] = useState(0);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

  async function fetchAllRecipes(): Promise<Recipe[]> {
    const response: Recipe[] = await getRecipes();
    setAllRecipes(response);
    return allRecipes;
  }
  useEffect(() => {
    fetchAllRecipes();
  }, []);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
