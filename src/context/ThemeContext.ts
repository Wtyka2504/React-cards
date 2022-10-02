import { createContext, useContext } from "react";

export type TTheme = "dark" | "light";

const GetPreferColorScheme: () => TTheme | undefined = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (!isDark && !isLight) return undefined;

  return isDark ? "dark" : "light";
};
export const GetTheme = () => {
  const themes: TTheme[] = ["dark", "light"];
  const theme =
    localStorage.getItem("mode") || GetPreferColorScheme() || themes[0];
  const isValid = themes.some(value => value === theme);
  return isValid ? theme : themes[0];
};

export const ThemeContext = createContext("dark");
