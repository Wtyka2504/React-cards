import TLink from "./TLink";
import style from "./Link.module.scss";
import cx from "classnames";
export default ({ name, onClick, active }: TLink) => {
  return (
    <li
      className={[
        style["link-item"],
        active ? cx(style["link-item"], style["active"]) : "",
      ].join(" ")}
    >
      <button className={style.btn} onClick={onClick}>
        {name}
      </button>
    </li>
  );
};
