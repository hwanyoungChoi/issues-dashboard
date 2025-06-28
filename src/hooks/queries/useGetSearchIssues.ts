import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { GetSearchIssuesResponse, searchIssues } from "@/lib/api";

export interface UseGetSearchIssuesProps {
  owner: string;
  repo: string;
  page?: number;
  per_page?: number;
  title?: string;
}

export const useGetSearchIssues = (
  { owner, repo, page = 1, per_page = 10, title }: UseGetSearchIssuesProps,
  options?: UseQueryOptions<GetSearchIssuesResponse | null>
) => {
  const enabled = !!title;
  const q = `repo:${owner}/${repo} is:issue in:title ${title}`;

  return useQuery({
    ...options,
    queryKey: ["get-search-issues", q, page, per_page],
    queryFn: () => (enabled ? searchIssues({ q, page, per_page }) : null),
    select: (res) => res?.data,
  });
};
