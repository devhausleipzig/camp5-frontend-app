// third-party imports
import axios from "axios";

// local imports
import { Recipe, FilterParams } from "./utils/types";

export const api = axios.create({
    baseURL: process.env.BASE_URL
});

export async function getRecipes(): Promise<Recipe[]> {
    try {
        const response = await api.get("/recipes");
        var recipes = response.data
    } catch (err) {
        console.error(err);
    }

    return recipes;
};