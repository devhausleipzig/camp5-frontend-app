import axios from "axios";
import { Recipe } from "./types";

export const getRecipes = async (): Promise<Recipe[] | undefined> => {
  try {
    const response = await axios.get("http://localhost:3005/recipes");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
