import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { GetSearchIssuesResponse, searchIssues } from "@/lib/api";

export interface UseGetSearchIssuesProps {
  owner: string;
  repo: string;
  page?: number;
  per_page?: number;

  title?: string;
  isOpen?: boolean;
}

export const useGetSearchIssues = (
  {
    owner,
    repo,
    page = 1,
    per_page = 10,
    title,
    isOpen = true,
  }: UseGetSearchIssuesProps,
  options?: UseQueryOptions<GetSearchIssuesResponse | null>
) => {
  const q = `repo:${owner}/${repo} is:issue in:title ${title} is:${
    isOpen ? "open" : "closed"
  }`;

  return useQuery({
    ...options,
    queryKey: ["get-search-issues", q, page, per_page],
    queryFn: () => searchIssues({ q, page, per_page }),
    select: (res) => res?.data,
  });
};
