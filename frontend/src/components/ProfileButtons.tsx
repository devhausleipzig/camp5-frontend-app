import React, { ReactNode, useEffect, useState } from "react";
import ButtonsLong from "./ButtonsLong";
import { Icon as CtIcon } from "./icons/ct-icon";
import { Icon as TimeIcon } from "./icons/time-icon";
import { Icon as IngredientsIcon } from "./icons/ingredients-icon";
import { Icon as CostIcon } from "./icons/cost-icon";

const ProfileButtons = () => {
  let profileButtons = [
    {
      title: "favorites",
      icon: CtIcon,
    },
    {
      title: "library",
      icon: IngredientsIcon,
    },
    {
      title: "upload recipe",
      icon: TimeIcon,
    },
    {
      title: "update preferences",
      icon: CostIcon,
    },
  ];

  return (
      <div className="grid grid-cols-1 gap-4 content-center min-h-full text-darkbrown">
        {profileButtons.map((title) => (
          <ButtonsLong customData={title} />
        ))}
      </div>
  );
};

export default ProfileButtons;
