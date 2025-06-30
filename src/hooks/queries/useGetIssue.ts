import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getIssue, GetIssueParams, GetIssueResponse } from "@/lib/api";

export const GET_ISSUE_QUERY_KEY = "get-issue";

export type UseGetIssueProps = GetIssueParams;

export const useGetIssue = (
  params: UseGetIssueProps,
  options?: UseQueryOptions<GetIssueResponse>
) => {
  return useQuery({
    ...options,
    queryKey: [GET_ISSUE_QUERY_KEY, params.issue_number],
    queryFn: () => getIssue(params),
    select: (res) => res.data,
    enabled: !!params.issue_number,
  });
};
