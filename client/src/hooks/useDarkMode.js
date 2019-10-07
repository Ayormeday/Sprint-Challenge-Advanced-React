import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStroage";

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, toggleMode];
};
