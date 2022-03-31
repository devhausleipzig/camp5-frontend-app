import React, { ReactNode, useEffect, useState } from "react";
import ButtonsLong from "./ButtonsLong";

const SearchButtons = () => {


    let profileButtons = [
      {
        title: 'cooking techniques',
        icon: 'ct-icon.tsx'
    },
      {
        title: 'ingredient',
        icon: 'ingredients-icon.tsx'
      },
      {
        title: 'time',
        icon: 'time.tsx'
      },
      {
        title: 'cost',
        icon: 'cost-icon.tsx'
      }
    ]

    return (
          <div className="grid grid-cols-2 gap-4 content-center min-h-full text-darkbrown">
            <ButtonsLong title={profileButtons[1].title} icon={profileButtons[1].icon} />)
          </div>
    )
}

export default SearchButtons;