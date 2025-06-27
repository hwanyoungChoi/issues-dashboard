import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from "@tanstack/react-query";

import { GetSearchIssuesResponse, searchIssues } from "@/lib/api";

export interface UseGetSearchIssuesSuspenseProps {
  owner: string;
  repo: string;
  page?: number;
  per_page?: number;
  title?: string;
}

export const useGetSearchIssuesSuspense = (
  {
    owner,
    repo,
    page = 1,
    per_page = 10,
    title,
  }: UseGetSearchIssuesSuspenseProps,
  options?: UseSuspenseQueryOptions<GetSearchIssuesResponse | null>
) => {
  const enabled = !!title;
  const q = `repo:${owner}/${repo} is:issue in:title ${title}`;

  return useSuspenseQuery({
    ...options,
    queryKey: ["get-search-issues", q, page, per_page],
    queryFn: () => (enabled ? searchIssues({ q, page, per_page }) : null),
    select: (res) => res?.data,
  });
};
