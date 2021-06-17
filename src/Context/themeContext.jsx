import React from "react";

const ThemeContext = React.createContext(null);
const ThemeContextProvider = ThemeContext.Provider;
const ThemeContextConsumer = ThemeContext.Consumer;

export { ThemeContext, ThemeContextConsumer, ThemeContextProvider };
