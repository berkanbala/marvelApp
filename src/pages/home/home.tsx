import { Character } from "../../custom/components/character/character";
import { useEffect, useState } from "react";
import { ICharacter } from "common/models/character";
import styles from "./home.module.scss";
import { Loading } from "../../common/components/ui/loading/loading";

export const Home = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(true);

  const hash = "034b160f276248069a7aa9db1c8cd9b9";
  const apiKey = "ff6bacea50c9a3736ffaa07a4d45e4d2";
  const query = `${process.env.REACT_APP_API_URL}/characters?ts=1&apikey=${apiKey}&hash=${hash}`;

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
