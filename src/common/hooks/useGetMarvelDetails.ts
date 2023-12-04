import axios from "axios";
import useSWR from "swr";

export const useGetMarvelDetails = (id: string) => {
  const hash = "034b160f276248069a7aa9db1c8cd9b9";
  const apiKey = "ff6bacea50c9a3736ffaa07a4d45e4d2";
  const query = `${process.env.REACT_APP_API_URL}/characters/${id}?ts=1&apikey=${apiKey}&hash=${hash}`;

  const fetcher = () => axios.get(query).then((response: any) => response.data);

  const { data, error, isValidating } = useSWR("/" + id, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    characterDetails: data?.data?.results[0] || null,
    characterDetailsLoading: isValidating,
    characterDetailsError: error,
  };
};
