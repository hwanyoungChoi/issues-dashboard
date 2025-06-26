import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

import { octokit } from "./octokit";

export type GetIssuesParams =
  RestEndpointMethodTypes["issues"]["listForRepo"]["parameters"];
export type GetIssuesResponse =
  RestEndpointMethodTypes["issues"]["listForRepo"]["response"];

export async function getIssues(
  params: GetIssuesParams
): Promise<GetIssuesResponse["data"]> {
  const { data } = await octokit.rest.issues.listForRepo(params);
  return data;
}
