import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getIssue, GetIssueParams, GetIssueResponse } from "@/lib/api";

export type UseGetIssueProps = GetIssueParams;

export const useGetIssue = (
  params: UseGetIssueProps,
  options?: UseQueryOptions<GetIssueResponse>
) => {
  return useQuery({
    ...options,
    queryKey: ["get-issue", params.issue_number],
    queryFn: () => getIssue(params),
    select: (res) => res.data,
    enabled: !!params.issue_number,
  });
};
