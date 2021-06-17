import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./Components/parent";
import { ThemeContext } from "./Context/themeContext";

function App() {
  const [theme, setTheme] = useState("light-theme");
  const changeTheme = () => {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };
  return (
    <React.Fragment>
      <ThemeContext.Provider value={theme}>
        <button onClick={changeTheme}>
          {theme === "dark-theme" ? "dark" : "light"}
        </button>
        <Parent />
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
