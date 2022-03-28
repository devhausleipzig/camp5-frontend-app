import React, { useState } from "react";
import { Recipe } from "../utils/types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export type CardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: CardProps) => {
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
              <div className="text-2xl w-24 h-24">
                <h2>{recipe.recipeName}</h2>
                <img src={recipe.picture} alt="" />
              </div>
            </div>
            <div
              onClick={flipCard}
              className="flip-card-back"
              id="flip-card-back"
            >
              <Carousel showThumbs={false}>
                {backSides.map((page, i) => (
                  <div key={page} className="w-24 h-24 bg-rice-white">
                    {page[i] === "info" ? (
                      <ul className="text-2xl w-24 h-24 flex flex-col justify-center items-center">
                        {recipe.category.map((item) => (
                          <li className="text-lg text-dark-brown" key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : page[i] === "ingredients" ? (
                      <ul className="text-2xl w-24 h-24 flex flex-col justify-center items-center">
                        {recipe.ingredients.map((item) => (
                          <li
                            className="text-lg text-dark-brown"
                            key={item.name}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="text-2xl w-24 h-24 flex flex-col justify-center items-center">
                        {recipe.steps.map((item) => (
                          <li className="text-lg text-dark-brown" key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
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
