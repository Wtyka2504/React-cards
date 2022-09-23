import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import CardWrapper from "./components/Card/CardWrapper";
import Links from "./components/Links/Links";
import Menu from "./components/Menu/Menu";
import indexStyles from "./index.module.scss";
import cx from "classnames";
import FooterGeneric from "./components/FooterGeneric/FooterGeneric";
const data = [
  {
    name: "Alfred",
    surname: "Bogucki",
    avatar:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    background:
      "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
    bronze: 1,
    silver: 3,
    gold: 1,
  },
  {
    name: "Andrzej",
    surname: "Mikucki",
    avatar:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    background:
      "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
    bronze: 1,
    silver: 8,
    gold: 0,
  },
];
const cards = data.map(
  ({ name, surname, avatar, background, gold, bronze, silver }, index) => {
    return (
      <Card
        key={index}
        name={name}
        surname={surname}
        avatar={avatar}
        background={background}
        rewards={{
          gold,
          bronze,
          silver,
        }}
      />
    );
  }
);
const links = [
  {
    name: "Zadania 1-3",
    active: true,
    children: () => {
      return <CardWrapper>{cards}</CardWrapper>;
    },
  },
  {
    name: "Zadania 4",
    active: false,
    children: () => {
      return <Menu />;
    },
  },
  {
    name: "Zadanie 5",
    active: false,
    children: () => <FooterGeneric />,
  },
];
function App() {
  const [views, setViews] = useState(links);
  const updateView = (index: number) => {
    setViews(
      views.map((view, i) => {
        view.active = index === i;
        return view;
      })
    );
  };
  return (
    <div className="App">
      <Links>
        {views.map((view, index) => {
          const onClick = () => {
            updateView(index);
          };
          return { ...view, onClick };
        })}
      </Links>
      {views.map((link, index) => {
        return (
          <div
            className={cx(
              indexStyles.display,
              link.active ? indexStyles.active : ""
            )}
            key={index}
          >
            {link.children()}
          </div>
        );
      })}
    </div>
  );
}

export default App;
