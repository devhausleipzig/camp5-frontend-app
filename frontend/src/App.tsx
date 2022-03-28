import { useEffect, useState } from "react";
import { createRoutesFromChildren } from "react-router-dom";
import RecipeCard from "./components/card";
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

  const mockData = {
    id: "1",
    recipeName: "Salad",
    picture: "./assets/pics/test.png",
    ingredients: [
      {
        name: "potato",
        amount: "5000",
        cost: "1000000",
      },
    ],
    methods: ["fry"],
    prepTime: "5min",
    cost: "1000000$",
    keywords: ["potato", "fat", "ketchup"],
    preferences: [""],
    category: ["vegan", "glutenfree", "sugarshock"],
    steps: ["step 1", "step 2", "step 3"],
  };

  return (
    <div className="App">
      <Searchbar recipes={allRecipes} />
      <RecipeCard recipe={mockData} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-green-500">Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
