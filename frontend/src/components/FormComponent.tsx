import InputBox from "./InputBox";
import { InputBoxProps, InputElementTypes as ieTypes } from "../utils/types";
import { FormEvent, ReactElement, useEffect, useState } from "react";
import FormButton from "./FormButton";
type FormProps = {
  inputObjs: [];
  buttonObjs: [];
};

export default function FormComponent({ inputObjs, buttonObjs }: FormProps) {
  const [inputFields, setInputField] = useState([]);
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    setInputField(inputObjs);
    setButtons(buttonObjs);
  }, []);

  function inputBoxsDataHandler(index: any, event: any) {
    console.log(index, event);
  }
  function formDataHandler(e: FormEvent) {
    e.preventDefault();
    console.log("form done");
    try {
      // console.log('usrName: ',userName);
    } catch (error) {
      console.log("Err:FormSubmit: ", error);
    }
  }
  return (
    <div className="border-r-green border rounded-md mx-auto w-1/3 shadow-green bg-lightgreen">
      <form action="" method="post" onSubmit={formDataHandler}>
        {inputFields.map((ipt, index) => {
          return (
            // I used 'index' , instead of 'key' (key is reserved for React)
            <InputBox
              key={index}
              index={index}
              {...ipt}
              dataHandler={inputBoxsDataHandler}
            />
          );
        })}

        {buttons.map((btn, index) => {
          return <FormButton key={index} index={index} {...btn} />;
        })}
      </form>
    </div>
  );
}
