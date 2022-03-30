import React, { useState } from "react";
import { Recipe } from "../utils/types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import RecipeCardBack from "./recipecard-back";
import RecipeCardFront from "./recipecard-front";

export type CardProps = {
  recipe: Recipe;
  contentInfo: string[];
  contentIngredients: { name: string; amount: number; cost: number }[];
  contentSteps: string[];
};

const RecipeCard = ({
  recipe,
  contentInfo,
  contentIngredients,
  contentSteps,
}: CardProps) => {
  console.log(recipe);
  const [flip, SetFlip] = useState<string>("rotateY(360deg)");

  const flipcardInnerStyle = {
    transform: `${flip}`,
  };

  function flipCard(): void {
    flip === "rotateY(360deg)"
      ? SetFlip("rotateY(180deg)")
      : SetFlip("rotateY(360deg)");
  }
  const backSides = ["info", "ingredients", "steps"];
  //const backSideContent = [recipe.category, recipe.ingredients, recipe.steps];

  return (
    <>
      <div className="flip-card-wrapper">
        <div
          className="flip-card"
          id="flip-card"
          style={flipcardInnerStyle}
          onClick={flipCard}
        >
          <div className="flip-card-inner" id="flip-card-inner">
            <div className="flip-card-front" id="flip-card-front">
              <RecipeCardFront
                img={recipe.picture}
                recipeName={recipe.recipeName}
              />
            </div>
            <div
              onClick={flipCard}
              className="flip-card-back"
              id="flip-card-back"
            >
              <Carousel showThumbs={false}>
                {backSides.map((page, i) => (
                  <div key={page} className="w-24 h-24 bg-rice-white">
                    {backSides[i] === "info" ? (
                      <RecipeCardBack
                        backSide="info"
                        contentInfo={contentInfo}
                        recipeName={recipe.recipeName}
                      />
                    ) : backSides[i] === "ingredients" ? (
                      <RecipeCardBack
                        backSide="ingredients"
                        contentIngredients={contentIngredients}
                        recipeName={recipe.recipeName}
                      />
                    ) : (
                      <RecipeCardBack
                        backSide="steps"
                        contentSteps={contentSteps}
                        recipeName={recipe.recipeName}
                      />
                    )}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;
