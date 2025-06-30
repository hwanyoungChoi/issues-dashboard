import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { postIssue, PostIssueParams, PostIssueResponse } from "@/lib/api";

export type UsePostIssueProps = PostIssueParams;

export const usePostIssue = (
  options?: UseMutationOptions<PostIssueResponse, Error, UsePostIssueProps>
) => {
  return useMutation({
    ...options,
    mutationFn: (params: UsePostIssueProps) => postIssue(params),
  });
};
