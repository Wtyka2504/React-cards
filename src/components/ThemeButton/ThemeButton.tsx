import styles from "./ThemeButton.module.scss";
import cx from "classnames";
import {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  useContext,
  useState,
} from "react";
import { ThemeContext } from "../../context/ThemeContext";
type ThemeButtonProps = {
  style?: CSSProperties;
};
export function ThemeButton({ style }: ThemeButtonProps) {
  const [theme, themeHandler] = useContext(ThemeContext);

  return (
    <button
      className={cx(styles.btn, theme === "dark" ? styles.active : undefined)}
      onClick={themeHandler as unknown as MouseEventHandler<HTMLButtonElement>}
      style={style}
    >
      <div className={styles.circle}></div>
    </button>
  );
}
