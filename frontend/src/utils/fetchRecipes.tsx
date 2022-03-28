import api from "./api";
import { Recipe, RecipeFilter, CookingMethod, CookingTime } from "./types";

let recipes: [];
export const getRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await api.get("recipes");
    recipes = response.data;
  } catch (err) {
    console.error(err);
  }
  return recipes;
};


/**
 * get filtered recipes from the [recipes] array, filter depends on optional parameters
 * @param method 
 * @param preptime 
 * @returns Array
 */
export const getFilteredRecipes = (
  method: CookingMethod = "any",
  preptime: CookingTime = "any"
): Recipe[] => {
  let getFilteredRecipes;
  let filterOptions = "";
  if (method != "any") filterOptions = "m";
  if (preptime != "any") filterOptions += "t";
  //  if(cost != 'any') filterOptions += 'c'

  return (getFilteredRecipes = recipes.filter((rcp: RecipeFilter) => {
    // console.log(rcp)
    switch (filterOptions) {
      case "m":
        return rcp.methods === method;
        break;
      case "t":
        return rcp.prepTime === preptime;
        break;
      case "mt":
        return rcp.methods === method && rcp.prepTime === preptime;
        break;

    }
  }));
};
