import cx from "classnames";
import { NavLink } from "react-router-dom";
import navStyles from "../../styles/modules/nav.module.scss";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import type { PagesNav as TPageNav } from "../../types/PagesNav";

function NavLinks({ routes }: { routes: TPageNav[] }) {
  const classNameHandler = ({ isActive }: { isActive: boolean }) => (isActive ? cx(navStyles.link, navStyles.active) : navStyles.link);

  if (routes.length === 0) return <></>;

  return (
    <ul className={navStyles.list}>
      {routes.map(({ to, end, name }, index) => (
        <li key={index}>
          <NavLink {...{ className: classNameHandler, to, end }}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
export function PagesNav({ routes }: { routes: TPageNav[] }) {
  return (
    <nav className={navStyles.nav}>
      <NavLinks routes={routes} />
      <ThemeButton style={{ placeSelf: "center" }} />
    </nav>
  );
}
