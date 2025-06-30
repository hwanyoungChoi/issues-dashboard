import { useRouter } from "next/router";
import { useMemo } from "react";

interface UseQueryStringProps {
  initialQueries: Record<string, string>;
}

export function useQueryString({ initialQueries }: UseQueryStringProps) {
  const router = useRouter();

  const queries = useMemo(() => {
    const result: Record<string, string> = {};
    for (const key in initialQueries) {
      const value = router.query[key];
      if (typeof value === "string") {
        result[key] = value;
      } else if (Array.isArray(value)) {
        result[key] = value[0] ?? initialQueries[key];
      } else {
        result[key] = initialQueries[key];
      }
    }
    return result;
  }, [router.query, initialQueries]);

  const setQueries = (
    queries: Record<string, string>,
    isReplace?: "push" | "replace"
  ) => {
    const route = {
      pathname: router.pathname,
      query: {
        ...router.query,
        ...queries,
      },
    };

    if (isReplace === "replace") {
      router.replace(route);
      return;
    }

    router.push(route);
  };

  return { queries, setQueries };
}
