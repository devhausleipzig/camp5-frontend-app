import { useEffect, useState } from "react";
import { createRoutesFromChildren } from "react-router-dom";
import Searchbar from "./components/searchbar";
import FormComponent from "./components/FormComponent";
import logo from "./logo.svg";
import { getRecipes, getFilteredRecipes } from "./utils/fetchRecipes";
import { Recipe,InputBoxProps, FormButtonProps , InputElementTypes as ieTypes , ButtonElementTypes as btnTypes } from "./utils/types";
import FormButton from "./components/FormButton";

function App() {
  const [count, setCount] = useState(0);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

  async function fetchAllRecipes(): Promise<Recipe[]> {
    const response: Recipe[] = await getRecipes();
    setAllRecipes(response);
    return allRecipes;
  }
  useEffect(() => {
    fetchAllRecipes();
  }, []);

  const formbuttons =[
    {   label:'Login',
    type:'submit' as btnTypes
  },
  {
    label:'Signup',
    type:'submit' as btnTypes
  }
  ]

  const formInputs =
    [
      {
        inputType: "text" as ieTypes,
        inputValue: "",
        placeholder: "your name",
        isRequired: true,
      },
      {
        inputType: "email" as ieTypes,
        inputValue: "",
        placeholder: "your email",
        isRequired: false,
      },
      {
        inputType: "password" as ieTypes,
        inputValue: "",
        placeholder: "your password",
        isRequired: false,
      },
    ]
  
  return(
    <FormComponent inputObjs={formInputs} buttonObjs={formbuttons} />
  )
/*
  return (
    <div className="App">
      <FormComponent />
      <Searchbar recipes={allRecipes} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-green-500">Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
*/
}




export default App;