import styles from "./ThemeButton.module.scss";
import cx from "classnames";
import { CSSProperties } from "react";
type TThemeButtonProps = {
  onClick?: () => void;
  active: boolean;
  style?: CSSProperties;
};
export function ThemeButton({ onClick, active, style }: TThemeButtonProps) {
  return (
    <button
      className={cx(styles.btn, active ? styles.active : undefined)}
      onClick={onClick}
      style={style}
    >
      <div className={styles.circle}></div>
    </button>
  );
}
