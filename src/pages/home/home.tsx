import { useGetMarvel } from "common/hooks/useGetMarvel";
// import { marvelClient } from "common/clients/marvelClient";
import { Character } from "../../custom/components/character/character";
import styles from "./home.module.scss";
// import { useAppContext } from "common/context/marvelContext";
// import { useEffect } from "react";
// import { getCharacters } from "common/services/home/homeServices";
// import { CharacterDetails } from "../characterDetails/characterDetails";

export const Home = () => {
  // const { data } = useAppContext();
  const { characters, charactersLoading, charactersError } = useGetMarvel();

  if (charactersLoading) return <div>loading</div>;
  if (charactersError) return <div>error</div>;
  // console.log(data.characters);
  // console.log(marvelClient().get(""));
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {characters?.results?.map((character: any) => (
          <Character
            key={character?.id}
            name={character?.name}
            thumbnail={character?.thumbnail}
            id={character?.id}
          />
        ))}
      </div>
    </div>
  );
};
