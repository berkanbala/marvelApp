import { marvelClient } from "common/clients/marvelClient";
import useSWR from "swr";

export const useGetMarvel = (): {
  characters: any;
  charactersLoading: boolean;
  charactersError: any;
} => {
  const fetcher = (url: any) =>
    marvelClient({ params: "characters" })
      .get(url)
      .then((response: any) => response.data);
  // const shouldFetch = !!marvelClient;
  // const url = shouldFetch ? "/" : null;
  const { data, error, isValidating } = useSWR("", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    characters: data?.data || null,
    charactersLoading: isValidating,
    charactersError: error,
  };
};
