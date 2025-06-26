import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_PAT,
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
