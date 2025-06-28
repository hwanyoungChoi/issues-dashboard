import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getIssue, GetIssueParams, GetIssueResponse } from "@/lib/api";

export type UseGetIssueProps = GetIssueParams;

export const useGetIssue = (
  { owner, repo, issue_number }: UseGetIssueProps,
  options?: UseQueryOptions<GetIssueResponse>
) => {
  return useQuery({
    ...options,
    queryKey: ["get-issue", owner, repo, issue_number],
    queryFn: () => getIssue({ owner, repo, issue_number }),
    select: (res) => res.data,
    enabled: !!issue_number,
  });
};
