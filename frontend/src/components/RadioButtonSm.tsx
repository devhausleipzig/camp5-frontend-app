import React, { useState } from "react";
import api from "../../src/utils/api";
import { Recipe } from "../../src/utils/types";

type Props = {
  allergen: string
}

const RadioButtonSm = ({allergen}: Props) => {
  const [checked, setChecked] = useState(false)
    return (
            <div className="form-check rounded-lg shadow-drop bg-ricewhite py-4">
              <label className="form-check-label flex justify-around w-full text-center text-darkbrown tracking-wide" htmlFor="flexCheckDefault">
              <div className="form-check-input appearance-none h-[22px] w-[22px] ml-4 rounded-full bg-green checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 cursor-pointer shadow-inner flex justify-center items-center" id="flexCheckDefault" onClick={() => setChecked(!checked)}>
                {checked && 'x'}
                  </div>
                <span className="grow">{allergen}</span>
              </label>
                  </div>
    )
}

export default RadioButtonSm;