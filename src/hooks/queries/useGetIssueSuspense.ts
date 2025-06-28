import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from "@tanstack/react-query";

import { getIssue, GetIssueParams, GetIssueResponse } from "@/lib/api";

export type UseGetIssueSuspenseProps = GetIssueParams;

export const useGetIssueSuspense = (
  { owner, repo, issue_number }: UseGetIssueSuspenseProps,
  options?: UseSuspenseQueryOptions<GetIssueResponse>
) => {
  return useSuspenseQuery({
    ...options,
    queryKey: ["get-issue", owner, repo, issue_number],
    queryFn: () => getIssue({ owner, repo, issue_number }),
    select: (res) => res.data,
  });
};
