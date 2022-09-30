import style from "./Link.module.scss";
import cx from "classnames";
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
