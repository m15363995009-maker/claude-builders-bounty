# Changelog

All notable changes to this project are recorded here.

## [Unreleased]

- Require HTTPS GitHub pull-request URLs and reject credential-bearing or port-qualified URLs.
- Preserve successful pull-request metadata when the GitHub file-list request is unavailable.
- Bound GitHub API and diff requests with a 30-second timeout.
- Corrected the public release status and documented source installation.
- Added a contribution guide and enabled the repository issue workflow.
- Added explicit npm package boundaries and an automated package-content check.
- Made the read-only pull-request workflow use reproducible installs and full release checks.

## [0.1.0] - 2026-08-09

- Published the `claude-review` CLI on the public `main` branch.
- Added deterministic heuristic review and optional local Claude CLI support.
- Added read-only CI and pull-request report workflows.
- Added tests, security guidance, contribution templates, and an evidence ledger.
- Added a reproducible release check covering unit tests, CLI help, and version output.
- Added a transparent proposed contribution-bounty plan with no active payout claim.
- No adoption, download, payment, or maintainer-impact claim is inferred from this bootstrap release.
