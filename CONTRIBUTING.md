# Contributing

Thanks for helping improve the maintainer automation. The project is intentionally small: changes should be easy to run locally, test without network access, and review from observable evidence.

## Development setup

Requirements:

- Node.js 20 or newer
- npm

From a clean checkout:

```bash
npm ci
npm test
npm run test:smoke
```

The default review mode is deterministic `heuristic` mode. It reads pull-request metadata and a diff through the GitHub API; it does not check out or execute code from the pull request head branch.

## Pull requests

1. Open or identify an issue with a focused scope and observable acceptance criteria.
2. Create a branch from `main`.
3. Add or update tests before changing behavior.
4. Run `npm test` and `npm run test:smoke` from a clean checkout.
5. Explain security, permission, workflow, and documentation effects in the pull request.

The repository's maintainer-task form can record a proposed reward, but a proposal is not a payment commitment. No payment is automatically authorized by merging a pull request.

## GitHub Actions safety

The review workflow uses `pull_request_target` so it can comment on fork pull requests. It checks out only the base branch and passes the pull-request URL to the CLI; it must never check out or execute contributor-controlled code with a write-capable token. Keep workflow permissions minimal and pin third-party actions to reviewed commit SHAs.

## Review expectations

- Do not fabricate project metrics, test results, or external service status.
- Keep the heuristic fallback deterministic and offline-testable.
- Treat pull-request titles, bodies, file names, and diffs as untrusted input.
- Update `CHANGELOG.md` for user-visible behavior changes.
