import React, { ReactNode, useEffect, useState } from "react";
import { api, getRecipes } from "../api";
import { Recipe } from "../../src/utils/types";
import RadioButtonSm from "./RadioButtonSm";

const RadioButtonGroup = () => {
  const [allergens, setAllergens] = useState([]);
  useEffect(() => {
    getDiets();
  }, []);

  const getDiets = async (): Promise<void> => {
    try {
      const response = await api.get("allergens");
      setAllergens(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 content-center min-h-full">
      {allergens.length &&
        allergens.map((allergen) => <RadioButtonSm title={allergen} />)}
    </div>
  );
};

export default RadioButtonGroup;
