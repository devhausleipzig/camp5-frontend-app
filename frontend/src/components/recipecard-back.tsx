import { Listbox } from "@headlessui/react";
import React from "react";

type ReciepeCardBackProps = {
  recipeName: string;
  contentInfo?: string[];
  contentIngredients?: { name: string; amount: number; cost: number }[];
  contentSteps?: string[];
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
    <div className="bg-ricewhite rounded-[40px] h-[320px] w-[260px] border-[1px] drop-shadow-md border-ricewhite font-poppins">
      <div className="flex justify-center items-center h-[50px] border-b-[1px] border-b-darkbrown">
        <h2 className="font-poppins">{recipeName}</h2>
      </div>
      <div className="border-b-[1px] border-darkbrown flex flex-col justify-center items-center h-[220px] w-[260px]">
        {backSide === "steps" ? (
          contentSteps?.map((e) => (
            <ol>
              <li>{e}</li>
            </ol>
          ))
        ) : (
          <ul>
            {backSide === "info"
              ? contentInfo?.map((e) => <li>{e}</li>)
              : contentIngredients?.map((e) => (
                  <li>{`${e.amount} +" " + ${e.name}`}</li>
                ))}
          </ul>
        )}
      </div>
      <div className="flex items-center justify-center w-[260px] h-[50px]">
        Pagination
      </div>
    </div>
  );
};

export default RecipeCardBack;
