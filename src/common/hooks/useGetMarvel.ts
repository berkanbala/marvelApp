import useSWR from "swr";
import { apiClient } from "../clients/appClients";

export const useGetMarvel = (): {
  characters: any;
  charactersLoading: boolean;
  charactersError: any;
} => {
  const marvelApiClient = apiClient({});

  const fetcher = (url: string) =>
    marvelApiClient.get(url).then((response) => response.data);
  const shouldFetch = !!marvelApiClient;

  const url = shouldFetch
    ? `https://gateway.marvel.com:443/v1/public/characters`
    : null;

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
