import React, { ReactNode, useEffect, useState } from "react";
import { api, getRecipes } from "../api";
import { Recipe } from "../../src/utils/types";
import RadioButtonSm from "./RadioButtonSm";


const Cost = () => {
    
    const costs = [
        "very cheap",
        "cheap",
        "medium",
        "expensive",
        "very expensive"
    ]

  return (
    <div className="grid grid-cols-1 gap-4 content-center min-h-full">
      {costs.length &&
        costs.map((cost) => <RadioButtonSm title={cost} />)}
        
    </div>
  );
};

export default Cost;
