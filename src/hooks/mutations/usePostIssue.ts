import { useMutation } from "@tanstack/react-query";

import { postIssue, PostIssueParams } from "@/lib/api";

export type UsePostIssueProps = PostIssueParams;

export const usePostIssue = () => {
  return useMutation({
    mutationFn: (params: UsePostIssueProps) => postIssue(params),
  });
};
