import { Loading } from "../../common/components/ui/loading/loading";
import { Character } from "../../custom/components/character/character";
import styles from "./home.module.scss";
<<<<<<< HEAD
import { Loading } from "common/components/ui/loading/loading";
=======
import { useGetMarvel } from "../../common/hooks/useGetMarvel";
>>>>>>> ec06fc633963c974a05f46647448562ed22c95e7

export const Home = () => {
  const { characters, charactersLoading, charactersError } = useGetMarvel();

  if (charactersLoading) return <Loading />;
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
