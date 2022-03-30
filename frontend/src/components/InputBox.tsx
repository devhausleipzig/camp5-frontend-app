import { FormEvent, useState } from "react";
import { InputBoxProps } from "../utils/types";

export default function InputBox({inputType = 'text' ,inputValue = '', placeholder = '', dataHandler}: InputBoxProps) {
    const [data, setData] = useState('');
    function inputHandler (value: string){
        dataHandler(value)
        setData(value)
    }
  return (
    <div className="mx-auto w-[90%] p-2"> 
      <input className="block w-3/4	mx-auto rounded-md p-1 text-green"
      type={inputType} placeholder={placeholder} value={data} 
      onChange={(e)=>inputHandler(e.target.value)}
      />
    </div>
  );
}
