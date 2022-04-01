// third-party imports
import axios from "axios";

// local imports
import { Recipe, RecipeFilterParams } from "./utils/types";

//const baseURL = import.meta.env.VITE_BASE_URL

export const api = axios.create({
  baseURL: "http://localhost:3005",
});

export async function getRecipes(): Promise<Recipe[]> {
  try {
    const response = await api.get("/recipe");
    var recipes = response.data;
  } catch (err) {
    console.error(err);
  }

  return recipes;
}
