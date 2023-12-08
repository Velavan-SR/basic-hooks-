/* eslint-disable no-undef */
import React, { useState } from "react";
import "./App.css";
import UseContext from "./Components/UseContext";

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      <ToggleTheme.Provider value={state}>
        <UseContext />
      </ToggleTheme.Provider>
    </>
  );
}

export default App;
