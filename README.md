# Claude Builders Bounty 🤖

> A community bounty board for Claude Code builders.

> **Current status — 2026-08-08:** This repository now contains a small, runnable maintainer-automation MVP. The original bounty-board copy below is preserved for continuity, but its table is not a live GitHub issue query and the repository does not claim that the listed issues exist or that payment is automatic. Treat only verified issue, workflow, and release records as current.

## Maintainer automation (current)

The current MVP provides a `maintainer-bot` CLI that reads a GitHub pull request's metadata and diff, produces a structured review, and can create or update one marked PR comment. The default heuristic engine is deterministic and does not execute pull-request code. An external reviewer can be enabled explicitly with `--mode external` or `--mode auto` plus a configured command.

### Local usage

```bash
npm ci
npm test
npm run test:smoke
node bin/maintainer-bot.js --pr https://github.com/owner/repo/pull/123 --mode heuristic --dry-run
```

To post the idempotent comment, provide `GITHUB_TOKEN` or `GH_TOKEN` and use `--post-comment`. The GitHub Action runs the base-branch code only, uses least-privilege permissions, and does not check out the contributor's head branch.

### Current truth boundary

- This software does not create, approve, or automatically pay bounties.
- The original `/opire` instructions and bounty table are retained below as historical project context, not as proof of a live integration.
- No repository activity metrics are stated unless they are retrieved from GitHub and dated.

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [CHANGELOG.md](CHANGELOG.md) for maintenance rules and the first release notes.

Building with Claude Code? Have tasks to delegate?
Want to get paid for contributing to AI projects?
You're in the right place.

---

## How it works

**To post a bounty**
1. Open a GitHub issue with a clear description and acceptance criteria
2. Comment `/opire create $XXX` in the issue to set the reward
3. Share the link — contributors will find it

**To claim a bounty**
1. Browse the open issues below
2. Comment `/opire try` in the issue you want to work on
3. Submit a PR — payment is automatic on merge ✅

---

## Active Bounties

| # | Task | Amount | Status |
|---|------|--------|--------|
| [#1](../../issues/1) | SKILL: Generate a CHANGELOG from git history | $50 | 🟢 Open |
| [#2](../../issues/2) | TEMPLATE: CLAUDE.md for a Next.js + SQLite project | $75 | 🟢 Open |
| [#3](../../issues/3) | HOOK: Block destructive bash commands in Claude Code | $100 | 🟢 Open |
| [#4](../../issues/4) | AGENT: PR reviewer with structured Markdown output | $150 | 🟢 Open |
| [#5](../../issues/5) | WORKFLOW: n8n + Claude API — automated weekly dev summary | $200 | 🟢 Open |

---

## Rules

- Tasks must be related to Claude Code or AI tooling
- Every issue must have clear acceptance criteria before a bounty is activated
- Payment is handled by [Opire](https://opire.dev) (Stripe)
- Quality over speed — a solid PR beats a fast one

---

## Community

- 🐦 X: [@ClaudeBounty](https://x.com/ClaudeBounty)
- 📧 Contact: claudebounty@gmail.com

---

*Started by the Claude builder community · March 2026 · MIT License*
