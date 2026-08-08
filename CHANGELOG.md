# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project follows Semantic Versioning.

## [Unreleased]

No unreleased changes.

## [0.1.0] - 2026-08-08

### Added

- Added the `maintainer-bot` CLI for deterministic pull-request review output.
- Added an optional external reviewer adapter with explicit output validation.
- Added GitHub API access with timeouts, token handling, and structured errors.
- Added idempotent review comments using a stable marker.
- Added unit tests with mocked GitHub responses and no network dependency.
- Added least-privilege CI and base-branch-only pull-request review workflows.
- Added issue forms, a pull-request template, contribution guidance, and a security policy.

### Changed

- Clarified that the preserved bounty-board text is historical content, not a live issue or payment ledger.
