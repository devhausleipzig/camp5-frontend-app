import { ComponentWithAs, IconProps } from "@chakra-ui/react";
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
    <div className="rounded-lg shadow-drop bg-ricewhite py-4 flex">
      <div className="bg-carrot flex-1">
        <CustomIcon to={`/search/${customData.title}`}>
          <customData.icon />
        </CustomIcon>
      </div>
      <span className="grow flex-2 text-darkbrown">{customData.title}</span>
    </div>
  );
};

export default ButtonsLong;
