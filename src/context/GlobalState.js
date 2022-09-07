import React, { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const initialState = {
  dark: false,
};

export const GlobalContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggleDark = () => setDark((prevState) => !prevState);

  useEffect(() => {
    dark
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.setAttribute("data-theme", "light");
  }, [dark]);

  const value = {
    dark,
    toggleDark,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
