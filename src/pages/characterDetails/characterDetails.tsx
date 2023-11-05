import styles from "./characterDetails.module.scss";
export const CharacterDetails = (props: Props) => {
  const { character } = props;

  return (
    <div key={character.id} className={styles.container}>
      <div>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt="Character Details"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <h2>{character.name}</h2>
        </div>
      </div>
    </div>
  );
};
interface Props {
  character: {
    id: number | string;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
}
