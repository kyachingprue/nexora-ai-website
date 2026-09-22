import { motion } from "motion/react";
import { NavLink } from "react-router";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO path="/404" title="Page not found" description="This page does not exist." />
      <section className="noise-veil relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-8">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(240,48,58,0.35), transparent 70%)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <p className="font-display text-8xl font-semibold text-ember sm:text-9xl">404</p>
          <h1 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
            This page drifted out of orbit
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-sm text-mute">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <NavLink
            to="/"
            className="focus-ring mt-8 inline-flex items-center gap-1.5 rounded-full bg-ember px-6 py-3 text-sm font-medium text-white shadow-ember"
          >
            Back to home
          </NavLink>
        </motion.div>
      </section>
    </>
  );
}
