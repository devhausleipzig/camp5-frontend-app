import React, { ReactNode, useEffect, useState } from "react";
import { api, getRecipes } from "../api";
import { Recipe } from "../../src/utils/types";
import RadioButtonSm from "./RadioButtonSm";
import { Method } from "../utils/types";
import { Icon as BackIcon } from "./icons/back-icon"
import CustomIcon from "./CustomIcon";
import { useNavigate } from "react-router-dom"
import { ComponentWithAs, IconProps } from "@chakra-ui/react";

type Props = {
    customData: {
      icon: ComponentWithAs<"svg", IconProps>;
      title: string;
      link: string
    };
}

const CookingTechniques = ({ customData }: Props) => {
    
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

    const back = useNavigate()

    return (
    <>
    <div className="bg-carrot text-ricewhite">
          <CustomIcon to={`${back('/search')}`}>
              <customData.icon />
          </CustomIcon>
      </div>
      <div className="grid grid-cols-2 gap-4 content-center min-h-full">
              {methods.length && methods.map((method) => <RadioButtonSm title={method} />)}
          </div>
    </>
  );
};

export default CookingTechniques;
