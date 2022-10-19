import { useEffect, useState } from "react";

export type Status = "idle" | "loading" | "done" | "error";

type TValue<T> = [Status, T];
function isURLValid(url: string) {
  if (typeof url !== "string") return false;
  try {
    return new URL(url);
  } catch {
    throw `Is not a valid url. ${url}`;
  }
}
export function useGetAPI<T>(url: string, initialValue: T) {
  const [value, setValues] = useState<TValue<T>>(["idle", initialValue]);
  const setValuesCb = (cb: (val: T) => T) => {
    setValues(prev => [prev[0], cb(prev[1])]);
  };

  if (isURLValid(url) === false) return [value, setValuesCb];

  useEffect(() => {
    setValues(([_, data]) => ["loading", data]);
    fetch(url)
      .then(data => {
        try {
          const json = data.json();
          return json;
        } catch {
          return null;
        }
      })
      .then(data => setValues(() => ["done", data]))
      .catch(() => {
        setValues(prev => ["error", prev[1]]);
      });
  }, [value]);

  return [value, setValuesCb];
}
