import styles from "./character.module.scss";

export const Character = (props: Props) => {
  const { character } = props;
  console.log(character);
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img
          src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
          alt="Character Details"
        />
      </div>
      <div className={styles.title}>
        <div className={styles.chracterName}>{character?.name}</div>
        {/* <div className={styles.subheading}>0</div> */}
      </div>
    </div>
  );
};

interface Props {
  character: {
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
}
