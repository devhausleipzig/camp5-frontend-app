import React, { useState } from "react";
import { Ingredient, Recipe, RecipeStep } from "../utils/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

  return (
    <>
      <div className="flip-card-wrapper">
        <div
          className="flip-card"
          id="flip-card"
          onClick={() => setShowBack(!showBack)}
        >
          <div
            className={`flip-card-inner`}
            style={{
              transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
            id="flip-card-inner"
          >
            <div className="flip-card-front" id="flip-card-front">
              <RecipeCardFront img={recipe.picture} recipeName={recipe.name} />
            </div>
            <div className="flip-card-back" id="flip-card-back">
              <RecipeCardBack
                recipeName={recipe.name}
                contentInfo={contentInfo}
                contentIngredients={contentIngredients}
                contentSteps={contentSteps}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;
