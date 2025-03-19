import { createContext, ReactNode, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type ThemeType = {
    theme: string;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useLocalStorage("theme1", "light");

    const toggleTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
