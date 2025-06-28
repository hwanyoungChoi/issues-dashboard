import { useMutation } from "@tanstack/react-query";

import { patchIssue, PatchIssueParams } from "@/lib/api";

export type UsePatchIssueProps = PatchIssueParams;

export const usePatchIssue = () => {
  return useMutation({
    mutationFn: (params: UsePatchIssueProps) => patchIssue(params),
  });
};
