import { Status, useGetAPI } from "../../hooks/useGetAPI";
import { Posts } from "../Post/Post";

type TResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export function CustomHook() {
  const [values, setValues] = useGetAPI<TResponse[]>(
    "https://jsonplaceholder.typicode.com/posts",
    [],
  );
  const [status, response] = values;

  return (
    <div>
      {status === "loading" ? <p>Loading...</p> : undefined}
      {status === "error" ? <p>Błąd</p> : undefined}
      {status === "done" ? <Posts posts={response} /> : undefined}
    </div>
  );
}
