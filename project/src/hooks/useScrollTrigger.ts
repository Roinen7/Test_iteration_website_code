import { useEffect, useRef, useState } from 'react';

interface UseScrollTriggerOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollTrigger(options: UseScrollTriggerOptions = {}) {
  const { threshold = 0.2, rootMargin = '0px' } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasBeenInView(true);
          // Only observe once
          observer.unobserve(entry.target);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isInView, hasBeenInView };
}
