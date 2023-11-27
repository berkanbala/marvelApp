import { useGetMarvel } from "common/hooks/useGetMarvel";
import { Character } from "../../custom/components/character/character";
import styles from "./home.module.scss";
// import { useEffect } from "react";
// import { getCharacters } from "common/services/home/homeServices";
// import { CharacterDetails } from "../characterDetails/characterDetails";

export const Home = () => {
  const { characters, charactersLoading, charactersError } = useGetMarvel();

  // const getCharactersOnmounting = async () => {
  //   try {
  //     const response = await getCharacters();
  //     console.log(response);
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // };

  // useEffect(() => {
  //   getCharactersOnmounting();
  // }, []);

  if (charactersLoading) return <div>loading</div>;
  if (charactersError) return <div>error</div>;
  console.log(characters);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {characters?.results?.map((character: any) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
