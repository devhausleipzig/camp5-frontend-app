import React, { useState } from "react";
import { Ingredient, Recipe, RecipeStep } from "../utils/types";

import { Carousel } from "react-responsive-carousel";
import RecipeCardBack from "./recipecard-back";
import RecipeCardFront from "./recipecard-front";

export type CardProps = {
  recipe: Recipe;
  contentInfo: string[];
  contentIngredients: Ingredient[];
  contentSteps: RecipeStep[];
};

const RecipeCard = ({
  recipe,
  contentInfo,
  contentIngredients,
  contentSteps,
}: CardProps) => {
  console.log(recipe);

  const [showBack, setShowBack] = useState(false);

  const backSides = ["info", "ingredients", "steps"];
  const flip = () => {
    setShowBack(!showBack);
  };
  return (
    <>
      <div className="flip-card-wrapper">
        <div className="flip-card" id="flip-card">
          <div
            className={`flip-card-inner`}
            style={{
              transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
            id="flip-card-inner"
          >
            <div
              onClick={() => setShowBack(!showBack)}
              className="flip-card-front"
              id="flip-card-front"
            >
              <RecipeCardFront img={recipe.picture} recipeName={recipe.name} />
            </div>
            <div className="flip-card-back" id="flip-card-back">
              <RecipeCardBack
                recipeName={recipe.name}
                contentInfo={contentInfo}
                contentIngredients={contentIngredients}
                contentSteps={contentSteps}
                flip={flip}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;
