import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useThemeContext } from "./context/ThemeContext";
import { routers } from "./Routers/routers";
import { PagesNav } from "./components/Nav/Pages";
import type { PagesNav as TPagesNav } from "./types/PagesNav";
import { Form } from "./components/Form/Form";

function App() {
  const { theme } = useThemeContext();
  const routes: TPagesNav[] = routers.map(({ path, end, name }) => ({
    to: path as string,
    name,
    end: end || undefined,
  }));
  const { user } = useAuth0();

  return !user ? (
    <Form />
  ) : (
    <div id="page" className={theme === "dark" ? theme : undefined}>
      <PagesNav routes={routes} user={user} />
      <main>
        <Routes>
          {routers.map(({ path, element, index }, key) => (
            <Route path={path} element={element} key={key} index={index} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
