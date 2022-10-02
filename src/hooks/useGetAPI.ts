import { Dispatch, useEffect, useState } from "react";

export enum Status {
  loading,
  done,
  error,
}
type TValue<T> = [Status, T];
function isURLValid(url: any) {
  if (typeof url !== "string") return false;
  try {
    new URL(url);
    return true;
  } catch {
    console.error("Is not a valid url. ", url);
    return false;
  }
}
export function useGetAPI<T>(
  url: string,
  initialValue: T
): [TValue<T>, (cb: (val: T) => T) => void] {
  const [value, setValues] = useState<TValue<T>>([
    Status.loading,
    initialValue,
  ]);
  const setValuesCb = (cb: (val: T) => T) => {
    setValues(prev => {
      prev[1] = cb(prev[1]);
      return [...prev];
    });
  };
  if (isURLValid(url))
    useEffect(() => {
      fetch(url)
        .then(data => {
          try {
            const json = data.json();
            return json;
          } catch {
            return null;
          }
        })
        .then(data => {
          return setValues(prev => {
            prev[0] = Status.done;
            data ? (prev[1] = data) : undefined;
            return [...prev];
          });
        })
        .catch(() => {
          setValues(prev => {
            prev[0] = Status.error;
            return [...prev];
          });
        });
    }, []);
  return [value, setValuesCb];
}
