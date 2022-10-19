import React, { createContext, ReactNode, useContext, useState } from "react";
type Theme = "dark" | "light";
type ThemeProviderProps = { children?: any };
type ThemeContext = [Theme, () => void];
const ThemeLocalName = "mode";

const getTheme = () => {
  const localTheme = localStorage.getItem(ThemeLocalName) || getSystemTheme();

  if (isThemeValid(localTheme) === true) return localTheme as Theme;
  return "dark";
};

const getSystemTheme = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (!isDark && !isLight) return undefined;

  return isDark ? ("dark" as Theme) : ("light" as Theme);
};

const isThemeValid = (value: string | null | undefined) => {
  return (["dark", "light"] as Theme[]).some(theme => theme === value);
};

const saveThemeLocally = (value: Theme) => {
  localStorage.setItem(ThemeLocalName, value);
};

export const ThemeContext = createContext<ThemeContext>(["dark", () => {}]);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getTheme());
  const handler = () => {
    const value = theme === "dark" ? "light" : "dark";
    console.log(theme);
    setTheme(value);
    saveThemeLocally(value);
  };
  return (
    <ThemeContext.Provider value={[theme, handler]}>
      {children}
    </ThemeContext.Provider>
  );
}
