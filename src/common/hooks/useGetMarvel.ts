import { marvelClient } from "common/clients/marvelClient";
import useSWR from "swr";

export const useGetMarvel = () => {
  const fetcher = () =>
    marvelClient()
      .get("")
      .then((response: any) => response.data);

  const { data, error, isValidating } = useSWR("/", fetcher, {});
  return {
    characters: data?.data || null,
    charactersLoading: isValidating,
    charactersError: error,
  };
};
