import axios from "axios";

export const marvelClient = (options?: { token?: string; params?: string }) => {
  if (!process.env.REACT_APP_API_URL)
    console.warn("cannot find appConfig baseUrl");

  const hash = "034b160f276248069a7aa9db1c8cd9b9";
  const apiKey = "ff6bacea50c9a3736ffaa07a4d45e4d2";
  const query = `/${options?.params}?ts=1&apikey=${apiKey}&hash=${hash}`;

  const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/${query}`,
    headers: {
      "Content-Type": "application/json",
      // ...(options.token && { Authorization: `Bearer: ${options.token}` }),
    },
  });

  return apiClient;
};
