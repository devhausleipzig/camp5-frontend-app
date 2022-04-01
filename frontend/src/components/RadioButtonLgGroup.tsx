import React, { ReactNode, useEffect, useState } from "react";
import api from "../../src/utils/api";
import { Recipe } from "../../src/utils/types";
import RadioButtonLg from "./RadioButtonLg";

const RadioButtonLgGroup = () => {

    const [recipes, setRecipes] = useState([]) 
    useEffect(() => {getDiets()}, [])

    const getDiets = async (): Promise<void> => {
        try {
          const response = await api.get("recipe");
          setRecipes(response.data);
          console.log(response.data)
        } catch (err) {
          console.error(err);
        }
      };

    return (
          <div className="grid grid-cols-1 gap-4 content-center min-h-full">
            {recipes.length && recipes.map(recipe => <RadioButtonLg recipe={recipe} />)}
          </div>
    )
}

export default RadioButtonLgGroup;