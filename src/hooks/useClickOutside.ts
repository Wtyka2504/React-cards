import { useEffect, useRef } from "react";

export function useClickOutside(callback: () => void) {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = ({ target }: MouseEvent | TouchEvent) => {
      const { current } = node;
      if (current?.contains(target as Node)) return;
      callback();
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [node]);

  return node;
}
