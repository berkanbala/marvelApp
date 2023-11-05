// import { apiClient } from "common/clients/marvelClient";
// import { useGetMarvel } from "../../common/hooks/useGetMarvel";
import { getCharacters } from "common/services/home/homeServices";
import { Character } from "../../custom/components/character/character";
import styles from "./home.module.scss";
import { useEffect } from "react";

export const Home = () => {
  // const { characters, charactersError, charactersLoading } = useGetMarvel();

  const getCharactersOnmounting = async () => {
    try {
      const response = await getCharacters();
      console.log(response);
    } catch (error) {
      console.warn(error);
    }
  };

  // if (charactersLoading) return <div>loading...</div>;
  // if (charactersError) return <div>error</div>;
  // console.log(characters);

  useEffect(() => {
    getCharactersOnmounting();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* {characters?.results?.map((character: any) => (
          <Character key={character.id} character={character} />
        ))} */}
      </div>
    </div>
  );
};
