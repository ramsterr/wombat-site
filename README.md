# wombat-site

The documentation site for [Wombat](https://github.com/ramsterr/Wombat), built with Astro and no
front-end framework. Live at https://wombat.ramsterr.dev/.

Pages:

| route | purpose |
|---|---|
| `/` | landing page: install, speed summary, features |
| `/docs` | documentation hub |
| `/docs/getting-started` | install, setup, the two interfaces, first task |
| `/docs/configuration` | providers, config keys, permissions, environment |
| `/docs/tools` | tool profiles, capabilities, research budgets |
| `/docs/agents` | custom agents, plan scheduler, worktrees, skills |
| `/docs/mcp` | MCP servers, OAuth, gates |
| `/docs/cli` | commands, flags, slash commands, keys, themes |
| `/docs/troubleshooting` | the failures people actually hit |
| `/compare` | Wombat vs Pi benchmarks, method and limitations |
| `/mcp` | MCP server catalog |

## Develop

```sh
npm install
npm run dev      # http://localhost:4322
npm run build
npm run check
```

## Benchmarks

`src/data/benchmarks.ts` is the single source for every number and chart on `/compare` and the
landing page. The charts (`src/components/charts/`) are drawn as SVG from that data; they are not
copied from the eval assets. Source data lives in
[`eval/benchmarks/pi-vs-wombat`](https://github.com/ramsterr/Wombat/tree/main/eval/benchmarks/pi-vs-wombat).
Wombat bars are green, Pi bars grey-blue, and the caveats section stays on the page.

Design: dark terminal palette, Martian Mono / Spline Sans Mono, ASCII wordmarks rendered as SVG
rects. Styles are split into `global.css` (tokens, layout, landing primitives), `docs.css`
(documentation layout), `charts.css` and `pages.css`.
