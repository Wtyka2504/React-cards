import styles from "./Menu.module.scss";

type TMenuItem = {
  link: string;
  name: string;
};
type TMenu = {
  children: TMenuItem[];
};
export function MenuItem({ name, link }: TMenuItem) {
  return (
    <li className={styles["menu-item"]}>
      <a href={link} target="_self" className={styles["menu-link"]}>
        {name}
      </a>
    </li>
  );
}

export function Menu({ children }: TMenu) {
  return (
    <ul className={styles["menu"]}>
      {children.map(({ name, link }, index) => (
        <MenuItem key={index} name={name} link={link} />
      ))}
    </ul>
  );
}
