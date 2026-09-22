import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";
import { HiBars3, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { NAV_LINKS } from "../data/navigation.js";
import useScrollProgress from "../hooks/useScrollProgress.js";
import MobileMenu from "./MobileMenu.jsx";

export default function Navbar() {
  const { scrolled } = useScrollProgress(24);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  // Lock body scroll while the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
          scrolled ? "border-b border-line bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <NavLink to="/" className="focus-ring flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-ember/15 text-ember">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0 L12 8 L8 16 L4 8 Z" fill="currentColor" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              NEXORA
            </span>
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `focus-ring relative py-1 text-sm font-medium transition-colors ${
                    isActive ? "text-ember" : "text-mute hover:text-ink"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-px w-full bg-ember"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLight((v) => !v)}
              aria-label="Toggle light and dark theme"
              className="focus-ring hidden h-10 w-10 place-items-center rounded-full border border-line text-ink sm:grid"
            >
              {light ? <HiOutlineMoon /> : <HiOutlineSun />}
            </button>

            <NavLink
              to="/pricing"
              className="focus-ring hidden items-center gap-1.5 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-white shadow-ember transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Get Started
              <span aria-hidden>&rarr;</span>
            </NavLink>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-line text-ink md:hidden"
            >
              <HiBars3 className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
