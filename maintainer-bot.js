#!/usr/bin/env node

const fs = require("node:fs/promises");
const path = require("node:path");
const packageJson = require("../package.json");
const { fetchPullRequest } = require("../src/github");
const { buildCommentBody, upsertReviewComment } = require("../src/comment");
const { formatReview, reviewPullRequest } = require("../src/review");

function printHelp() {
  console.log(`Usage: maintainer-bot --pr https://github.com/owner/repo/pull/123 [options]

Options:
  --mode auto|external|heuristic  Review engine. Default: heuristic
  --out <file>                    Write Markdown output to a file
  --post-comment                  Create or update the bot's PR comment
  --dry-run                       Explicitly disable all GitHub writes
  --version                       Print the package version
  --help                          Show this help

Environment:
  GITHUB_TOKEN or GH_TOKEN        GitHub API token for API limits and comments
  MAINTAINER_REVIEW_COMMAND       External reviewer command; default: claude
  MAINTAINER_REVIEW_ARGS          Arguments before the prompt; default: -p
`);
}

function requiredValue(argv, index, flag) {
  const value = argv[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

function parseArgs(argv) {
  const options = { mode: "heuristic", postComment: false, dryRun: false };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--version") {
      options.version = true;
    } else if (arg === "--pr") {
      options.pr = requiredValue(argv, index, "--pr");
      index += 1;
    } else if (arg === "--mode") {
      options.mode = requiredValue(argv, index, "--mode");
      index += 1;
    } else if (arg === "--out") {
      options.out = requiredValue(argv, index, "--out");
      index += 1;
    } else if (arg === "--post-comment") {
      options.postComment = true;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (!["auto", "external", "heuristic", "claude"].includes(options.mode)) {
    throw new Error("--mode must be one of: auto, external, heuristic");
  }
  if (options.postComment && options.dryRun) {
    throw new Error("--post-comment and --dry-run cannot be used together");
  }
  return options;
}

async function main({
  argv = process.argv.slice(2),
  env = process.env,
  fetchImpl = globalThis.fetch,
  stdout = process.stdout,
} = {}) {
  const options = parseArgs(argv);
  if (options.help) {
    printHelp();
    return { action: "help" };
  }
  if (options.version) {
    stdout.write(`${packageJson.version}\n`);
    return { action: "version" };
  }
  if (!options.pr) {
    throw new Error("Missing required --pr https://github.com/owner/repo/pull/123");
  }

  const token = env.GITHUB_TOKEN || env.GH_TOKEN || "";
  if (options.postComment && !token) {
    throw new Error("--post-comment requires GITHUB_TOKEN or GH_TOKEN");
  }
  const pullRequest = await fetchPullRequest(options.pr, { token, fetchImpl });
  const result = reviewPullRequest(pullRequest, {
    mode: options.mode,
    command: env.MAINTAINER_REVIEW_COMMAND || env.CLAUDE_REVIEW_COMMAND,
    args: env.MAINTAINER_REVIEW_ARGS || env.CLAUDE_REVIEW_ARGS,
  });
  const output = formatReview(result.markdown, result.engine);

  if (options.out) {
    const destination = path.resolve(options.out);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(destination, output, "utf8");
  }

  if (options.postComment) {
    const commentBody = buildCommentBody(result.markdown, result.engine);
    await upsertReviewComment(pullRequest, commentBody, { token, fetchImpl });
  }

  stdout.write(output);
  return { action: options.postComment ? "commented" : "reviewed", engine: result.engine };
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`maintainer-bot: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = {
  main,
  parseArgs,
  printHelp,
};
