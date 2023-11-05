import useSWR from "swr";
import { marvelClient } from "../clients/marvelClient";

const hash = "034b160f276248069a7aa9db1c8cd9b9";
const apiKey = "ff6bacea50c9a3736ffaa07a4d45e4d2";
const query = `/characters?ts=1&apikey=${apiKey}&hash=${hash}`;

export const useGetMarvel = (): {
  characters: any;
  charactersLoading: boolean;
  charactersError: any;
} => {
  const marvelApiClient = marvelClient();

  const fetcher = (url: string) =>
    marvelApiClient.get(url).then((response: any) => response.data);
  const shouldFetch = !!marvelApiClient;

  const url = shouldFetch ? query : null;

  const { data, error, isValidating } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    characters: data || null,
    charactersLoading: isValidating,
    charactersError: error,
  };
};
