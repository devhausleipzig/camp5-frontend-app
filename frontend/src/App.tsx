import { useEffect, useState } from "react";
import { createRoutesFromChildren } from "react-router-dom";
import RecipeCard from "./components/card";
import RecipeCardFront from "./components/recipecard-front";
import RecipeCardBack from "./components/recipecard-back";
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
    <div className="App">
      {allRecipes.length && (
        <>
          <RecipeCardFront
            img={allRecipes[0].picture}
            recipeName={allRecipes[0].recipeName}
          />
          <RecipeCardBack
            backSide="info"
            contentInfo={allRecipes[0].category}
            recipeName={allRecipes[0].recipeName}
          />
        </>
      )}
      {allRecipes.length && (
        <RecipeCard
          recipe={allRecipes[0]}
          contentInfo={allRecipes[0].category}
          contentIngredients={allRecipes[0].ingredients}
          contentSteps={[]}
        />
      )}
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
