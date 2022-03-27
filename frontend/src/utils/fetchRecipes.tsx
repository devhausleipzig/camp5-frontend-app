import axios from "axios";
import { Recipe } from "./types";

export const getRecipes = async (): Promise<Recipe[]> => {
  let recipes;
  try {
    const response = await axios.get("http://localhost:3005/recipes");
    recipes = response.data;
  } catch (err) {
    console.error(err);
  }
  return recipes;
};
