# Evidence ledger

This file records facts, not marketing claims. Add a row only after checking the primary source on the stated date. Do not infer usage, adoption, revenue, or maintainer importance from repository creation.

| Claim | Value | Source URL or command | Checked on | Notes |
|---|---|---|---|---|
| Public repository | https://github.com/m15363995009-maker/claude-builders-bounty | GitHub REST API repository metadata | 2026-08-09 | Public repository; default branch is `main`. |
| Maintainer role | public owner metadata: `m15363995009-maker` | GitHub REST API repository owner field | 2026-08-09 | Confirms public owner metadata only. |
| Stars | 0 | GitHub REST API repository metadata | 2026-08-09 | Do not substitute watchers or forks. |
| Forks | 0 | GitHub REST API repository metadata | 2026-08-09 | Verified public snapshot. |
| Issues | enabled; 0 open | https://github.com/m15363995009-maker/claude-builders-bounty/issues | 2026-08-09 | Public issue forms are available; no active public bounty issue is currently verified. |
| Repository topics | 6 public topics | GitHub REST API repository topics | 2026-08-09 | Topics describe Claude Code, pull-request review, developer tools, GitHub Actions, open source, and AI tooling. |
| Releases | 1 public release | https://github.com/m15363995009-maker/claude-builders-bounty/releases/tag/v0.1.0 | 2026-08-09 | `v0.1.0` is published; this proves release activity, not adoption. |
| External users or downloads | not recorded | not recorded | 2026-08-08 | Do not claim adoption without dated primary evidence. |
| Local release checks | passing | `npm run check` and `npm pack --dry-run --json` | 2026-08-09 | Unit, CLI help, CLI version, and package-content checks pass; the dry run contains 9 runtime/release files. |
| Maintenance pull request | PR #1 merged | https://github.com/m15363995009-maker/claude-builders-bounty/pull/1 | 2026-08-09 | Release-readiness changes were reviewed through the public pull-request workflow. |
| CI runs | successful `CI` and read-only review runs verified | https://github.com/m15363995009-maker/claude-builders-bounty/actions/runs/31295280021 | 2026-08-09 | Runs for commit `ffa4609`; proves workflow execution, not project adoption. |
| Contribution bounty | proposed; payment platform not configured | [`docs/contribution-bounty.md`](contribution-bounty.md) | 2026-08-09 | No active paid task or payout claim is being made. |

An application to an OSS support program must re-check every row before submission. A missing value is preferable to a fabricated one.
