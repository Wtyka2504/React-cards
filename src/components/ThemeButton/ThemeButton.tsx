import cx from "classnames";
import { CSSProperties, MouseEventHandler, useContext } from "react";
import styles from "./ThemeButton.module.scss";
import { useThemeContext } from "../../context/ThemeContext";

type ThemeButtonProps = {
  style?: CSSProperties;
};
export function ThemeButton({ style }: ThemeButtonProps) {
  const theme = useThemeContext();
  return (
    <button
      className={cx(
        styles.btn,
        theme.theme === "dark" ? styles.active : undefined,
      )}
      onClick={theme.handleChangeTheme}
      style={style}
    >
      <div className={styles.circle} />
    </button>
  );
}
