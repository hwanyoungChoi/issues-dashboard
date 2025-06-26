import { useSuspenseQuery } from "@tanstack/react-query";

import { getIssues, GetIssuesParams } from "@/lib/api";

export const useGetIssuesSuspense = ({
  owner,
  repo,
  page = 1,
  per_page = 10,
}: GetIssuesParams) => {
  return useSuspenseQuery({
    queryKey: ["get-issues", owner, repo, page, per_page],
    queryFn: () => getIssues({ owner, repo, page, per_page }),
  });
};
