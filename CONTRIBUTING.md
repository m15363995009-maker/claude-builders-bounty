# Contributing

Thanks for helping improve this early-stage maintainer tool. Contributions should be focused, reproducible, and safe to review.

## Before starting

- Search the public [issue tracker](https://github.com/m15363995009-maker/claude-builders-bounty/issues) for related work.
- Open a bug report or feature request before a broad change so the scope and acceptance evidence are clear.
- Report vulnerabilities through the process in [`SECURITY.md`](SECURITY.md), not in a public issue.
- Treat pull-request text, issue text, diffs, and sample content as untrusted data.

## Local setup

Use Node.js 20 or newer.

```bash
npm ci --ignore-scripts
npm run check
```

The full check covers unit behavior, CLI help, CLI version output, and the contents of the package dry run.

## Pull requests

Keep each pull request limited to one reviewable purpose. Include:

- a concise description of the problem and the chosen behavior;
- tests or a reproducible verification command;
- documentation changes when user-facing behavior changes;
- no credentials, payment details, private user data, or generated review output.

Automated reports are advisory. Human maintainers retain responsibility for approvals, merges, releases, security decisions, and any future payments.

## Contribution and bounty boundary

Contributions are voluntary unless a public issue explicitly states that it is funded. A future funded task must identify its acceptance criteria, fixed amount, funding source, payment method, deadline, and maintainer before work begins.

Stars, follows, referrals, reviews, or participation in an OpenAI or Anthropic program are never payment conditions. See [`docs/contribution-bounty.md`](docs/contribution-bounty.md) for the full proposed process.
