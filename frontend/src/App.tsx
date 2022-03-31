import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";
import { createRoutesFromChildren, Route, Routes } from "react-router-dom";
import Searchbar from "./components/searchbar";
import logo from "./logo.svg";
import { getRecipes } from "./utils/fetchRecipes";
import type { Recipe } from "./utils/types";
import RadioButtonSm from "./components/RadioButtonSm";
import { ChakraProvider } from '@chakra-ui/react'
import RadioButtonGroup from "./components/RadioButtonGroup";


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
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <Header />
      <div className='grow my-6 px-12 overflow-auto'>
        <RadioButtonGroup />
      </div>
      <Footer />
    </div>
  );
}

export default App;
