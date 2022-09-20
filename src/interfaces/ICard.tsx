import IReward from "./IReward";
export default interface ICard {
  name: string;
  surname: string;
  avatar: string;
  background: string;
  rewards: IReward;
}
