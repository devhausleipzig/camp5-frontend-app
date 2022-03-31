import React, { ReactNode, useEffect, useState } from "react";
import ButtonsLong from "./ButtonsLong";
import { Icon as CtIcon } from "./icons/ct-icon";
import { Icon as TimeIcon } from "./icons/time-icon";
import { Icon as IngredientsIcon } from "./icons/ingredients-icon";
import { Icon as CostIcon } from "./icons/cost-icon";

const SearchButtons = () => {
  let profileButtons = [
    {
      title: "cooking techniques",
      icon: CtIcon,
    },
    {
      title: "ingredient",
      icon: IngredientsIcon,
    },
    {
      title: "time",
      icon: TimeIcon,
    },
    {
      title: "cost",
      icon: CostIcon,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 content-center min-h-full text-darkbrown">
      <ButtonsLong customData={profileButtons[0]} />
      <ButtonsLong customData={profileButtons[1]} />
      <ButtonsLong customData={profileButtons[2]} />
      <ButtonsLong customData={profileButtons[3]} />
    </div>
  );
};

export default SearchButtons;
