import React, { useState } from "react";
import { Recipe } from "../utils/types";

export type RecipeCardFrontProps = {
  img: string;
  recipeName: string;
};

const RecipeCardFront = ({ img, recipeName }: RecipeCardFrontProps) => {
  return (
    <div className="bg-ricewhite rounded-[40px] h-[320px] w-[260px] border-[1px] drop-shadow-md border-ricewhite">
      <div className="h-[270px] w-full bg-recipe-img bg-center bg-repeat-none bg-cover rounded-t-[40px]"></div>
      <div className="flex justify-center items-center h-[50px]">
        <h2 className="font-poppins">{recipeName}</h2>
      </div>
    </div>
  );
};

export default RecipeCardFront;
