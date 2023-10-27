import styles from "./character.module.scss";

export const Character = (props: Props) => {
  const { character } = props;
  console.log(character);
  return (
    <div className={styles.container}>
      <div className="column-images">
        <img
          src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
          alt="Character Details"
        />
      </div>
      <div className="column-heading">{character.name}</div>
      <div className="column-subheading">{""}</div>
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
