import React, { ReactNode, useEffect, useState } from "react";
import { api, getRecipes } from "../api";
import { Recipe } from "../../src/utils/types";
import RadioButtonSm from "./RadioButtonSm";
import { Icon as BackIcon } from "./icons/back-icon"
import CustomIcon from "./CustomIcon";


const Time = () => {
    
    const times = [
        "very fast",
        "quick",
        "medium",
        "long",
        "very long",
    ]

  return (
    <>
    <div className="text-ricewhite absolute">
          <CustomIcon to={`/search`}>
              <BackIcon className="icon-shadow"/>
          </CustomIcon>
      </div>
    <div className="grid grid-cols-1 gap-4 content-center min-h-full">
      {times.length &&
        times.map((time) => <RadioButtonSm title={time} />)}
        
    </div>
    </>
  );
};

export default Time;
