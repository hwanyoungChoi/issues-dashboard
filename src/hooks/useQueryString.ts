import { useRouter } from "next/router";

interface UseQueryStringProps {
  key: string;
  value: string;
}

export function useQueryString({ key, value }: UseQueryStringProps) {
  const router = useRouter();

  const query = (router.query[key] as string) ?? value;

  const setQuery = (value: string, isReplace?: boolean) => {
    const route = {
      pathname: router.pathname,
      query: {
        ...router.query,
        [key]: value,
      },
    };

    if (isReplace) {
      router.replace(route);
      return;
    }

    router.push(route);
  };

  return { query, setQuery };
}
