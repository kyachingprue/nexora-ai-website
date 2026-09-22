export const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/ forever",
    tagline: "For individuals trying Nexora out.",
    features: [
      "1 workspace",
      "3 automation workflows",
      "Community support",
      "1K model calls / month",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/ month",
    tagline: "For teams shipping AI features weekly.",
    features: [
      "5 workspaces",
      "Unlimited workflows",
      "Priority support",
      "100K model calls / month",
      "Analytics dashboard",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For organizations with compliance needs.",
    features: [
      "Unlimited workspaces",
      "SSO & audit trails",
      "Dedicated support engineer",
      "Custom model routing",
      "99.9% uptime SLA",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

export const FAQS = [
  {
    q: "Can I switch plans later?",
    a: "Yes — upgrade or downgrade anytime from your workspace settings. Changes apply on your next billing cycle.",
  },
  {
    q: "Do you offer a free trial on Growth?",
    a: "Every Growth plan starts with a 14-day trial, no card required until you decide to continue.",
  },
  {
    q: "What counts as a model call?",
    a: "Any single request routed through Nexora to a language, vision or speech model counts as one call.",
  },
  {
    q: "Is my data used to train models?",
    a: "Never. Your workspace data stays isolated and is not used to train any shared or third-party model.",
  },
];
