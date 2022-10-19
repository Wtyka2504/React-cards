import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { BrowserRouter, routers } from "./Routers/routers";
import { PagesNav } from "./components/Nav/Pages/Pages";
import { RouterProvider } from "react-router-dom";
import type { PagesNav as TPagesNav } from "./types/PagesNav";

function App() {
  const [theme, _] = useContext(ThemeContext);
  const routes: TPagesNav[] = routers.map(({ path, end, name }) => {
    return { to: path as string, name, end: end ? end : undefined };
  });

  return (
    <div id="page" className={theme === "dark" ? theme : undefined}>
      <PagesNav routes={routes}></PagesNav>
      <main>
        <RouterProvider router={BrowserRouter}></RouterProvider>
      </main>
    </div>
  );
}

export default App;
