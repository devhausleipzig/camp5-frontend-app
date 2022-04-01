import api from "./api";
import { Recipe, FilterParams } from "./types";

let recipes: [];
export const getRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await api.get("recipe");
    recipes = response.data;
  } catch (err) {
    console.error(err);
  }
  return recipes;
};

export const getFilteredRecipes = (
  method: string = "any",
  preptime: string = "any",
  cost: string = "any"
): Recipe[] => {
  const filter: FilterParams = {};

  if (method != "any") filter.method = method;
  if (preptime != "any") filter.preptime = preptime;
  if (cost != "any") filter.cost = cost;

  return recipes.filter((rcp) => {
    let key: keyof FilterParams;
    for (key in filter) {
      if (rcp[key] != undefined && rcp[key] === filter[key]) return true;
    }
    return false;
  });
};
