export const PATHS = {
  HOME: "/",
  /**
   * 게시글 목록 페이지
   *
   * /:id - 게시글 상세 페이지
   */
  ISSUES: "/issues",
  /**
   * 게시글 생성 페이지
   *
   * /:id - 게시글 수정 페이지
   */
  ISSUES_EDIT: "/issues/edit",
} as const;
