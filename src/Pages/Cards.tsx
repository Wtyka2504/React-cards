import { CardWrapper } from "../components/Card/Card";
import cards from "../constants/cards";

export function PageCards() {
  return (
    <CardWrapper>
      {cards.map(card => {
        const { gold, bronze, silver } = card;

        return { ...card, rewards: { gold, bronze, silver } };
      })}
    </CardWrapper>
  );
}
