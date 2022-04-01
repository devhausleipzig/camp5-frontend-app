import React, { ReactNode, useEffect, useState } from "react";
import { api, getRecipes } from "../api";
import { Recipe } from "../../src/utils/types";
import RadioButtonSm from "./RadioButtonSm";
import { Method } from "../utils/types";
// import { useHistory } from "react-router-dom"


const CookingTechniques = () => {
    const methods = [
        "chop",
        "dice",
        "grate",
        "press",
        "blend",
        "braise",
        "boil",
        "fry",
        "bake",
        "grill"
    ]

    // const history = useHistory()
    // history.goBack()

  return (
    <div className="grid grid-cols-2 gap-4 content-center min-h-full">
      {methods.length &&
        methods.map((method) => <RadioButtonSm title={method} />)}
        
    </div>
  );
};

export default CookingTechniques;
