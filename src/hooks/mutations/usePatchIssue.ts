import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { patchIssue, PatchIssueParams, PatchIssueResponse } from "@/lib/api";

export type UsePatchIssueProps = PatchIssueParams;

export const usePatchIssue = (
  options?: UseMutationOptions<PatchIssueResponse, Error, UsePatchIssueProps>
) => {
  return useMutation({
    ...options,
    mutationFn: (params: UsePatchIssueProps) => patchIssue(params),
  });
};
