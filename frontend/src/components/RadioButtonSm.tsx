import React from "react";
import api from "../../src/utils/api";
import { Recipe } from "../../src/utils/types";

type Props = {
  allergen: string
}

const RadioButtonSm = ({allergen}: Props) => {

    return (
            <div className="form-check rounded-lg shadow-drop bg-ricewhite py-4">
              <label className="form-check-label flex justify-around w-full text-center text-darkbrown tracking-wide" htmlFor="flexCheckDefault">
              <input className="form-check-input appearance-none h-[22px] w-[22px] ml-4 rounded-full bg-green checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 cursor-pointer shadow-inner" type="checkbox" value="" id="flexCheckDefault">
                  </input>
                <span className="grow">{allergen}</span>
              </label>
                  </div>
    )
}

export default RadioButtonSm;