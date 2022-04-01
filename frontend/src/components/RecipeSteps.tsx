import { setgroups } from "process";
import React from "react";
import { RecipeStep } from "../utils/types";

export type RecipeStepProps = {
  steps: RecipeStep[];
  root: boolean;
};

const RecipeSteps = ({ steps, root }: RecipeStepProps) => {
  return (
    <div>
      {steps.map((e: RecipeStep, i: number) => (
        <div className="p-4">
          <p>{`${e.position}. ${e.items[0].ingredient.name} ${e.method}`}</p>
          <p>{e.note}</p>
          <div className={`${root ? "pl-8" : ""} `}>
            <RecipeSteps steps={e.substeps} root={false} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default RecipeSteps;
