import { useEffect, useRef } from "react";

export function useIntersectionObserver(
  callback: (isInView: boolean) => void,
  options = {},
) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options,
      },
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [callback, options]);

  return elementRef;
}
