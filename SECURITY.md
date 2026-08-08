# Security policy

## Supported versions

| Version | Supported |
| --- | --- |
| 0.1.x | Yes |

## Reporting a vulnerability

Please use [GitHub private vulnerability reporting](https://github.com/m15363995009-maker/claude-builders-bounty/security/advisories/new) when available. Do not open a public issue for an unpatched vulnerability and do not include secrets or private pull-request content in a public report.

Include:

- affected version or commit;
- a concise description of the impact;
- safe reproduction steps or a minimal proof of concept;
- any mitigation already applied.

## Security boundaries

- The review workflow runs from the base branch and does not execute pull-request head code.
- Pull-request text and diffs are untrusted input and may contain prompt-injection instructions.
- GitHub tokens should be supplied through Actions secrets or the local environment and must never be committed.
- The bot posts a marked, idempotent issue comment; it does not merge pull requests or authorize payments.
