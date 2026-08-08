# Claude Builders Bounty

> A public early-stage project for matching Claude Code and AI-tooling maintenance tasks with contributors.

## Current status

This repository is a bootstrap project. The public `main` branch currently has no verified active bounties, external users, downloads, releases, or adoption metrics. Those facts are intentionally not inferred from repository creation. See [`docs/evidence-ledger.md`](docs/evidence-ledger.md) for dated evidence.

This project is independent and is not an Anthropic or OpenAI product. A public repository does not imply acceptance into any partner, credits, or subscription program.

## What is included

- A `claude-review` CLI for structured pull-request review reports.
- Strict GitHub pull-request URL validation and metadata/diff retrieval.
- A deterministic heuristic engine that works without a Claude account or API key.
- Optional local Claude CLI support through an explicitly configured command.
- Explicit, opt-in PR comment posting; read-only reporting is the default.
- Tests, samples, a reusable Claude Code reviewer instruction, and read-only GitHub Actions.

## Local use

```bash
npm install
npm test

node bin/claude-review.js \
  --pr https://github.com/owner/repository/pull/123 \
  --mode heuristic \
  --out review.md
```

The default `auto` mode tries the local Claude CLI and falls back to the heuristic engine when that command is unavailable. Use `--mode claude` to fail instead of falling back.

Environment variables:

- `GITHUB_TOKEN` or `GH_TOKEN` — optional token for API limits and explicit comment posting.
- `CLAUDE_REVIEW_COMMAND` — local Claude command; default `claude`.
- `CLAUDE_REVIEW_ARGS` — arguments before the prompt; default `-p`.

To post one review comment intentionally, use `--post-comment` with a token. Never place credentials in this repository, an issue, a pull request, or a sample file.

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

## License

MIT. See [`LICENSE`](LICENSE).
