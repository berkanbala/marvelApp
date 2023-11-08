import styles from "./character.module.scss";

export const Character = (props: Props) => {
  const { character } = props;
  console.log(character);
  return (
    <div className={styles.container}>
      {/* <div className={styles.images}>
        <img
          src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
          alt="Character Details"
        />
      </div> */}
      <div className={styles.heading}>{character?.data?.name}</div>
      <div className={styles.subheading}>{""}</div>
    </div>
  );
};

interface Props {
  character: {
    data: {
      name: string;
      thumbnail: {
        path: string;
        extension: string;
      };
    };
  };
}
