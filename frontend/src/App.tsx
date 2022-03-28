import { useState } from "react";
import logo from "./logo.svg";
import MyComp from "./layout/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <MyComp />
        </header>
      </div>
    </div>
  );
}

export default App;
