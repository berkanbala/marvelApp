import styles from "./characterDetails.module.scss";

export const CharacterDetails = () => {
  return (
    <div className={styles.container}>
      {/* <div>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt="Character Details"
        />
      </div> */}
      <div className={styles.content}>
        <div className={styles.details}>{/* <h2>{character.name}</h2> */}</div>
      </div>
    </div>
  );
};
