import React from "react";
import RecipeCard from "../components/card";
import type { Recipe } from "../utils/types";
import { useEffect, useState } from "react";
// import { getRecipes } from "../utils/fetchRecipes";
import { api, getRecipes } from "../api";

const Discover = () => {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

  async function fetchAllRecipes(): Promise<void> {
    const response: Recipe[] = await getRecipes();
    setAllRecipes(response);
  }

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  return (
    <div>
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
};

export default Discover;
