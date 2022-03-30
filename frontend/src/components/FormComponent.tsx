import InputBox from "./InputBox";
import { InputBoxProps } from "../utils/types";
import { FormEvent, ReactElement, useState } from "react";
import FormButton from "./FormButton";
type FormProps = {
    formType : 'login' | 'signup',
    btnReact: ReactElement
};

export default function FormComponent({formType, btnReact}:FormProps) {
    //TODO: make this FORM component, reuseble and general
    //TODO: use forloop to create the inputs and 'useStates'  
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function formDataHandler(e:FormEvent){
        e.preventDefault();
        try {
            console.log('usrName: ',userName);
            console.log('usrEmail: ',userEmail);
            console.log('usrPassword: ',userPassword);
        } catch (error) {
            console.log('Err:FormSubmit: ', error);
        }
        setUserName('');
        setUserEmail('');
        setUserPassword('');
    }
  return (
    <div className="border-r-green border rounded-md mx-auto w-1/3 shadow-green bg-lightgreen">
      <form action="" method="post" onSubmit={formDataHandler}>
        { formType=='signup' &&
        <InputBox 
        inputType="text" inputValue="" placeholder="your name." dataHandler={setUserName}
        />}

        <InputBox 
        inputType="email" inputValue="" placeholder="your email." dataHandler={setUserEmail}
        />
        <InputBox
          inputType="password"
          inputValue=""
          placeholder="your password." dataHandler={setUserPassword}
        />
        {btnReact}
        {/* <FormButton type="submit" label={ formType=='login'? 'Login' : 'Signup'} /> */}
      </form>
    </div>
  );
}
