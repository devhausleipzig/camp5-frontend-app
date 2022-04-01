import { Listbox } from "@headlessui/react";
import React from "react";
import { Ingredient, RecipeStep } from "../utils/types";

type ReciepeCardBackProps = {
  recipeName: string;
  contentInfo?: string[];
  contentIngredients?: Ingredient[];
  contentSteps?: RecipeStep[];
  backSide: "info" | "ingredients" | "steps";
};

const RecipeCardBack = ({
  recipeName,
  backSide,
  contentInfo,
  contentIngredients,
  contentSteps,
}: ReciepeCardBackProps) => {
  return (
    <div className="bg-ricewhite rounded-[40px] h-[320px] w-[260px] border-[1px]  border-ricewhite font-poppins">
      <div className="flex justify-center items-center h-[50px] border-b-[1px] border-b-darkbrown">
        <h2 className="font-poppins">{recipeName}</h2>
      </div>
      <div className="border-b-[1px] border-darkbrown flex flex-col justify-start items-center h-[220px] w-full bar  overflow-y-scroll p-4">
        {backSide === "steps" ? (
          <ol>
            {contentSteps?.map((e, i) => (
              <li key={`${e.position}-${i}`}>{JSON.stringify(e)}</li>
            ))}
          </ol>
        ) : (
          <ul>
            {backSide === "info"
              ? contentInfo?.map((e, i) => <li key={`${e}-${i}`}>{e}</li>)
              : contentIngredients?.map((e) => (
                  <li key={`${e.id}`}>{` ${e.name}`}</li>
                ))}
          </ul>
        )}
      </div>
      <div className="flex items-center justify-center w-[260px] h-[50px]"></div>
    </div>
  );
};

export default RecipeCardBack;
