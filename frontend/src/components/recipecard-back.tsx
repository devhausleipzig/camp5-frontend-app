import { Listbox } from "@headlessui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Ingredient, RecipeStep } from "../utils/types";

type ReciepeCardBackProps = {
  recipeName: string;
  contentInfo: string[];
  contentIngredients: Ingredient[];
  contentSteps: RecipeStep[];
};

const RecipeCardBack = ({
  recipeName,
  contentInfo,
  contentIngredients,
  contentSteps,
}: ReciepeCardBackProps) => {
  const backSides = ["info", "ingredients", "steps"];

  return (
    <div className="bg-ricewhite rounded-[40px] h-[320px] w-[260px] border-[1px]  border-ricewhite font-poppins">
      <div className="flex justify-center items-center h-[50px] border-b-[1px] border-b-darkbrown">
        <h2 className="font-poppins">{recipeName}</h2>
      </div>
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
            <div key={page} className="w-[260px] h-[320px] bg-rice-white">
              {backSides[i] === "info" ? (
                <div className="border-b-[1px] border-darkbrown flex flex-col justify-start items-center h-[220px] w-full bar  overflow-y-scroll p-4">
                  {contentInfo?.map((e, i) => (
                    <ul>
                      <li key={`${e}-${i}`}>{e}</li>
                    </ul>
                  ))}
                </div>
              ) : backSides[i] === "ingredients" ? (
                <div className="border-b-[1px] border-darkbrown flex flex-col justify-start items-center h-[220px] w-full bar  overflow-y-scroll p-4">
                  {contentIngredients?.map((e) => (
                    <ul>
                      <li key={`${e.id}`}>{` ${e.name}`}</li>
                    </ul>
                  ))}
                </div>
              ) : (
                <div className="border-b-[1px] border-darkbrown flex flex-col justify-start items-center h-[220px] w-full bar  overflow-y-scroll p-4">
                  {contentSteps?.map((e, i) => (
                    <ol>
                      <li key={`${e.position}-${i}`}>{JSON.stringify(e)}</li>
                    </ol>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Carousel>
      }
      <div className="flex items-center justify-center w-[260px] h-[50px]"></div>
    </div>
  );
};

export default RecipeCardBack;
