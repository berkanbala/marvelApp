import { marvelClient } from "../clients/marvelClient";
import useSWR from "swr";

export const useGetMarvelDetails = (id: string) => {
  const fetcher = () =>
    marvelClient(`/${id}`)
      .get("")
      .then((response: any) => response.data);

  const { data, error, isValidating } = useSWR("/", fetcher, {});
  return {
    characterDetails: data?.data?.results[0] || null,
    characterDetailsLoading: isValidating,
    characterDetailsError: error,
  };
};
