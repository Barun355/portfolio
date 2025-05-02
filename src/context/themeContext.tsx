import React, { createContext, useState } from "react";
import { Theme } from "../types";


export const ThemeContext = createContext({
    theme: "black",
    setTheme: (theme: Theme) => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    },
})


export function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState<Theme>(Theme.dark)

    const handleThemeChange = (theme: Theme) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }
    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
            {children}
        </ThemeContext.Provider>
    )
}