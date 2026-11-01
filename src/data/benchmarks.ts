export interface AgentRun {
  input: number;
  output: number;
  tools: number;
  steps: number;
  seconds: number;
  passed: boolean;
  timedOut?: boolean;
}

export interface TaskResult {
  task: string;
  kind: "simple" | "complex";
  detail: string;
  wombat: AgentRun;
  pi: AgentRun;
}

/* efficienty-10 run: deepseek-v4.1-flash, Pi 1.4.0, Wombat @ beba1b8.
   Source: eval/benchmarks/pi-vs-wombat/efficienty-10/results.json */
export const tenTask = {
  label: "10-task suite",
  model: "deepseek-v4.1-flash",
  date: "31 Oct 2026",
  timeoutSeconds: 300,
  tasks: [
    {
      task: "exact_edit",
      kind: "simple",
      detail: "Flip mode=draft to mode=final in a CRLF/UTF-8 file, bytes intact.",
      wombat: { input: 46058, output: 760, tools: 6, steps: 7, seconds: 16.2, passed: true },
      pi: { input: 15180, output: 330, tools: 2, steps: 3, seconds: 8.7, passed: true },
    },
    {
      task: "bugfix_tests",
      kind: "simple",
      detail: "Run the tests, fix calc.py, leave the tests alone.",
      wombat: { input: 32901, output: 530, tools: 6, steps: 5, seconds: 9.9, passed: true },
      pi: { input: 33938, output: 733, tools: 7, steps: 6, seconds: 22.0, passed: true },
    },
    {
      task: "cli_json",
      kind: "simple",
      detail: "summarize.py prints a sorted JSON count map and nothing else.",
      wombat: { input: 32416, output: 730, tools: 4, steps: 5, seconds: 12.3, passed: true },
      pi: { input: 32266, output: 649, tools: 5, steps: 6, seconds: 18.8, passed: true },
    },
    {
      task: "vague_fix",
      kind: "simple",
      detail: "The prompt is only “fix it”; a failing test is the only signal.",
      wombat: { input: 51228, output: 1220, tools: 10, steps: 7, seconds: 20.5, passed: true },
      pi: { input: 26083, output: 364, tools: 4, steps: 5, seconds: 13.1, passed: true },
    },
    {
      task: "multi_file_refactor",
      kind: "complex",
      detail: "Add a discounted helper used by both order paths; behaviour unchanged.",
      wombat: { input: 56470, output: 1031, tools: 10, steps: 8, seconds: 19.8, passed: true },
      pi: { input: 28190, output: 767, tools: 6, steps: 5, seconds: 13.2, passed: true },
    },
    {
      task: "git_commit",
      kind: "complex",
      detail: "Branch feature, bump app.txt to v2, commit, leave the tree clean.",
      wombat: { input: 34471, output: 604, tools: 4, steps: 5, seconds: 13.8, passed: true },
      pi: { input: 20422, output: 403, tools: 3, steps: 4, seconds: 11.2, passed: true },
    },
    {
      task: "server_process",
      kind: "complex",
      detail: "Start server.py, fetch /health, write the token, stop the server.",
      wombat: { input: 48764, output: 896, tools: 6, steps: 6, seconds: 17.7, passed: true },
      pi: { input: 26488, output: 628, tools: 4, steps: 5, seconds: 12.9, passed: true },
    },
    {
      task: "browser_playwright",
      kind: "complex",
      detail: "Click #reveal with Playwright, read the token, save a matching screenshot.",
      wombat: { input: 42722, output: 1223, tools: 6, steps: 5, seconds: 16.6, passed: true },
      pi: { input: 22139, output: 605, tools: 4, steps: 4, seconds: 14.4, passed: true },
    },
    {
      task: "mcp_tool",
      kind: "complex",
      detail: "Call bench_stamp once with label task-mcp, write the reply verbatim.",
      wombat: { input: 31562, output: 392, tools: 5, steps: 5, seconds: 12.3, passed: true },
      pi: { input: 19561, output: 229, tools: 3, steps: 4, seconds: 10.7, passed: true },
    },
    {
      task: "research_bounded",
      kind: "complex",
      detail: "Research remote-India roles at five named companies and write answer.md.",
      wombat: { input: 121552, output: 10325, tools: 9, steps: 8, seconds: 136.8, passed: true },
      pi: {
        input: 612036,
        output: 11538,
        tools: 36,
        steps: 22,
        seconds: 300.1,
        passed: false,
        timedOut: true,
      },
    },
  ] satisfies TaskResult[],
};

export const tenTaskTotals = {
  wombat: { input: 498144, output: 17711, tools: 66, steps: 61, seconds: 275.9, passed: 10 },
  pi: { input: 836303, output: 16246, tools: 74, steps: 64, seconds: 424.9, passed: 9 },
};

/* The nine ordinary (non-research) tasks from the same run. */
export const tenTaskOrdinary = {
  wombat: { input: 376592, output: 7386, tools: 57, steps: 53, seconds: 139.1 },
  pi: { input: 224267, output: 4708, tools: 38, steps: 42, seconds: 124.9 },
};

/* 18-task suite: identical model, instructions, skill and MCP server.
   Source: eval/benchmarks/pi-vs-wombat/EFFICIENCY.md, Phase 2 full-suite table */
export const eighteenTask = {
  label: "18-task suite",
  model: "opencode-go/beam-free",
  rows: [
    {
      name: "Pi 1.4.0",
      agent: "pi" as const,
      passed: 18,
      input: 416257,
      uncached: 131201,
      output: 9574,
      tools: 76,
      steps: 91,
      seconds: 270.2,
      median: 8.0,
    },
    {
      name: "Wombat, default profile",
      agent: "wombat" as const,
      passed: 18,
      input: 554656,
      uncached: 210400,
      output: 10635,
      tools: 88,
      steps: 100,
      seconds: 168.2,
      median: 8.7,
    },
    {
      name: "Wombat, lean profile",
      agent: "wombat" as const,
      passed: 18,
      input: 244613,
      uncached: 130885,
      output: 8509,
      tools: 69,
      steps: 82,
      seconds: 133.6,
      median: 6.7,
    },
  ],
};

export const method: [string, string][] = [
  ["Model", "same for both agents, per suite"],
  ["Tasks", "10 deterministic checks · 18 deterministic checks"],
  ["Instructions", "same AGENTS.md and bench skill"],
  ["Tools", "same MCP server, same Playwright install"],
  ["Workspace", "fresh directory per run"],
  ["Time", "wall-clock agent process; checks excluded"],
  ["Scoring", "pass/fail from the task check, not a quality score"],
];

export function ratio(a: number, b: number): string {
  const value = a / b;
  return `${value.toFixed(2)}×`;
}

export function seconds(value: number): string {
  return `${value.toFixed(1)}s`;
}

export function tokens(value: number): string {
  return value.toLocaleString("en-US");
}
