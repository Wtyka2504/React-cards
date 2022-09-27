import { useState } from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { CardWrapper } from "./components/Card/Card";
import * as CardData from "./constants/cards";
import navStyles from "./styles/modules/nav.module.scss";
type TNav = {
  [path: string]: {
    name: string;
    element?: JSX.Element;
  };
};
const nav: TNav = {
  "/": {
    name: "Zadanie 1-3",
    element: (
      <CardWrapper>
        {CardData.data.map(card => {
          const { gold, bronze, silver } = card;

          return { ...card, rewards: { gold, bronze, silver } };
        })}
      </CardWrapper>
    ),
  },
  footer: {
    name: "Zadanie 4",
  },
};
function App() {
  const paths = Object.entries(nav);
  return (
    <BrowserRouter>
      <nav>
        <ul className={navStyles.list}>
          {paths.map(([path, { name }], index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? [navStyles.link, navStyles.active].join(" ")
                      : navStyles.link
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Routes>
        {paths.map(([path, { element }], index) => {
          return <Route path={path} element={element} key={index}></Route>;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
