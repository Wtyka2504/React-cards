import type { ReactNode } from "react";
export type TReward = {
  gold?: number;
  silver?: number;
  bronze?: number;
};
export type TCardWrapper = {
  children: TCard[];
};
export type TCard = {
  name: string;
  surname: string;
  avatar: string;
  background: string;
  rewards: TReward;
};
