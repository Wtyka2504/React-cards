import { Children } from "react";
import Link from "./Link";
import TLinks from "./TLinks";
import style from "./Link.module.scss";
import cx from "classnames";

const Links = ({ children }: TLinks) => {
  if (!children) children = [];

  return (
    <ul className={style["link-list"]}>
      {children.map(({ name, onClick, active }, index) => (
        <Link key={index} name={name} active={active} onClick={onClick} />
      ))}
    </ul>
  );
};

export default Links;
