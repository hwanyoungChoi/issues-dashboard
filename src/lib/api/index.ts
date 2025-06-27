import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

import { octokit } from "./octokit";

export type GetIssuesParams =
  RestEndpointMethodTypes["issues"]["listForRepo"]["parameters"];
export type GetIssuesResponse =
  RestEndpointMethodTypes["issues"]["listForRepo"]["response"];

export async function getIssues(
  params: GetIssuesParams
): Promise<GetIssuesResponse["data"]> {
  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/issues",
    params
  );
  return data;
}

export type GetSearchIssuesParams =
  RestEndpointMethodTypes["search"]["issuesAndPullRequests"]["parameters"];
export type GetSearchIssuesResponse =
  RestEndpointMethodTypes["search"]["issuesAndPullRequests"]["response"];

export async function searchIssues(
  params: GetSearchIssuesParams
): Promise<GetSearchIssuesResponse["data"]> {
  const { data } = await octokit.request("GET /search/issues", params);
  return data;
}

export type GetIssueParams =
  RestEndpointMethodTypes["issues"]["get"]["parameters"];
export type GetIssueResponse =
  RestEndpointMethodTypes["issues"]["get"]["response"];

export async function getIssue(
  params: GetIssueParams
): Promise<GetIssueResponse["data"]> {
  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/issues/{issue_number}",
    params
  );
  return data;
}

export type PostIssueParams =
  RestEndpointMethodTypes["issues"]["create"]["parameters"];
export type PostIssueResponse =
  RestEndpointMethodTypes["issues"]["create"]["response"];

export async function postIssue(
  params: PostIssueParams
): Promise<PostIssueResponse["data"]> {
  const { data } = await octokit.request(
    "POST /repos/{owner}/{repo}/issues",
    params
  );
  return data;
}

export type PatchIssueParams =
  RestEndpointMethodTypes["issues"]["update"]["parameters"];
export type PatchIssueResponse =
  RestEndpointMethodTypes["issues"]["update"]["response"];

export async function patchIssue(
  params: PatchIssueParams
): Promise<PatchIssueResponse["data"]> {
  const { data } = await octokit.request(
    "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
    params
  );
  return data;
}
