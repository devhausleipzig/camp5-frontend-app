import React, { useState } from "react";
import api from "../utils/api";
import { Recipe } from "../utils/types";
import CustomIcon from "./CustomIcon";
import { Icon as CloseIcon } from "./icons/close-icon"

type Props = {
  icon: string,
  title: string
}

const ButtonsLong = ({title, icon}: Props) => {

    return (
            <div className="rounded-lg shadow-drop bg-ricewhite py-4 flex">
                <div className="bg-carrot flex-1">
                  <CustomIcon to={`/search/${title}`}>
                    <CloseIcon />
                  </CustomIcon></div>
                <span className="grow flex-2 text-darkbrown">{title}</span>
            </div>
    )
}

export default ButtonsLong;