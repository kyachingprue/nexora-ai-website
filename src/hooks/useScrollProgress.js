import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past a threshold and the
 * current scroll position, using a passive listener + rAF throttling.
 */
export default function useScrollProgress(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrollY(y);
      setScrolled(y > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { scrolled, scrollY };
}
