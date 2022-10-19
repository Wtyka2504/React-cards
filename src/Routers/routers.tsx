import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PageCards } from "../Pages/Cards";
import { PageCustomHook } from "../Pages/CustomHook";
import { PageFooterGeneric } from "../Pages/FooterGeneric";
import { PageHuman } from "../Pages/Human";
import { PageMenu } from "../Pages/Menu";
import { PageModal } from "../Pages/Modal";
import { PagePost } from "../Pages/Post";
import { PageTable } from "../Pages/Table";
import type { PagesNav } from "../types/PagesNav";

type TRouters = RouteObject & { name: string; end?: boolean };
export const routers: TRouters[] = [
  {
    path: "/",
    name: "Cards",
    element: <PageCards></PageCards>,
    index: true,
  },
  {
    path: "human",
    name: "Human",
    element: <PageHuman></PageHuman>,
  },
  {
    path: "Menu",
    name: "Menu",
    element: <PageMenu></PageMenu>,
  },
  {
    path: "footer",
    name: "Footer",
    element: <PageFooterGeneric></PageFooterGeneric>,
  },
  {
    path: "customhook",
    name: "Custom Hook",
    element: <PageCustomHook></PageCustomHook>,
  },
  {
    path: "modal",
    name: "Modal",
    element: <PageModal></PageModal>,
  },
  {
    path: "post",
    name: "Post",
    element: <PagePost></PagePost>,
  },
  {
    path: "table",
    name: "Table",
    element: <PageTable></PageTable>,
  },
];

export const BrowserRouter = createBrowserRouter(
  routers.map(({ path, index, element }) => {
    return { path, index, element };
  })
);
