# Claude Builders Bounty

[![CI](https://github.com/m15363995009-maker/claude-builders-bounty/actions/workflows/ci.yml/badge.svg)](https://github.com/m15363995009-maker/claude-builders-bounty/actions/workflows/ci.yml)
[![Latest release](https://img.shields.io/github/v/release/m15363995009-maker/claude-builders-bounty)](https://github.com/m15363995009-maker/claude-builders-bounty/releases)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> A public early-stage project for matching Claude Code and AI-tooling maintenance tasks with contributors.

## Current status

This repository is an early-stage public project. Version `v0.4.0` adds a bundled offline fixture so a first review can run without a GitHub token, live pull request, network request, or Claude account. It retains the mention-safety boundary from `v0.3.0`. The project currently has no verified active bounties, external users, downloads, or adoption metrics; those facts are intentionally not inferred from a release or repository activity. See [`docs/evidence-ledger.md`](docs/evidence-ledger.md) for dated evidence.

The CLI has one dated, public cross-project maintainer pilot on [`codex-maintainer-automation` PR #9](https://github.com/m15363995009-maker/codex-maintainer-automation/pull/9#issuecomment-5231636051). Both repositories have the same owner, so this is workflow evidence, not external adoption.

This project is independent and is not an Anthropic or OpenAI product. A public repository does not imply acceptance into any partner, credits, or subscription program.

## What is included

- A `claude-review` CLI for structured pull-request review reports.
- Strict GitHub pull-request URL validation and metadata/diff retrieval.
- HTTPS-only GitHub URLs, bounded network requests, and partial-response fallback when file metadata is unavailable.
- A deterministic heuristic engine that works without a Claude account or API key.
- Optional local Claude CLI support through an explicitly configured command.
- Explicit, opt-in PR comment posting; read-only reporting is the default.
- Automatic neutralization of GitHub-style mentions in posted review comments while preserving email addresses.
- Tests, samples, a reusable Claude Code reviewer instruction, and read-only GitHub Actions.

## Install from source

No npm registry release is currently claimed. Install from the public source repository:

```bash
git clone https://github.com/m15363995009-maker/claude-builders-bounty.git
cd claude-builders-bounty
npm ci --ignore-scripts
npm run check

node bin/claude-review.js \
  --pr https://github.com/owner/repository/pull/123 \
  --mode heuristic \
  --out review.md
```

Use `node bin/claude-review.js --version` to verify the installed CLI version.

For a one-minute, network-free first run, use the bundled synthetic fixture:

```bash
node bin/claude-review.js \
  --fixture fixtures/sample-pr.json \
  --mode heuristic \
  --out review.md
```

Fixture mode never calls GitHub and rejects `--post-comment`. The bundled file contains synthetic metadata and diff content only.

The default `auto` mode tries the local Claude CLI and falls back to the heuristic engine when that command is unavailable. Use `--mode claude` to fail instead of falling back.

Environment variables:

- `GITHUB_TOKEN` or `GH_TOKEN` — optional token for API limits and explicit comment posting.
- `CLAUDE_REVIEW_COMMAND` — local Claude command; default `claude`.
- `CLAUDE_REVIEW_ARGS` — arguments before the prompt; default `-p`.

To post one review comment intentionally, use `--post-comment` with a token. Never place credentials in this repository, an issue, a pull request, or a sample file.

If the project helps your maintenance workflow, an authentic Star helps other contributors find it. Reproducible issues and focused pull requests are welcome; no engagement action is required for review or support.

## GitHub Actions boundary

The pull-request workflow checks out the trusted base commit, reads pull-request metadata, runs the deterministic engine, and uploads a report artifact. It has read-only permissions and does not execute contributor-controlled code, call a paid model, approve, merge, label, or comment on a pull request.

The local `--post-comment` path is a separate, explicit maintainer action. Human maintainers remain responsible for security decisions, approvals, merges, payments, and releases.

## Contribution bounty plan

The project has a transparent, proposed contribution-bounty plan in [`docs/contribution-bounty.md`](docs/contribution-bounty.md). The board is intentionally empty until a real task has clear acceptance criteria, a fixed amount, a funding source, a payout method, and a verifiable maintainer decision. Do not treat sample files as active bounties, and do not claim payment or adoption that is not recorded in a primary source.

Stars and follows are never required for payment. A future bounty will reward accepted engineering work only.

## Evidence and contribution

- [`docs/evidence-ledger.md`](docs/evidence-ledger.md) — factual, dated project evidence.
- [`docs/contribution-bounty.md`](docs/contribution-bounty.md) — proposed bounty rules and evidence requirements.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — development and review rules.
- [`SECURITY.md`](SECURITY.md) — vulnerability reporting and safety boundary.
- [`CHANGELOG.md`](CHANGELOG.md) — release history.

Contributions should include a focused change, tests or reproducible verification, and documentation updates when behavior changes.

Use the public [issue tracker](https://github.com/m15363995009-maker/claude-builders-bounty/issues) for reproducible bugs, focused feature proposals, and maintenance tasks. Do not post vulnerabilities or secrets in a public issue.

## License

MIT. See [`LICENSE`](LICENSE).
