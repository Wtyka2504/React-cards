import { useEffect, useRef, MutableRefObject, RefObject } from "react";

export function useClickOutside(callback: () => void) {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = ({ target }: MouseEvent) => {
      const { current } = node;
      if (current?.contains(target as Node)) return;
      callback();
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [node]);

  return node;
}
