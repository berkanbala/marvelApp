import { marvelClient } from "../clients/marvelClient";
import useSWR from "swr";

export const useGetMarvelDetails = (id: string) => {
  const fetcher = () =>
    marvelClient({ params: "characters" })
      .get("")
      .then((response: any) => response.data);

  // const shouldFetch = !!marvelClient;

  // const url = shouldFetch
  //   ? `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=ff6bacea50c9a3736ffaa07a4d45e4d2&hash=034b160f276248069a7aa9db1c8cd9b9`
  //   : null;
  // console.log(url);

  const { data, error, isValidating } = useSWR(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=ff6bacea50c9a3736ffaa07a4d45e4d2&hash=034b160f276248069a7aa9db1c8cd9b9`,
    // "/",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    characterDetails: data?.data?.results[1] || null,
    characterDetailsLoading: isValidating,
    characterDetailsError: error,
  };
};
