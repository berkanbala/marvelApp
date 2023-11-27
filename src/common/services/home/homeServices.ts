import { marvelClient } from "common/clients/marvelClient";

export const getCharacters = async () => {
  const response = await marvelClient().get("");
  return response;
};
