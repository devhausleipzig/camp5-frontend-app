
import NavBar from "./layout/NavBar";
import { useEffect, useState } from "react";
import { createRoutesFromChildren } from "react-router-dom";
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
      <NavBar />
    </div>
  );
}

export default App;
