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
    []
  );
  const [status, response] = values;

  return (
    <div>
      {status === Status.loading ? <p>Loading...</p> : undefined}
      {status === Status.error ? <p>Błąd</p> : undefined}
      {status === Status.done ? <Posts posts={response} /> : undefined}
    </div>
  );
}
