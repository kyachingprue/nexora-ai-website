import { NavLink } from "react-router";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { NAV_LINKS } from "../data/navigation.js";

const SOCIALS = [
  { icon: FaXTwitter, href: "https://x.com", label: "X (Twitter)" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-ember/15 text-ember">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0 L12 8 L8 16 L4 8 Z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold text-ink">NEXORA</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              Integrate powerful AI models and automation into your products
              and workflows, without rebuilding your stack.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-line text-mute transition-colors hover:border-ember/50 hover:text-ember"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-ink">Navigate</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className="focus-ring text-sm text-mute transition-colors hover:text-ember"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-ink">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-mute">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-ink">Stay in the loop</h3>
            <p className="mt-4 text-sm text-mute">Product news, once a month. No noise.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2 rounded-full border border-line bg-surface-2 p-1.5"
            >
              <HiOutlineEnvelope className="ml-2 shrink-0 text-mute" />
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-mute-2"
              />
              <button
                type="submit"
                className="focus-ring shrink-0 rounded-full bg-ember px-4 py-2 text-xs font-medium text-white"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-mute-2 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Nexora, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
