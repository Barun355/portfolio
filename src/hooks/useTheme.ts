import { useEffect, useState } from "react";
import { Theme } from "../types";


export const useTheme = (): {theme: Theme, updateTheme: () => void} => {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  function updateTheme() {
    if (theme === "black"){
      setTheme(Theme.light)
      localStorage.setItem("theme", Theme.light)
    } else {
      setTheme(Theme.dark)
      localStorage.setItem("theme", Theme.dark)
    }
  }

  useEffect(() => {
    let theme = localStorage.getItem("theme");

    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", Theme.dark);
      theme = Theme.dark
    }

    setTheme(theme === Theme.light ? Theme.light: Theme.dark)
  }, [theme]);

  return {theme, updateTheme};
};
