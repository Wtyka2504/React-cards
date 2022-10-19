import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PageCards } from "../Pages/Cards";
import { PageCustomHook } from "../Pages/CustomHook";
import { PageFooterGeneric } from "../Pages/FooterGeneric";
import { PageHuman } from "../Pages/Human";
import { PageMenu } from "../Pages/Menu";
import { PageModal } from "../Pages/Modal";
import { PagePost } from "../Pages/Post";
import { PageTable } from "../Pages/Table";

type TRouters = RouteObject & { name: string; end?: boolean };

export const routers: TRouters[] = [
  {
    path: "/",
    name: "Cards",
    element: <PageCards />,
    index: true,
    end: true,
  },
  {
    path: "human",
    name: "Human",
    element: <PageHuman />,
  },
  {
    path: "Menu",
    name: "Menu",
    element: <PageMenu />,
  },
  {
    path: "footer",
    name: "Footer",
    element: <PageFooterGeneric />,
  },
  {
    path: "customhook",
    name: "Custom Hook",
    element: <PageCustomHook />,
  },
  {
    path: "modal",
    name: "Modal",
    element: <PageModal />,
  },
  {
    path: "post",
    name: "Post",
    element: <PagePost />,
  },
  {
    path: "table",
    name: "Table",
    element: <PageTable />,
  },
];

export const BrowserRouters = createBrowserRouter(
  routers.map(({ path, index, element }) => ({ path, index, element })),
);
