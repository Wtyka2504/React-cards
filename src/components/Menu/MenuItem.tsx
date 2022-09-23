import TMenuItem from "./TMenuItem";
import styles from "./Menu.module.scss";

export default ({ name, link }: TMenuItem) => {
  return (
    <li className={styles["menu-item"]}>
      <a href={link} target="_blank" className={styles["menu-link"]}>
        {name}
      </a>
    </li>
  );
};
