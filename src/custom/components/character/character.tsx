import { useNavigate } from "react-router-dom";
import styles from "./character.module.scss";

export const Character = (props: Props) => {
  const navigate = useNavigate();
  const { name, thumbnail, id } = props;

  const handleClick = (id: any) => navigate(`details/${id}`);

  return (
    <div className={styles.container} onClick={() => handleClick(id)}>
      <div className={styles.images}>
        <img
          src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
          alt="Character Details"
        />
      </div>
      <div className={styles.title}>
        <div className={styles.chracterName}>{name}</div>
      </div>
    </div>
  );
};

interface Props {
  name: string;
  id: any;
  thumbnail: {
    path: string;
    extension: string;
  };
}
