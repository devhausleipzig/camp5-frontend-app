import React, { useState } from "react";
import { api } from "../../src/api";
import { Recipe } from "../../src/utils/types";
import { Icon as CloseIcon } from "./icons/close-icon";

type Props = {
  title: string;
};

const RadioButtonLg = ({ title }: Props) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="form-check rounded-lg shadow-drop bg-ricewhite py-4">
      <label
        className="form-check-label flex justify-around w-full text-center tracking-wide text-ricewhite"
        htmlFor="flexCheckDefault"
      >
        <div
          className="form-check-input appearance-none h-[22px] w-[22px] ml-4 rounded-full bg-green checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 cursor-pointer shadow-inner flex justify-center items-center"
          id="flexCheckDefault"
          onClick={() => setChecked(!checked)}
        >
          {checked && <CloseIcon />}
        </div>
        <span className="grow text-darkbrown">{title}</span>
      </label>
    </div>
  );
};

export default RadioButtonLg;
