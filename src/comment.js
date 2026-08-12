function neutralizeGithubMentions(body) {
  return String(body).replace(
    /(^|[^A-Za-z0-9._%+-])@([A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?)(?![A-Za-z0-9-])/g,
    `$1@\u200b$2`,
  );
}

async function postIssueComment(pr, body, { token, fetchImpl = globalThis.fetch }) {
  const url = `https://api.github.com/repos/${pr.owner}/${pr.repo}/issues/${pr.number}/comments`;
  if (typeof fetchImpl !== "function") {
    throw new Error("A fetch implementation is required");
  }
  const response = await fetchImpl(url, {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "claude-pr-review-agent",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({ body: neutralizeGithubMentions(body) }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to post PR comment (${response.status}): ${text}`);
  }
}

module.exports = {
  neutralizeGithubMentions,
  postIssueComment,
};
