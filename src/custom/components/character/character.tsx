import { useNavigate } from "react-router-dom";
import styles from "./character.module.scss";

export const Character = (props: Props) => {
  const navigate = useNavigate();
  const { character } = props;
  console.log(character);

  const handleClick = (id: number) => navigate(`details/${id}`);

  return (
    <div
      className={styles.container}
      onClick={() => handleClick(character?.id)}
    >
      <div className={styles.images}>
        <img
          src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
          alt="Character Details"
        />
      </div>
      <div className={styles.title}>
        <div className={styles.chracterName}>{character?.name}</div>
      </div>
    </div>
  );
};

interface Props {
  character: {
    name: string;
    id: number;
    thumbnail: {
      path: string;
      extension: string;
    };
    series: {
      available: string;
    };
  };
}
