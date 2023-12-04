import { useGetMarvel } from "common/hooks/useGetMarvel";
import { Character } from "../../custom/components/character/character";
import styles from "./home.module.scss";

export const Home = () => {
  const { characters, charactersLoading, charactersError } = useGetMarvel();

  if (charactersLoading) return <div>loading</div>;
  if (charactersError) return <div>error</div>;

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
