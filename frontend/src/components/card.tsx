import React, { useState } from "react";
import { Ingredient, Recipe, RecipeStep } from "../utils/types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import RecipeCardBack from "./recipecard-back";
import RecipeCardFront from "./recipecard-front";

// create card props
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
      <div className="flip-card-wrapper mt-8">
        <div
          className="flip-card"
          id="flip-card"
          // style={flipcardInnerStyle}
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
              {
                <Carousel
                  showThumbs={false}
                  width="260px"
                  swipeable
                  emulateTouch
                  showArrows={false}
                  showStatus={false}
                >
                  {backSides.map((page, i) => (
                    <div
                      key={page}
                      className="w-[260px] h-[320px] bg-rice-white"
                    >
                      {backSides[i] === "info" ? (
                        <RecipeCardBack
                          backSide="info"
                          contentInfo={contentInfo}
                          recipeName={recipe.name}
                          key={`${contentInfo}`}
                        />
                      ) : backSides[i] === "ingredients" ? (
                        <RecipeCardBack
                          backSide="ingredients"
                          contentIngredients={contentIngredients}
                          recipeName={recipe.name}
                          key={`${contentIngredients}`}
                        />
                      ) : (
                        <RecipeCardBack
                          backSide="steps"
                          contentSteps={contentSteps}
                          recipeName={recipe.name}
                          key={`${contentSteps}`}
                        />
                      )}
                    </div>
                  ))}
                </Carousel>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;

// Goals:
//
//a) Correct dimension of flipped card
//b) set units responsive/relative
// c) add backside of card when flipped
//d) fix carousel
