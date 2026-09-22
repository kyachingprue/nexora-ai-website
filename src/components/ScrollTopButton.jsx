import { AnimatePresence, motion } from "motion/react";
import { HiArrowUp } from "react-icons/hi2";
import useScrollProgress from "../hooks/useScrollProgress.js";

export default function ScrollTopButton() {
  const { scrolled } = useScrollProgress(560);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="focus-ring fixed right-5 bottom-5 z-30 grid h-12 w-12 place-items-center rounded-full border border-ember/40 bg-surface/90 text-ink shadow-ember backdrop-blur-md sm:right-8 sm:bottom-8"
        >
          <span className="absolute inset-0 rounded-full bg-ember/20 animate-pulse-ring" />
          <HiArrowUp className="relative z-10 text-lg text-ember-soft" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
