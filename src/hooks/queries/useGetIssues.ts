import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getIssues, GetIssuesParams, GetIssuesResponse } from "@/lib/api";

export type UseGetIssuesProps = GetIssuesParams;

export const useGetIssues = (
  { owner, repo, page = 1, per_page = 10 }: UseGetIssuesProps,
  options?: UseQueryOptions<GetIssuesResponse>
) => {
  return useQuery({
    ...options,
    queryKey: ["get-issues", owner, repo, page, per_page],
    queryFn: () => getIssues({ owner, repo, page, per_page }),
    select: (res) => res.data,
  });
};
