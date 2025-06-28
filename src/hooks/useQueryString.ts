import { useRouter } from "next/router";

interface UseQueryStringProps {
  initialQueries: Record<string, string>;
}

export function useQueryString({ initialQueries }: UseQueryStringProps) {
  const router = useRouter();

  const queries: Record<string, string> = {};
  for (const key in initialQueries) {
    const value = router.query[key];
    if (typeof value === "string") {
      queries[key] = value;
    } else if (Array.isArray(value)) {
      queries[key] = value[0] ?? initialQueries[key];
    } else {
      queries[key] = initialQueries[key];
    }
  }

  const setQueries = (queries: Record<string, string>, isReplace?: boolean) => {
    const route = {
      pathname: router.pathname,
      query: {
        ...router.query,
        ...queries,
      },
    };

    if (isReplace) {
      router.replace(route);
      return;
    }

    router.push(route);
  };

  return { queries, setQueries };
}
