import { useEffect, useState } from "react";
import RecipeCard from "./components/card";
import { getRecipes } from "./utils/fetchRecipes";
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
          contentInfo={allRecipes[0].category}
          contentIngredients={allRecipes[0].ingredients}
          contentSteps={[]}
        />
      )}
    </div>
  );
}

export default App;
