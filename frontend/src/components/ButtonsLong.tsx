import { ComponentWithAs, IconProps } from "@chakra-ui/react";
import { fill } from "lodash";
import React, { useState } from "react";
import api from "../utils/api";
import { Recipe } from "../utils/types";
import CustomIcon from "./CustomIcon";
import { Icon as CloseIcon } from "./icons/close-icon";

type Props = {
  customData: {
    icon: ComponentWithAs<"svg", IconProps>;
    title: string;
  };
};

const ButtonsLong = ({ customData }: Props) => {
  console.log(customData);
  return (
    <div className="rounded-lg shadow-drop bg-ricewhite flex">
      <div className="bg-carrot w-[35%] h-full m-0 justify-center items-center text-ricewhite flex rounded-l-lg">
        <CustomIcon to={`/search/${customData.title}`}>
          <customData.icon />
        </CustomIcon>
      </div>
      <span className="grow flex-2 text-darkbrown py-4 text-center">
        {customData.title}
      </span>
    </div>
  );
};

export default ButtonsLong;
