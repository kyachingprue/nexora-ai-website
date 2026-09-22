import {
  HiOutlineCpuChip,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlinePuzzlePiece,
  HiOutlineShieldCheck,
  HiOutlineCommandLine,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

export const HERO_CARDS = [
  {
    icon: HiOutlineCpuChip,
    title: "AI Models",
    desc: "Access state-of-the-art AI models in one place.",
  },
  {
    icon: HiOutlineCog6Tooth,
    title: "Automation",
    desc: "Automate workflows and save hours daily.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Analytics",
    desc: "Gain actionable insights from intelligent data.",
  },
  {
    icon: HiOutlinePuzzlePiece,
    title: "Integrations",
    desc: "Seamlessly connect with your favorite tools.",
  },
];

export const STATS = [
  { value: "99.9%", label: "Uptime" },
  { value: "10K+", label: "Active Users" },
  { value: "50+", label: "Integrations" },
  { value: "24/7", label: "Support" },
];

export const FEATURES = [
  {
    icon: HiOutlineCpuChip,
    title: "Unified model layer",
    desc: "Route every request across leading language, vision and speech models through a single, versioned API.",
  },
  {
    icon: HiOutlineCog6Tooth,
    title: "Visual automation builder",
    desc: "Chain triggers, models and actions on a canvas — no code required to ship a working pipeline.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Real-time analytics",
    desc: "Track latency, cost and accuracy per workflow with dashboards that update as traffic moves.",
  },
  {
    icon: HiOutlinePuzzlePiece,
    title: "50+ integrations",
    desc: "Drop Nexora into Slack, Notion, Salesforce and your own stack with prebuilt, typed connectors.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Enterprise-grade security",
    desc: "SOC 2 Type II, SSO, granular roles and full audit trails, on by default for every workspace.",
  },
  {
    icon: HiOutlineCommandLine,
    title: "Developer-first SDKs",
    desc: "Typed clients for JavaScript, Python and Go, plus a CLI for local testing and CI pipelines.",
  },
  {
    icon: HiOutlineBolt,
    title: "Sub-100ms routing",
    desc: "Edge-deployed inference routing keeps decisions fast, even under bursty, global traffic.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Global infrastructure",
    desc: "Data residency across 12 regions with automatic failover baked into every deployment.",
  },
];
