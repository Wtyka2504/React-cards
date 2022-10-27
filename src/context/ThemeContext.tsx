import { createContext, ReactNode, useContext, useState } from "react";
import {
  saveItemLocalStorage,
  getItemLocalStorage,
} from "../utils/localStorage";
import { getSystemTheme } from "../utils/system";

type Theme = "dark" | "light";
type ThemeProviderProps = { children?: ReactNode };
type TThemeContext =
  | { theme: Theme; handleChangeTheme: () => void }
  | undefined;
const ThemeLocalName = "mode";

const getTheme = () => {
  const localTheme = getItemLocalStorage(ThemeLocalName) || getSystemTheme();

  if (localTheme === "dark" || localTheme === "light") return localTheme;
  return "dark";
};
export const ThemeContext = createContext<TThemeContext>(undefined);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getTheme());
  const handleChangeTheme = () => {
    const value = theme === "dark" ? "light" : "dark";

    setTheme(value);
    saveItemLocalStorage(ThemeLocalName, value);
  };
  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
