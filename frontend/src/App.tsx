import { useEffect, useState } from "react";
import RecipeCard from "./components/card";

import { createRoutesFromChildren } from "react-router-dom";
import Searchbar from "./components/searchbar";
import logo from "./logo.svg";
import { api, getRecipes } from "./api";
import type { Recipe } from "./utils/types";

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
    <div className="App">
      {allRecipes.length && (
        <RecipeCard
          recipe={allRecipes[0]}
          contentInfo={allRecipes[0].dietaryRestrictions}
          contentIngredients={allRecipes[0].ingredients}
          contentSteps={allRecipes[0].steps}
        />
      )}
    </div>
  );
}

export default App;
