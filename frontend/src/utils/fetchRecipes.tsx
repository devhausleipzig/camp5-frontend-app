import api from "./api";
import { Recipe } from "./types";

export const getRecipes = async (): Promise<Recipe[]> => {
  let recipes;
  try {
    const response = await api.get("recipes");
    recipes = response.data;
  } catch (err) {
    console.error(err);
  }
  return recipes;
};
