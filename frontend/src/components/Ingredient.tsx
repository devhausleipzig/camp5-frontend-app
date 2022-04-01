import React, { ReactNode, useEffect, useState } from "react";
import { api, getRecipes } from "../api";
import { Recipe } from "../../src/utils/types";
import RadioButtonSm from "./RadioButtonSm";


const Ingredient = () => {
    
    const ingredients = [
        "ingredient1",
        "ingredient2",
        "ingredient3",
        "ingredient4",
        "ingredient5",
        "ingredient6",
        "ingredient7",
        "ingredient8",
        "ingredient9",
        "ingredient10"
    ]

  return (
    <div className="grid grid-cols-2 gap-4 content-center min-h-full">
      {ingredients.length &&
        ingredients.map((ingredient) => <RadioButtonSm title={ingredient} />)}
        
    </div>
  );
};

export default Ingredient;
