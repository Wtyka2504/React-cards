export function getSystemTheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (!isDark && !isLight) return undefined;

  return isDark;
}
