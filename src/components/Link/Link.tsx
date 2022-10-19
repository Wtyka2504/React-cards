import cx from "classnames";
import style from "./Link.module.scss";

type TLink = {
  href: string;
  name: string;
};
export function Link({ href, name }: TLink) {
  return (
    <a className={style.link} href={href}>
      {name}
    </a>
  );
}
