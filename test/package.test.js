const assert = require("node:assert/strict");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const repositoryRoot = path.resolve(__dirname, "..");
const npmArgs = ["pack", "--dry-run", "--json", "--ignore-scripts"];
let npmExecutable = "npm";
let npmExecutableArgs = npmArgs;
if (process.env.npm_execpath) {
  npmExecutable = process.execPath;
  npmExecutableArgs = [process.env.npm_execpath, ...npmArgs];
} else if (process.platform === "win32") {
  npmExecutable = process.env.ComSpec || "cmd.exe";
  npmExecutableArgs = [
    "/d",
    "/s",
    "/c",
    "npm.cmd pack --dry-run --json --ignore-scripts",
  ];
}
const result = spawnSync(
  npmExecutable,
  npmExecutableArgs,
  {
    cwd: repositoryRoot,
    encoding: "utf8",
    windowsHide: true,
  },
);

if (result.error) {
  throw result.error;
}
assert.equal(result.status, 0, result.stderr || result.stdout);
assert.doesNotMatch(result.stderr, /gitignore-fallback/i);

const [pack] = JSON.parse(result.stdout);
assert.ok(pack, "npm pack did not return package metadata");

const paths = pack.files.map((file) => file.path);
const requiredPaths = [
  "CHANGELOG.md",
  "LICENSE",
  "README.md",
  "SECURITY.md",
  "bin/claude-review.js",
  "fixtures/sample-pr.json",
  "package.json",
  "src/comment.js",
  "src/github.js",
  "src/review.js",
];

for (const requiredPath of requiredPaths) {
  assert.ok(paths.includes(requiredPath), `missing package file: ${requiredPath}`);
}

const forbiddenPrefixes = [".claude/", ".github/", "docs/", "samples/", "test/"];
for (const filePath of paths) {
  assert.equal(
    forbiddenPrefixes.some((prefix) => filePath.startsWith(prefix)),
    false,
    `development-only file included in package: ${filePath}`,
  );
}

console.log(`package contents passed (${paths.length} files)`);
