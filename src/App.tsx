import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";
import CardWrapper from "./components/CardWrapper";
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
function App() {
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
        ></Card>
      );
    }
  );
  return (
    <div className="App">
      <CardWrapper>{cards}</CardWrapper>
    </div>
  );
}

export default App;
