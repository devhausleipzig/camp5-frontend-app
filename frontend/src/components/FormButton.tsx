import { useState } from "react";
import { FormButtonProps , ButtonElementTypes } from "../utils/types";


export default function FormButton({index , label = 'click', type = 'button'}:FormButtonProps) {
  return (
    <div className="mx-auto w-[90%] p-1"> 
    <button  className="p-2 px-5 bg-green font-semibold text-darkbrown rounded-md mx-auto block"
    type={type}
    >
        {label}
    </button>
    </div>
  );
}
