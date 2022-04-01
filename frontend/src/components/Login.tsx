import React, { ReactNode, useEffect, useState } from "react";
import ButtonsLong from "./ButtonsLong";
import { Icon as HeartIcon } from "./icons/heart-icon";
import { Icon as LibIcon } from "./icons/library-icon";
import { Icon as UploadIcon } from "./icons/upload-icon";
import { Icon as UpdateIcon } from "./icons/preferences-icon";

const ProfileButtons = () => {
  let profileButtons = [
    {
      title: "favorites",
      icon: HeartIcon,
    },
    {
      title: "library",
      icon: LibIcon,
    },
    {
      title: "upload recipe",
      icon: UploadIcon,
    },
    {
      title: "update preferences",
      icon: UpdateIcon,
    },
  ];

  return (
      <div className="grid grid-cols-1 gap-4 content-center min-h-full text-darkbrown mt-16">
        {profileButtons.map((title) => (
          <ButtonsLong customData={title} />
        ))}
      </div>
  );
};

export default ProfileButtons;
