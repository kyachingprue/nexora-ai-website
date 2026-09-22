import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router";
import { HiXMark } from "react-icons/hi2";
import { NAV_LINKS } from "../data/navigation.js";

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.div
            key="panel"
            className="fixed top-0 right-0 z-50 flex h-dvh w-[78%] max-w-xs flex-col border-l border-line bg-surface px-6 py-6 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-sm tracking-wide text-mute">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-line text-ink"
              >
                <HiXMark className="text-lg" />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `focus-ring flex items-center justify-between border-b border-line/70 py-4 font-display text-xl ${
                        isActive ? "text-ember" : "text-ink"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <NavLink
              to="/pricing"
              onClick={onClose}
              className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-ember py-3 text-center font-medium text-white"
            >
              Get Started
            </NavLink>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
