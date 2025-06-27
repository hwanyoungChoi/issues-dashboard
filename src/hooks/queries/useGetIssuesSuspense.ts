import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from "@tanstack/react-query";

import { getIssues, GetIssuesParams, GetIssuesResponse } from "@/lib/api";

export type UseGetIssuesSuspenseProps = GetIssuesParams;

export const useGetIssuesSuspense = (
  { owner, repo, page = 1, per_page = 10 }: UseGetIssuesSuspenseProps,
  options?: UseSuspenseQueryOptions<GetIssuesResponse>
) => {
  return useSuspenseQuery({
    ...options,
    queryKey: ["get-issues", owner, repo, page, per_page],
    queryFn: () => getIssues({ owner, repo, page, per_page }),
    select: (res) => res.data,
  });
};
