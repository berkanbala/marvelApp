import { useEffect, useState } from "react";
import { ICharacter } from "common/models/character";
import { Character } from "../../custom/components/character/character";
import { Loading } from "../../common/components/ui/loading/loading";
import styles from "./home.module.scss";

export const Home = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(true);

  const query = `${process.env.REACT_APP_API_URL}/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_API_HASH}`;

  useEffect(() => {
    fetch(`${query}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data?.data?.results))
      .catch((error) => console.warn(error))
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {characters?.map((character: ICharacter) => (
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
