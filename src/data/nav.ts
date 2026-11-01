export interface NavItem {
  href: string;
  label: string;
  summary: string;
}

export const docsNav: NavItem[] = [
  {
    href: "/docs",
    label: "overview",
    summary: "What Wombat is, what ships in the box, and how the pieces fit.",
  },
  {
    href: "/docs/getting-started",
    label: "getting started",
    summary: "Install, run setup, and get a first task done.",
  },
  {
    href: "/docs/configuration",
    label: "configuration",
    summary: "Providers, models, permissions, paths and the config file.",
  },
  {
    href: "/docs/tools",
    label: "tools & profiles",
    summary: "The nine-tool coding profile, capability loading and research budgets.",
  },
  {
    href: "/docs/agents",
    label: "agents & orchestration",
    summary: "Custom agents, the plan scheduler, worktrees and review.",
  },
  {
    href: "/docs/mcp",
    label: "mcp servers",
    summary: "stdio and HTTP servers, OAuth, tool naming and gates.",
  },
  {
    href: "/docs/cli",
    label: "cli reference",
    summary: "Every command, slash command, key binding and theme.",
  },
  {
    href: "/docs/troubleshooting",
    label: "troubleshooting",
    summary: "The failures people actually hit, and the fix for each.",
  },
];

export const siteLinks = [
  { href: "/docs", label: "docs" },
  { href: "/compare", label: "vs pi" },
  { href: "/mcp", label: "mcp catalog" },
];
