import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";
const menu = [
  {
    link: "/faktury",
    name: "faktury",
  },
  {
    link: "/dokumenty",
    name: "dokumenty",
  },
  {
    link: "/odczyty",
    name: "odczyty",
  },
  {
    link: "/kontakt",
    name: "kontakt",
  },
];

export default () => {
  return (
    <ul className={styles["menu"]}>
      {menu.map(({ name, link }, index) => (
        <MenuItem key={index} name={name} link={link} />
      ))}
    </ul>
  );
};
