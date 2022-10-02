import type { TTheme } from "./context/ThemeContext";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { CardWrapper } from "./components/Card/Card";
import { Menu } from "./components/Menu/Menu";
import { FooterGeneric } from "./components/FooterGeneric/FooterGeneric";
import { Link } from "./components/Link/Link";
import { Human } from "./components/Human/Human";
import { Post } from "./components/Post/Post";
import CardData from "./constants/cards";
import MenuData from "./constants/menu";
import FooterData from "./constants/footer";
import TableData from "./constants/table";
import navStyles from "./styles/modules/nav.module.scss";
import cx from "classnames";
import { Table } from "./components/Table/Table";
import { CustomHook } from "./components/CustomHook/CustomHook";
import { Modal } from "./components/Modal/Modal";
import { useContext, useState } from "react";
import { ThemeContext, GetTheme } from "./context/ThemeContext";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";
type TNav = {
  [path: string]: {
    name: string;
    element?: JSX.Element;
  };
};
const navObject: TNav = {
  index: {
    name: "Cards",
    element: (
      <CardWrapper>
        {CardData.map(card => {
          const { gold, bronze, silver } = card;

          return { ...card, rewards: { gold, bronze, silver } };
        })}
      </CardWrapper>
    ),
  },
  menu: {
    name: "Menu",
    element: <Menu>{MenuData}</Menu>,
  },
  footer: {
    name: "Footer",
    element: <FooterGeneric {...FooterData}></FooterGeneric>,
  },
  human: {
    name: "Human",
    element: <Human />,
  },
  post: {
    name: "Posts",
    element: <Post />,
  },
  table: {
    name: "Table",
    element: <Table data={TableData} />,
  },
  hook: {
    name: "Hook",
    element: <CustomHook />,
  },
  modal: {
    name: "Modal",
    element: <Modal />,
  },
};

const routesObject: TNav = {
  ...navObject,
};
for (const { name, link } of MenuData) {
  routesObject[name] = {
    name,
    element: (
      <>
        <Link href={"menu"} name="powrót" />
        <span style={{ color: "whitesmoke", padding: "1rem" }}>{name}</span>
      </>
    ),
  };
}
function App() {
  const [theme, setTheme] = useState<TTheme>(
    useContext(ThemeContext) as TTheme
  );
  const nav = Object.entries(navObject);
  const routes = Object.entries(routesObject);
  const themeHandler = () =>
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  console.log(theme);
  return (
    <ThemeContext.Provider value={theme}>
      <div id="page" className={theme}>
        <BrowserRouter>
          <nav className={navStyles.nav}>
            <ul className={navStyles.list}>
              {nav.map(([to, { name }], index) => {
                const className = ({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? cx(navStyles.link, navStyles.active)
                    : navStyles.link;
                return (
                  <li key={index}>
                    <NavLink
                      {...{ className, to: to === "index" ? "/" : to }}
                      end
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <ThemeButton
              onClick={themeHandler}
              active={theme === "dark"}
              style={{ placeSelf: "center" }}
            />
          </nav>
          <main>
            <Routes>
              <Route path="/*">
                {routes.map(([path, { element }], index) => {
                  const props = path === "index" ? { index: true } : { path };
                  return (
                    <Route
                      {...{
                        ...props,
                      }}
                      element={element}
                      key={index}
                    ></Route>
                  );
                })}
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
